#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

import {parse} from "@babel/parser";
import {ArgumentParser} from "argparse";

import {log} from "./src/utils/logging";
import {getPageScripts} from "./src/utils/page-parser";
import {readTar} from "./src/utils/read-tar.js";
import {DebundlerFS} from "./src/debundler/debundler-fs";
import {hasattr, PARSE_OPTIONS} from "./src/utils/common";
import {detectAndCutLibs} from "./src/lib-detection/lib-detection.js";

function debundleSingleFileOnDiskAndExit(args: any) {
    const debundler = new DebundlerFS(args.target_dir);
    if (
        debundler.debundle(
            fs.readFileSync(args.target, "utf8"),
            args.target_dir
        )
    ) {
        debundler.runCallBackOnEachModule(
            (name: string, module: string): string | null => {
                module = detectAndCutLibs(module, name);
                return module;
            }
        );
        debundler.dumpModulesToDisk("");
    }
    process.exit(0);
}

async function main(args: any): Promise<void> {
    const excludeFilenamePatterns = [
        "vk.com_js_api",
        "google-analytics.com",
        "mc.yandex.ru_metrika",
    ].concat(args.exclude);

    if (fs.existsSync(args.target_dir)) {
        log(`${args.target_dir} exists`);
    } else {
        fs.mkdirSync(args.target_dir);
    }

    if (args.debundle_file) {
        debundleSingleFileOnDiskAndExit(args);
    }

    const page = await readTar(args.target);
    fs.writeFileSync(
        `${args.target_dir}/index.html`,
        page.resources["index.html"]
    );
    const inlineScripts = getPageScripts(page.resources["index.html"]);

    const debundler = new DebundlerFS(args.target_dir);
    if (args.verbose) {
        debundler.setVerboseMode();
    }
    for (let resourceName of Object.keys(page.resources)) {
        if (
            resourceName != "index.html" &&
            hasattr(page.resources, resourceName)
        ) {
            if (
                debundler.debundle(page.resources[resourceName], resourceName)
            ) {
                resourceName = resourceName
                    .replace(/\//g, "_")
                    .replace(/\./g, "_");
                debundler.runCallBackOnEachModule(
                    (name: string, module: string): string | null => {
                        const fullPath = path.join(
                            args.target_dir,
                            resourceName,
                            name + ".js"
                        );
                        module = detectAndCutLibs(module, fullPath);
                        return module;
                    }
                );
                debundler.dumpModulesToDisk(resourceName);
            } else {
                try {
                    parse(page.resources[resourceName], PARSE_OPTIONS);
                } catch {
                    continue;
                }
                const fullPath = path.join(args.target_dir, resourceName);
                const module = detectAndCutLibs(
                    page.resources[resourceName],
                    fullPath
                );
                if (typeof module === "string") {
                    fs.writeFileSync(fullPath, module);
                }
            }
        }
    }
    for (const inlSrc of inlineScripts) {
        try {
            parse(inlSrc, PARSE_OPTIONS);
        } catch {
            continue;
        }
        detectAndCutLibs(inlSrc, "index.html");
    }
}

(async () => {
    const argParser = new ArgumentParser();
    argParser.add_argument("target", {type: String, default: "/dev/stdin"});
    argParser.add_argument("--debundle-file", {action: "store_true"});
    argParser.add_argument("--target-dir", {type: String, default: "results"});
    argParser.add_argument("--verbose", "-v", {action: "store_true"});
    await main(argParser.parse_args());
})();
