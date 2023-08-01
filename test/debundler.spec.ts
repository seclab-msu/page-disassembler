import * as fs from 'fs';
import { parse } from '@babel/parser';
import { expect } from 'chai';

import { Debundler } from '../src/debundler/debundler';
import { PARSE_OPTIONS } from '../src/utils/common';

const TEST_DATA_DIRNAME = "test/test-data/single-bundles/";

function debundlerWrapper(filename: string): Debundler {
    const debundler = new Debundler('./bundler-signatures');
    debundler.debundle(parse(fs.readFileSync(filename, 'utf8'), PARSE_OPTIONS), filename);
    return debundler;
}

describe("Tests for debundle-file mode", () => {
    describe("webpack-jsonp class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-jsonp/";

        it("webpackJSONP_1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_3.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_4", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_4.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_5", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_5.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(1);
        });

        it("webpackJSONP_6", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_6.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });

        it("webpackJSONP_7", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_7.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_8", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_8.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(3);
        });

        it("webpackJSONP_9", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpackJSONP_9.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });
    });

    describe("browserify class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "browserify/";

        it("browserify1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "browserify1.js");
            expect(debundler.getCurBundleClass()).to.equal("browserify-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });

        it("browserify2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "browserify2.js");
            expect(debundler.getCurBundleClass()).to.equal("browserify-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });

        it("browserify3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "browserify3.js");
            expect(debundler.getCurBundleClass()).to.equal("browserify-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });
    });

    describe("webpack-jsonp-func class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-jsonp-func/";

        it("webpack-jsonp-func1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-jsonp-func1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-jsonp-func2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-jsonp-func2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-jsonp-func3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-jsonp-func3.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-jsonp-func4", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-jsonp-func4.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-jsonp-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(1331);
        });
    });

    describe("webpack-runtime-preprocess-func class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-runtime-preprocess-func/";

        it("webpack-runtime-preprocess-func-bundle1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "wrpf1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-preprocess-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });

        // TODO
        it("webpack-runtime-preprocess-func-bundle2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "wrpf2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-preprocess-func-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.above(0);
        });
    });

    describe("webpack-runtime class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-runtime/";

        it("webpack-runtime1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-runtime2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-runtime3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime3.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });

        it("webpack-runtime4", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime4.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-runtime5", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime5.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-runtime6", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime6.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-runtime7", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime7.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(221);
        });
    });

    describe("webpack-runtime-remote class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-runtime-remote/";

        it("webpack-runtime-remote1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-runtime-remote1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-runtime-remote-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(2);
        });
    });

    describe("webpack-simple class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-simple/";

        it("webpack-simple1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-simple2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(6);
        });

        it("webpack-simple3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple3.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-simple4", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple4.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(6);
        });
    });

    describe("webpack-simple-dev class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-simple-dev/";

        it("webpack-simple-dev1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-dev1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-dev-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-simple-dev2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-dev2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-dev-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-simple-dev3", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-dev3.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-dev-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });

        it("webpack-simple-dev4", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-dev4.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-dev-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(5);
        });
    });

    describe("webpack-simple-no-import class", () => {
        const CLASS_DIRNAME = TEST_DATA_DIRNAME + "webpack-simple-no-import/";

        it("webpack-simple-no-import1", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-no-import1.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-no-import-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });

        it("webpack-simple-no-import2", () => {
            const debundler = debundlerWrapper(CLASS_DIRNAME + "webpack-simple-no-import2.js");
            expect(debundler.getCurBundleClass()).to.equal("webpack-simple-no-import-bundle");
            const modules = debundler.getModules();
            expect(modules.size).to.be.equal(4);
        });
    });
});
