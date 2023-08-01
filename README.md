# page-disassembler

A tool for detecting and debundling JavaScript module bundlers (such as [webpack](https://webpack.js.org/), [browserify](https://browserify.org/)).

## Install

```bash
npm install page-disassembler
```

## Build from sources

```bash
git clone https://github.com/seclab-msu/page-disassembler
cd page-disassembler
npm install
```

## Run

You can run debundler either using cli or by using its' API from your code

### From CLI

If you want to debundle a single JavaScript file use

```bash
node wprl.js --debundle-file /path/to/file/with/bundle.js
```

By default debundled modules will be dumped to `results` directory, if you want to specify its' name, you can do it via

```bash
node wprl.js --debundle-file /path/to/file/with/bundle.js --target-dir custom-dir
```

For running debundler on `tar` archive that contains a bunch of all resources from web-page

```bash
node wprl.js /path/to/page/archive.tar
```

### From API

Coming soon...
