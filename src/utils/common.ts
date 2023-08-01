import { ParserOptions } from '@babel/parser';

export function hasattr(ob: any, attr: any): any {
    return Object.prototype.hasOwnProperty.call(ob, attr);
}

export const PARSE_OPTIONS : ParserOptions = { allowReturnOutsideFunction: true };
