import * as htmlparser from "htmlparser2";

import {hasattr} from "./common";

export function getPageScripts(pageHTML: any) {
    const handler = {
        currentScript: null,
        scripts: [],
        onopentag(name: string, attributes: any) {
            if (name === "script") {
                // @ts-ignore
                this.currentScript = [];
            } else {
                for (const attr of Object.keys(attributes)) {
                    if (hasattr(attributes, attr) && attr.startsWith("on")) {
                        // @ts-ignore
                        this.scripts.push(attributes[attr]);
                    }
                }
            }
        },
        ontext(text: any) {
            if (this.currentScript !== null) {
                // @ts-ignore
                this.currentScript.push(text);
            }
        },
        onclosetag(tagname: any) {
            // @ts-ignore
            if (tagname === "script" && this.currentScript.length > 0) {
                // @ts-ignore
                this.scripts.push(this.currentScript.join(""));
                this.currentScript = null;
            }
        },
    };

    const pageParser = new htmlparser.Parser(handler);
    pageParser.write(pageHTML);
    pageParser.end();
    return handler.scripts;
}
