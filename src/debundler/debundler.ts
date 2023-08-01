import * as fs from 'fs';
import * as path from 'path';

import { NodePath } from '@babel/traverse';
import generate from '@babel/generator';
import {
    Node,
    Expression,
    SpreadElement,
    ObjectProperty,
    Statement,
    File,

    callExpression,
    functionExpression,
    blockStatement,
    expressionStatement,
    identifier,
    variableDeclaration,
    nullLiteral,
    variableDeclarator,
    file,
    program as makeProgram,

    VISITOR_KEYS
} from '@babel/types';
import { parse } from '@babel/parser';

import { log } from '../utils/logging';
import { hasattr } from '../utils/common';
import { Boundaries, BundleInfo } from './boundaries';

import { renameRequireInNodePath, renameRequireInAST } from './rename-require';

import * as matcher from 'js-ast-matcher';

interface DebundlerResult {
    modules: Map<string, Node>;
    nameToBundleClass: Map<string, string>;
    curBundleClass: string;
}

export const DEFAULT_SIGNATURE_PATH = path.join(__dirname, '..', '..', 'bundler-signatures');

// moduleCallback function receive a module's name and the module
// as arguments. moduleCallback can transform the code of the module.
// To do that, the function should return a string (new module's
// code), it will replace the old code in Debundler's result storage
// (returned by `.getModules()`). Otherwise, it should return `null`.
type moduleCallback = (name: string, module: string) => string | null;

export class Debundler {
    private bundleSignatures: ReturnType<JSON['parse']>[];
    private baseAST?: Node;
    private astMatcher: matcher.ASTPatternMatcher;
    protected result: DebundlerResult;
    protected verbose: boolean;

    constructor(
        debundleSignaturesPath: string = DEFAULT_SIGNATURE_PATH,
    ) {
        this.bundleSignatures = [];
        this.verbose = false;
        this.result = {
            modules: new Map<string, Node>(),
            curBundleClass: '',
            nameToBundleClass: new Map<string, string>()
        };
        this.astMatcher = new matcher.ASTPatternMatcher();
        this.loadSignatures(debundleSignaturesPath);
    }

    setVerboseMode(): void {
        this.verbose = true;
    }

    private loadSignatures(debundleSignaturesPath: string): void {
        const stats = fs.lstatSync(debundleSignaturesPath);
        if (stats.isDirectory()) {
            this.bundleSignatures = fs.readdirSync(debundleSignaturesPath).map(
                (file: string) => JSON.parse(fs.readFileSync(path.join(debundleSignaturesPath, file)).toString())
            );
        } else if (stats.isFile()) {
            this.bundleSignatures.push(
                JSON.parse(fs.readFileSync(debundleSignaturesPath).toString())
            );
        } else {
            throw new Error(debundleSignaturesPath + ' not file and not dir');
        }
    }

    private addModule(name: string, content: Node | null): void {
        if (content === null) {
            return;
        }
        this.result.modules.set(name, content);
    }

    private makeFile(body: Statement[]): File {
        return file(makeProgram(body));
    }

    private getModuleName(module: any): string {
        let moduleName: string = '';

        if (hasattr(module.key, 'value') && typeof module.key.value !== 'undefined' && module.key.value !== null) {
            moduleName = module.key.value.toString();
        } else if (hasattr(module.key, 'name') && typeof module.key.name !== 'undefined' && module.key.name !== null) {
            moduleName = module.key.name.toString();
        }

        return moduleName;
    };

    public static renameRequire(ast: any, bundleClass: string, verbose=false, path?: NodePath) {
        if (ast === null && typeof path === 'undefined') {
            return null;
        }

        let names = ['module', 'exports', 'require'];
        if (bundleClass.startsWith('browserify')) {
            names = ['require', 'module', 'exports'];
        }

        if (typeof path !== 'undefined') {
            return renameRequireInNodePath(path, names);
        } else {
            return renameRequireInAST(ast, names, verbose);
        }
    };

    private wrapFuncWithReturnInIIFE(ast: any, start: number, end: number) {
        for (const node of ast.program.body) {
            if (node.type === 'ReturnStatement') {
                // if met return at top level then wrap it inside IIFE
                // !function(){...body}()
                ast.program.body = [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'UnaryExpression',
                        argument: {
                            type: 'CallExpression',
                            callee: {
                                type: 'FunctionExpression',
                                body: {
                                    type: 'BlockStatement',
                                    body: ast.program.body,
                                    directives: [],
                                    end: end,
                                    start: start
                                },
                                params: [],
                                generator: false,
                                async: false,
                                end: end,
                                start: start
                            },
                            arguments: []
                        },
                        operator: '!',
                        prefix: true,
                        end: end,
                        start: start
                    }
                }]
            }
        }
    }

    private generateModulesFromObjectProperties(
        modules: Array<ObjectProperty>,
        bundleClass: string
    ): void {
        if (typeof modules === 'undefined') {
            return;
        }
        for (const module of modules) {
            const moduleName = this.getModuleName(module);
            this.addModule(moduleName, module.value);
            this.result.nameToBundleClass.set(moduleName, bundleClass);
        }
    };

    private generateModulesFromArrayElements(
        modules: Array<null | Expression | SpreadElement>,
        bundleClass: string
    ): void {
        if (!modules) {
            return
        }

        for (let i = 0; i < modules.length; i++) {
            if (modules[i] === null || modules[i]?.type === 'NumericLiteral') {
                continue;
            }
            this.addModule(i.toString(), modules[i]);
            this.result.nameToBundleClass.set(i.toString(), bundleClass);
        }
    };

    private debundleBrowserify(ast: any): void {
        // TODO: add __runtime
        const modules = ast.arguments[0].properties;
        for (const module of modules) {
            const moduleName = this.getModuleName(module);
            let ast: any;
            if (module.value.type === 'ArrayExpression') {
                ast = module.value.elements[0];
            } else {
                ast = module.value;
            }
            this.addModule(moduleName, ast);
            this.result.nameToBundleClass.set(moduleName, 'browserify-bundle');
        }
    }

    private debundleWebpackRuntime(ast: any): void {
        const runtimeAST = this.makeFile(ast.callee.body.body);
        this.wrapFuncWithReturnInIIFE(runtimeAST, ast.callee.body.start, ast.callee.body.end);
        this.addModule('__runtime', runtimeAST);
        if (ast.arguments[0].type === 'ObjectExpression') {
            const modules = ast.arguments[0].properties;
            this.generateModulesFromObjectProperties(modules, 'webpack-runtime-bundle');
        } else if (ast.arguments[0].type === 'ArrayExpression') {
            const modules = ast.arguments[0].elements;
            this.generateModulesFromArrayElements(modules, 'webpack-runtime-bundle');
        }
    };

    private debundleJsonp(ast: any): void {
        if (ast.arguments[0].elements[1].type === 'ObjectExpression') {
            const modules = ast.arguments[0].elements[1].properties;
            this.generateModulesFromObjectProperties(modules, 'webpack-jsonp-bundle');
        } else if (ast.arguments[0].elements[1].type === 'ArrayExpression') {
            let modules = new Array();
            if (ast.arguments[0].elements[1].type === 'ArrayExpression') {
                modules = ast.arguments[0].elements[1].elements;
            } else {
                modules = ast.arguments[0].elements[1].elements[0];
            }
            this.generateModulesFromArrayElements(modules, 'webpack-jsonp-bundle');
        }
    };

    private debundleJsonpFunc(ast: any): void {
        if (
            ast.type === 'VariableDeclaration' &&
            ast.declarations[0].init.type === 'CallExpression' &&
            ast.declarations[0].init.arguments.length === 3
        ) {
            const modules = ast.declarations[0].init.arguments[1];
            if (modules.type === 'ObjectExpression') {
                this.generateModulesFromObjectProperties(modules.properties, 'webpack-jsonp-func-bundle');
            } else if (modules.type === 'ArrayExpression') {
                this.generateModulesFromArrayElements(modules.elements, 'webpack-jsonp-func-bundle');
            }
        } else if (ast.expression && ast.expression.arguments[1]) {
            const modules = ast.expression.arguments[1];
            if (modules.type === 'ArrayExpression') {
                this.generateModulesFromArrayElements(modules.elements, 'webpack-jsonp-func-bundle');
            } else if (modules.type === 'ObjectExpression') {
                this.generateModulesFromObjectProperties(modules.properties, 'webpack-jsonp-func-bundle');
            }
        }
    };

    private debundleWebpackSimple(ast: any): void {
        for (const declaration of ast.callee.body.body[0].declarations) {
            if (declaration.init) {
                if (declaration.init.type === 'ArrayExpression' && declaration.init.elements.length !== 0) {
                    this.generateModulesFromArrayElements(declaration.init.elements, 'webpack-simple-bundle');
                } else if (declaration.init.type === 'ObjectExpression' && declaration.init.properties.length !== 0) {
                    this.generateModulesFromObjectProperties(declaration.init.properties, 'webpack-simple-bundle');
                }
            }
        }
        let runtimeBody;
        if (ast.callee.body.body.length > 2) {
            const mainBody = ast.callee.body.body.slice(-1);
            const mainAST = this.makeFile([]);
            if (mainBody[0].type === 'ReturnStatement') {
                if (typeof mainBody[0].argument.expressions !== 'undefined') {
                    mainAST.program.body = [{
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'SequenceExpression',
                            expressions: mainBody[0].argument.expressions
                        }
                    }];
                } else {
                    mainAST.program.body = [mainBody[0].argument];
                }
            } else {
                mainAST.program.body = mainBody; // TODO: impl renameRequire for this node
            }
            this.addModule('__main', mainAST);
            runtimeBody = ast.callee.body.body.slice(1, -1);
        } else if (ast.callee.body.body.length === 2) {
            runtimeBody = [ast.callee.body.body[1]];
        }
        const runtimeAST = this.makeFile(runtimeBody);
        this.wrapFuncWithReturnInIIFE(runtimeAST, runtimeBody.start, runtimeBody.end);
        this.addModule('__runtime', runtimeAST);
    };

    private debundleWebpackSimpleDev(ast: any): void {
        const modules = ast.body[0].declarations[0].init.properties;
        this.generateModulesFromObjectProperties(modules, 'webpack-simple-dev-bundle');
        const runtimeBody = ast.body.slice(1, -1);
        // TODO: impl renameRequire for this node
        const runtimeAST = this.makeFile(runtimeBody);
        this.wrapFuncWithReturnInIIFE(runtimeAST, runtimeBody.start, runtimeBody.end);
        this.addModule('__runtime', runtimeAST);

        const mainBody = ast.body.slice(-1);
        // TODO: impl renameRequire for this node
        const mainAST = this.makeFile(mainBody);
        this.addModule('__main', mainAST);
    };

    private debundleWebpackRuntimePreprocessFunc(ast: any): void {
        const modules = ast.arguments[0].arguments[0].elements;
        this.generateModulesFromArrayElements(modules, 'webpack-runtime-preprocess-func-bundle');
        const mainBody = ast.callee.body.body;
        const start = ast.callee.body.start;
        const end = ast.callee.body.end;
        // TODO: impl renameRequire for this node
        const mainAST = this.makeFile(mainBody);
        this.wrapFuncWithReturnInIIFE(mainAST, start, end);
        this.addModule('__main', mainAST);
    }

    private unpackBundle(overheadNode: BundleInfo) {
        const ast = overheadNode.ast;
        const bundleClass = overheadNode.title;
        switch(bundleClass) {
            case 'browserify-bundle': {
                this.debundleBrowserify(ast);
                return;
            }
            case 'webpack-runtime-bundle': {
                this.debundleWebpackRuntime(ast);
                return;
            }
            case 'webpack-jsonp-bundle': {
                this.debundleJsonp(ast);
                return;
            }
            case 'webpack-jsonp-func-bundle': {
                this.debundleJsonpFunc(ast);
                return;
            }
            case 'webpack-simple-bundle':
            case 'webpack-simple-no-import-bundle': {
                this.debundleWebpackSimple(ast);
                return;
            }
            case 'webpack-simple-dev-bundle': {
                this.debundleWebpackSimpleDev(ast);
                return;
            }
            case 'webpack-runtime-preprocess-func-bundle': {
                this.debundleWebpackRuntimePreprocessFunc(ast);
                return;
            }
            case 'webpack-runtime-remote-bundle': {
                // XXX: dirty hack because we have few examples of this class
                // and don't know how the modules are located
                const runtimeAST = this.makeFile(ast.callee.body.body);
                this.wrapFuncWithReturnInIIFE(runtimeAST, ast.callee.body.start, ast.callee.body.end);
                this.addModule('__runtime', runtimeAST);
                return;
            }
        }
    }

    private replaceNodeWithStub(node: Node, parent: Node, stub: Node) {
        const parentVisitorKeys = VISITOR_KEYS[parent.type];
        let found = false;

        for (const fieldName of parentVisitorKeys) {
            let field = parent[fieldName];
            if (Array.isArray(field)) {
                for (let i = 0; i < field.length; i++) {
                    if (parent[fieldName][i] === node) {
                        parent[fieldName][i] = stub;
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            } else if (typeof field === 'object') {
                if (parent[fieldName] === node) {
                    parent[fieldName] = stub;
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            throw new Error('Could not find required node in its\' parent');
        }
    }

    private _debundle(matchedNode: BundleInfo) {
        if (typeof this.baseAST === 'undefined') {
            return;
        }

        if (matchedNode.ast.type === 'CallExpression') {
            // function(){}()
            const stubCallExpr = callExpression(functionExpression(null, [], blockStatement([])), []);
            // XXX: set `start` and `end` locations in case on analyzer
            // will try to match library in CallExpression and make some
            // checks using `start` and `and` props
            stubCallExpr.callee.start = matchedNode.ast.start;
            stubCallExpr.callee.end = matchedNode.ast.start + 'function(){}'.length;
            this.replaceNodeWithStub(matchedNode.ast, matchedNode.parent, stubCallExpr);
        } else if (matchedNode.ast.type === 'ExpressionStatement') {
            // stub()
            const stubExpr = expressionStatement(callExpression(identifier("stub"), []));
            this.replaceNodeWithStub(matchedNode.ast, matchedNode.parent, stubExpr);
        } else if (matchedNode.ast.type === 'VariableDeclaration') {
            // const stub = null
            const stubVarDecr = variableDeclaration("const", [variableDeclarator(identifier('stub'), nullLiteral())]);
            this.replaceNodeWithStub(matchedNode.ast, matchedNode.parent, stubVarDecr);
        } else if (matchedNode.ast.type === 'BlockStatement') {
            const stubBlockStmnt = blockStatement([]);
            this.replaceNodeWithStub(matchedNode.ast, matchedNode.parent, stubBlockStmnt);
        } else {
            throw new Error('Unexpected node type while trying to find matched node');
        }

        this.addModule('__rest', this.baseAST);
        this.unpackBundle(matchedNode);
    }

    debundle(scriptNode: Node, resourceName: string): boolean {
        this.baseAST = scriptNode;
        this.result.modules = new Map();
        const boundaries = new Boundaries();
        for (const signature of this.bundleSignatures) {
            for (const check of signature.checks) {
                // @ts-ignore
                for (const result of this.astMatcher.match(check, this.baseAST, signature.$depth, signature.$length, signature.$maxTraverseDepth)) {
                    if (!result) {
                        continue;
                    }
                    const [bundleNode, bundleBoundary] = result;
                    const bundleInfo: BundleInfo = {
                        ast: bundleNode,
                        title: signature.title,
                        parent: this.astMatcher.nodesParents.get(bundleNode)
                    };
                    boundaries.set(bundleBoundary, bundleInfo);
                    log(`matched bundle ${signature.title} at ${bundleBoundary} in ${resourceName}`);
                }
            }
        }

        if (boundaries.isNotEmpty()) {
            const matchedNode = boundaries.getCurrentOverHeadNode();
            if (typeof matchedNode === 'undefined') {
                return false;
            }
            this.result.curBundleClass = matchedNode.title;
            this._debundle(matchedNode);
            return true;
        }

        return false;
    }

    runCallBackOnEachModule(cb: moduleCallback, renameRequire=false): void {
        this.result.modules.forEach((module: Node, name: string) => {
            if (renameRequire) {
                const bundleClass = this.result.nameToBundleClass.get(name);
                if (typeof bundleClass !== 'undefined') {
                    module = Debundler.renameRequire(module, bundleClass, true);
                }
            }
            const content = generate(module);
            const newModule = cb(name, content.code);
            if (newModule !== null) {
                this.result.modules.set(name, parse(newModule));
            }
        });
    }

    getModules(): Map<string, Node> {
        return this.result.modules;
    }

    getCurBundleClass(): string {
        return this.result.curBundleClass;
    }

    getBundleClassByName(name: string): string | undefined {
        return this.result.nameToBundleClass.get(name);
    }
}
