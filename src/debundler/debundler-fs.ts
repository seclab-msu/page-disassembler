import * as fs from "fs";
import * as path from "path";

import {log} from "../utils/logging";
import {Debundler, DEFAULT_SIGNATURE_PATH} from "./debundler";

export class DebundlerFS extends Debundler {
    private targetDir: string;
    private currScriptInitialName: string;

    constructor(
        targetDir: string,
        debundleSignaturesPath: string = DEFAULT_SIGNATURE_PATH,
        parserOpts: any = {}
    ) {
        super(debundleSignaturesPath, parserOpts);
        this.currScriptInitialName = "";
        this.targetDir = targetDir;
    }

    private constructSafeFullPathAndMkdir(filename: string): string {
        if (
            filename.endsWith(".js") ||
            filename.endsWith(".ts") ||
            filename.endsWith(".tsx") ||
            filename.endsWith(".css") ||
            filename.endsWith(".scss")
        ) {
            if (filename.startsWith("/")) {
                filename = filename.substring(1);
            }
            filename = filename.replace(/\.\.\//g, "");
        } else {
            filename = filename.replace(/\//g, "").replace(/\./g, "") + ".js";
        }
        let fullPath = path.join(
            this.targetDir,
            this.currScriptInitialName,
            filename
        );
        fs.mkdirSync(path.dirname(fullPath), {recursive: true});
        return fullPath;
    }

    private writeModuleToDisk(name: string, module: string): void {
        let fullPath = this.constructSafeFullPathAndMkdir(name);
        if (fs.existsSync(fullPath) && this.verbose) {
            log(`Warning: module file ${fullPath} already exists`);
        }
        try {
            fs.writeFileSync(fullPath, module);
        } catch (e) {
            if (
                e &&
                typeof e === "object" &&
                "code" in e &&
                e.code === "ENAMETOOLONG"
            ) {
                let pathParts = fullPath.split("/");
                const prefix = pathParts[pathParts.length - 1].slice(0, 233);
                const suffix = pathParts[pathParts.length - 1].slice(-20);
                pathParts[pathParts.length - 1] = `${prefix}_${suffix}`;
                fullPath = path.join(...pathParts);
                fs.writeFileSync(fullPath, module);
            } else {
                throw e;
            }
        }
    }

    dumpModulesToDisk(scriptInitialName: string): void {
        this.currScriptInitialName = scriptInitialName;
        for (const [name, module] of this.result.modules.entries()) {
            this.writeModuleToDisk(name, module);
        }
    }
}
