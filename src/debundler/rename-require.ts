import traverse, { NodePath } from '@babel/traverse';
import { isFunction, isLiteral } from '@babel/types';
import { log } from '../utils/logging';

function renameArgs(path: NodePath, names: string[], ast?: any) {
    const node = path.node;
    if (!isFunction(node)) {
        throw new Error('Function node expected');
    }
    if (typeof ast !== 'undefined' && node !== ast) {
        throw new Error('Expected the first met function to be module ast');
    }
    for (let i = 0; i < Math.min(names.length, node.params.length); i++) {
        let param = node.params[i];
        if (param.type !== 'Identifier') {
            log('Warning: module function param is not an Identifier, it is ' + param.type);
            break;
        }
        path.scope.rename(param.name, names[i]);
    }
}

export function renameRequireInAST(ast: any, names: string[], verbose: boolean) {
    if (!isFunction(ast)) {
        if (isLiteral(ast)) {
            if (verbose) {
                const node = JSON.stringify(ast);
                log(`warning: literal detected ${node} while renaming require`);
            }
        } else if (verbose) {
            log(`warning: ${ast.type} detected while renaming require`);
        }
        return ast;
    }

    const p = {
        type: 'File',
        program: {
            'type': 'Program',
            'body': [ast],
            'sourceType': 'script'
        }
    };
    // @ts-ignore
    traverse(p, {
        Function(path: any) {
            renameArgs(path, names, ast);
            path.stop();
        },
    });

    return {
        type: 'File',
        program: {
            'type': 'Program',
            // @ts-ignore
            'body': p.program.body[0].body.body,
            'sourceType': 'script'
        },
        start: p.program.body[0].start,
        end: p.program.body[0].end,
    };
}

export function renameRequireInNodePath(path: NodePath, names: string[]): void {
    renameArgs(path, names);
}
