import * as fs from "fs";
import * as path from "path";

import traverse from "@babel/traverse";
import generate from "@babel/generator";
import {
    Node,
    isLiteral,
    Expression,
    isFunction,
    nullLiteral,
    SpreadElement,
    ObjectProperty,
    program,
    Program,
} from "@babel/types";
import {parse, ParserOptions} from "@babel/parser";

import {log} from "../utils/logging";
import {hasattr, PARSE_OPTIONS} from "../utils/common";
import {Boundaries, BundleInfo} from "./boundaries";

import * as matcher from "js-ast-matcher";

interface DebundlerResult {
    modules: Map<string, string>;
    curBundleClass: string;
}

export const DEFAULT_SIGNATURE_PATH = path.join(
    __dirname,
    "..",
    "..",
    "bundler-signatures"
);

// moduleCallback function receive a module's name and the module
// as arguments. moduleCallback can transform the code of the module.
// To do that, the function should return a string (new module's
// code), it will replace the old code in Debundler's result storage
// (returned by `.getModules()`). Otherwise, it should return `null`.
type moduleCallback = (name: string, module: string) => string | null;

export class Debundler {
    private bundleSignatures: ReturnType<JSON["parse"]>[];
    private baseAST!: Node;
    private astMatcher: matcher.ASTPatternMatcher;
    protected result: DebundlerResult;
    private parserOpts: ParserOptions;
    protected verbose: boolean;

    constructor(
        debundleSignaturesPath: string = DEFAULT_SIGNATURE_PATH,
        parserOpts: ParserOptions = PARSE_OPTIONS
    ) {
        this.bundleSignatures = [];
        this.verbose = false;
        this.result = {modules: new Map<string, string>(), curBundleClass: ""};
        this.parserOpts = parserOpts;
        this.astMatcher = new matcher.ASTPatternMatcher();
        this.loadSignatures(debundleSignaturesPath);
    }

    setVerboseMode(): void {
        this.verbose = true;
    }

    private loadSignatures(debundleSignaturesPath: string): void {
        const stats = fs.lstatSync(debundleSignaturesPath);
        if (stats.isDirectory()) {
            this.bundleSignatures = fs
                .readdirSync(debundleSignaturesPath)
                .map((file: string) =>
                    JSON.parse(
                        fs
                            .readFileSync(
                                path.join(debundleSignaturesPath, file)
                            )
                            .toString()
                    )
                );
        } else if (stats.isFile()) {
            this.bundleSignatures.push(
                JSON.parse(fs.readFileSync(debundleSignaturesPath).toString())
            );
        } else {
            throw new Error(debundleSignaturesPath + " not file and not dir");
        }
    }

    private addModule(name: string, content: string): void {
        this.result.modules.set(name, content);
    }

    private getModuleName(module: any): string {
        let moduleName: string = "";

        if (
            hasattr(module.key, "value") &&
            typeof module.key.value !== "undefined" &&
            module.key.value !== null
        ) {
            moduleName = module.key.value.toString();
        } else if (
            hasattr(module.key, "name") &&
            typeof module.key.name !== "undefined" &&
            module.key.name !== null
        ) {
            moduleName = module.key.name.toString();
        }

        return moduleName;
    }

    private renameRequire(ast: any, bundleClass: string) {
        if (ast === null) {
            return null;
        }
        if (!isFunction(ast)) {
            if (isLiteral(ast)) {
                const node = JSON.stringify(ast, (k, v) => {
                    if (k !== "_parent") {
                        return v;
                    }
                });
                if (this.verbose) {
                    log(
                        `warning: literal detected ${node} while renaming require in ${bundleClass}`
                    );
                }
            } else if (this.verbose) {
                log(
                    `warning: ${ast.type} detected while renaming require in ${bundleClass}`
                );
            }
            return ast;
        }
        let names = ["module", "exports", "require"];
        if (bundleClass.startsWith("broserify")) {
            names = ["require", "module", "exports"];
        }
        const p = {
            type: "File",
            program: {
                type: "Program",
                body: [ast],
                sourceType: "script",
            },
        };
        // @ts-ignore
        traverse(p, {
            Function(path: any) {
                const node = path.node;
                if (node !== ast) {
                    throw new Error(
                        "Expected the first met function to be module ast"
                    );
                }
                for (
                    let i = 0;
                    i < Math.min(names.length, node.params.length);
                    i++
                ) {
                    let param = node.params[i];
                    if (param.type !== "Identifier") {
                        log(
                            "Warning: module function param is not an Identifier, it is " +
                                param.type
                        );
                        break;
                    }
                    path.scope.rename(param.name, names[i]);
                }
                path.stop();
            },
        });
        return {
            type: "File",
            program: {
                type: "Program",
                // @ts-ignore
                body: p.program.body[0].body.body,
                sourceType: "script",
            },
        };
    }

    private generateModulesFromObjectProperties(
        modules: Array<ObjectProperty>,
        bundleClass: string
    ): void {
        if (typeof modules === "undefined") {
            return;
        }
        for (const module of modules) {
            const moduleName = this.getModuleName(module);
            let renamedAST = this.renameRequire(module.value, bundleClass);
            const content = generate(renamedAST);
            this.addModule(moduleName, content.code);
        }
    }

    private generateModulesFromArrayElements(
        modules: Array<null | Expression | SpreadElement>,
        bundleClass: string
    ): void {
        if (!modules) {
            return;
        }

        for (let i = 0; i < modules.length; i++) {
            if (modules[i] === null) {
                continue;
            }
            let renamedAST = this.renameRequire(modules[i], bundleClass);
            const content = generate(renamedAST);
            this.addModule(i.toString(), content.code);
        }
    }

    private debundleBrowserify(ast: any): void {
        const modules = ast.arguments[0].properties;
        for (const module of modules) {
            const moduleName = this.getModuleName(module);
            let ast: any;
            if (module.value.type === "ArrayExpression") {
                ast = module.value.elements[0];
            } else {
                ast = module.value;
            }
            let renamedAST = this.renameRequire(ast, "broserify-bundle");
            this.addModule(moduleName, generate(renamedAST).code);
        }
    }

    private debundleWebpackRuntime(ast: any): void {
        let runtimeAST = {
            type: "FunctionDeclaration",
            params: [],
            id: {
                type: "Identifier",
                name: "__runtime",
            },
            body: ast.callee.body,
        };
        // @ts-ignore
        const runtimeContent = generate(runtimeAST);
        this.addModule("__runtime", runtimeContent.code);
        if (ast.arguments[0].type === "ObjectExpression") {
            const modules = ast.arguments[0].properties;
            this.generateModulesFromObjectProperties(
                modules,
                "webpack-runtime-bundle"
            );
        } else if (ast.arguments[0].type === "ArrayExpression") {
            const modules = ast.arguments[0].elements;
            this.generateModulesFromArrayElements(
                modules,
                "webpack-runtime-bundle"
            );
        }
    }

    private debundleJsonp(ast: any): void {
        if (ast.arguments[0].elements[1].type === "ObjectExpression") {
            const modules = ast.arguments[0].elements[1].properties;
            this.generateModulesFromObjectProperties(
                modules,
                "webpack-jsonp-bundle"
            );
        } else if (ast.arguments[0].elements[1].type === "ArrayExpression") {
            let modules = new Array();
            if (ast.arguments[0].elements[1].type === "ArrayExpression") {
                modules = ast.arguments[0].elements[1].elements;
            } else {
                modules = ast.arguments[0].elements[1].elements[0];
            }
            this.generateModulesFromArrayElements(
                modules,
                "webpack-jsonp-bundle"
            );
        }
    }

    private debundleJsonpFunc(ast: any): void {
        if (
            ast.type === "Program" &&
            ast.body[0].type === "VariableDeclaration" &&
            ast.body[0].declarations[0].init.type === "CallExpression" &&
            ast.body[0].declarations[0].init.arguments.length === 3
        ) {
            const modules = ast.body[0].declarations[0].init.arguments[1];
            if (modules.type === "ObjectExpression") {
                this.generateModulesFromObjectProperties(
                    modules.properties,
                    "webpack-jsonp-func-bundle"
                );
            } else if (modules.type === "ArrayExpression") {
                this.generateModulesFromArrayElements(
                    modules.elements,
                    "webpack-jsonp-func-bundle"
                );
            }
        } else if (ast.expression && ast.expression.arguments[1]) {
            const modules = ast.expression.arguments[1];
            if (modules.type === "ArrayExpression") {
                this.generateModulesFromArrayElements(
                    modules.elements,
                    "webpack-jsonp-func-bundle"
                );
            } else if (modules.type === "ObjectExpression") {
                this.generateModulesFromObjectProperties(
                    modules.properties,
                    "webpack-jsonp-func-bundle"
                );
            }
        }
    }

    private debundleWebpackSimple(ast: any): void {
        for (const declaration of ast.callee.body.body[0].declarations) {
            if (declaration.init) {
                if (
                    declaration.init.type === "ArrayExpression" &&
                    declaration.init.elements.length !== 0
                ) {
                    this.generateModulesFromArrayElements(
                        declaration.init.elements,
                        "webpack-simple-bundle"
                    );
                } else if (
                    declaration.init.type === "ObjectExpression" &&
                    declaration.init.properties.length !== 0
                ) {
                    this.generateModulesFromObjectProperties(
                        declaration.init.properties,
                        "webpack-simple-bundle"
                    );
                }
            }
        }
        let runtimeBody;
        if (ast.callee.body.body.length > 2) {
            const mainBody = ast.callee.body.body.slice(-1);
            let mainAst: Program = {
                type: "Program",
                body: [],
                directives: [],
                sourceType: "script",
                sourceFile: "inline",
            };
            if (mainBody[0].type === "ReturnStatement") {
                if (typeof mainBody[0].argument.expressions !== "undefined") {
                    mainAst.body = [
                        {
                            type: "ExpressionStatement",
                            expression: {
                                type: "SequenceExpression",
                                expressions: mainBody[0].argument.expressions,
                            },
                        },
                    ];
                } else {
                    mainAst.body = [mainBody[0].argument];
                }
            } else {
                mainAst.body = mainBody; // TODO: impl renameRequire for this node
            }
            const content = generate(mainAst);
            this.addModule("__main", content.code);
            runtimeBody = ast.callee.body.body.slice(1, -1);
        } else if (ast.callee.body.body.length === 2) {
            runtimeBody = [ast.callee.body.body[1]];
        }
        const runtimeAST: Program = {
            type: "Program",
            body: runtimeBody,
            directives: [],
            sourceType: "script",
            sourceFile: "inline",
        };
        const runtimeContent = generate(runtimeAST);
        this.addModule("__runtime", runtimeContent.code);
    }

    private debundleWebpackSimpleDev(ast: any): void {
        const modules = ast.body[0].declarations[0].init.properties;
        this.generateModulesFromObjectProperties(
            modules,
            "webpack-simple-dev-bundle"
        );
        const mainBody = ast.body.slice(-1);
        let mainAst = {
            // TODO: impl renameRequire for this node
            type: "Program",
            body: mainBody,
        };
        // @ts-ignore
        const content = generate(mainAst);
        this.addModule("__main", content.code);
    }

    private debundleWebpackRuntimePreprocessFunc(ast: any): void {
        const modules = ast.arguments[0].arguments[0].elements;
        this.generateModulesFromArrayElements(
            modules,
            "webpack-runtime-preprocess-func-bundle"
        );
        const mainBody = ast.callee.body.body;
        let mainAst = {
            // TODO: impl renameRequire for this node
            type: "Program",
            body: mainBody,
        };
        // @ts-ignore
        const content = generate(mainAst);
        this.addModule("__main", content.code);
    }

    private unpackBundle(overheadNode: BundleInfo) {
        const ast = overheadNode.ast;
        const bundleClass = overheadNode.title;
        switch (bundleClass) {
            case "broserify-bundle": {
                this.debundleBrowserify(ast);
                return;
            }
            case "webpack-runtime-bundle": {
                this.debundleWebpackRuntime(ast);
                return;
            }
            case "webpack-jsonp-bundle": {
                this.debundleJsonp(ast);
                return;
            }
            case "webpack-jsonp-func-bundle": {
                this.debundleJsonpFunc(ast);
                return;
            }
            case "webpack-simple-bundle":
            case "webpack-simple-no-import-bundle": {
                this.debundleWebpackSimple(ast);
                return;
            }
            case "webpack-simple-dev-bundle": {
                this.debundleWebpackSimpleDev(ast);
                return;
            }
            case "webpack-runtime-preprocess-func-bundle": {
                this.debundleWebpackRuntimePreprocessFunc(ast);
                return;
            }
            case "webpack-runtime-remote-bundle": {
                // XXX: dirty hack because we have few examples of this class
                // and don't know how the modules are located
                let runtimeAST = {
                    type: "FunctionDeclaration",
                    params: [],
                    id: {
                        type: "Identifier",
                        name: "__runtime",
                    },
                    body: ast.callee.body,
                };
                // @ts-ignore
                this.addModule("__runtime", generate(runtimeAST).code);
                return;
            }
        }
    }

    private _debundle(matchedNode: BundleInfo) {
        traverse(this.baseAST, {
            enter(path: any) {
                if (path.node === matchedNode.ast) {
                    if (path.type === "Program") {
                        path.replaceWith(program(path.node.body.slice(1)));
                        return;
                    }
                    try {
                        path.remove();
                    } catch {
                        // @ts-ignore
                        if (
                            path.parentPath.parentPath.node.type ===
                            "AssignmentExpression"
                        ) {
                            // @ts-ignore
                            path.parentPath.parentPath.node.right =
                                nullLiteral();
                        } else {
                            // @ts-ignore
                            path.parentPath.remove();
                        }
                    }
                    return;
                }
            },
        });

        if (typeof this.baseAST !== "undefined") {
            this.addModule("__rest", generate(this.baseAST).code);
        }
        this.unpackBundle(matchedNode);
    }

    debundle(sourceCode: string, resourceName: string): boolean {
        this.result.modules = new Map();
        try {
            this.baseAST = parse(sourceCode, this.parserOpts);
        } catch (e) {
            if (this.verbose) {
                log(`error occured while parsing script: ${e}`);
            }
            return false;
        }
        const boundaries = new Boundaries();
        for (const signature of this.bundleSignatures) {
            for (const check of signature.checks) {
                // @ts-ignore
                for (const result of this.astMatcher.match(
                    check,
                    this.baseAST,
                    signature.$depth,
                    signature.$length
                )) {
                    if (!result) {
                        continue;
                    }
                    const [bundleNode, bundleBoundary] = result;
                    const bundleInfo: BundleInfo = {
                        ast: bundleNode,
                        title: signature.title,
                    };
                    boundaries.set(bundleBoundary, bundleInfo);
                    log(
                        `matched bundle ${signature.title} at ${bundleBoundary} in ${resourceName}`
                    );
                }
            }
        }

        if (boundaries.isNotEmpty()) {
            const matchedNode = boundaries.getCurrentOverHeadNode();
            if (typeof matchedNode === "undefined") {
                return false;
            }
            this.result.curBundleClass = matchedNode.title;
            this._debundle(matchedNode);
            return true;
        }

        return false;
    }

    runCallBackOnEachModule(cb: moduleCallback): void {
        this.result.modules.forEach((module: string, name: string) => {
            const newModule = cb(name, module);
            if (newModule !== null) {
                this.result.modules.set(name, newModule);
            }
        });
    }

    getModules(): Map<string, string> {
        return this.result.modules;
    }

    getCurBundleClass(): string {
        return this.result.curBundleClass;
    }
}
