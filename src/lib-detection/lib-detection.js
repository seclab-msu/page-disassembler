const fs = require('fs');
const path = require('path');

const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

const { PARSE_OPTIONS } = require('../utils/common.js');
const { log } = require('../utils/logging.js');

const astMatcher = require('js-ast-matcher');

const AST_MATCHER_PATH = path.dirname(require.resolve('js-ast-matcher'));
const LIB_SIGNATURE_DIR = path.join(AST_MATCHER_PATH, 'patterns');

const SIGNATURE_FILENAMES = [
    path.join(LIB_SIGNATURE_DIR, 'ASTpattern_jQuery.json'),
    path.join(LIB_SIGNATURE_DIR, 'ASTpattern_AngularJS.json'),
    // path.join(LIB_SIGNATURE_DIR, 'ASTpattern_Axios.json')
];
const SIGNATURES = SIGNATURE_FILENAMES.map(
    p => [p.split('/').slice(-1)[0], JSON.parse(fs.readFileSync(p))]
);

// const libNodes = [];
// const libLocations = [];

function detectAndCutLibs(src, sourceName) {
    const ast = parse(src, PARSE_OPTIONS);
    const matcher = new astMatcher.ASTPatternMatcher();
    let libNodes = [];
    for (const [name, pattern] of SIGNATURES) {
        for (const check of pattern.checks) {
            for (const result of matcher.match(check, ast, pattern.$depth, pattern.$length)) {
                if (!result) {
                    continue;
                }
                const [libNode, libBoundary] = result;
                libNodes.push({node: libNode, title: pattern.title});
                // libNodes.push([name, libNode]);
                // libLocations.push([name, libBoundary]);
                log('matched lib' + name, libBoundary, 'in', sourceName);
            }
        }
    }
    traverse(ast, {
        enter(path) {
            for (const el of libNodes) {
                if (el.node === path.node) {
                    const libStub = {
                        type: "ExpressionStatement",
                        expression: {
                            type: "CallExpression",
                            callee: {
                                type: "FunctionExpression",
                                params: [],
                                body: {
                                    type: "BlockStatement",
                                    body: [],
                                    innerComments: [{
                                        type: "CommentBlock",
                                        value: ` LIBRARY ${el.title} `
                                    }]
                                }
                            },
                            arguments: []
                        }
                    };
                    path.replaceWith(libStub);
                    return;
                }
            }
        }
    });
    return generate(ast).code;
}

exports.detectAndCutLibs = detectAndCutLibs;
