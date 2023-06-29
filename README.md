# page-disassembler

A tool for detecting and debundling JavaScript module bundlers (such as [webpack](https://webpack.js.org/), [browserify](https://browserify.org/)).

## Build

### From sources

```bash
git clone https://github.com/seclab-msu/page-disassembler
npm install
```

## Via NPM

```bash
npm install page-disassembler
```

## Run

You can run debundler either using cli or by using its' API from your code

### From CLI

For running debundler on `tar` archive that contains a bunch of all resources from web-page

```bash
node bin.js /path/to/page/archive.tar
```

If you want to debundle a single JavaScript file use

```bash
node bin.js --debundle-file /path/to/file/with/bundle.js
```

By default debundled modules will be dumped to `results` directory, if you want to specify its' name, you can do it via

```bash
node bin.js /path/to/page/archive.tar --target-dir custom-dir
```

### From API

Coming soon...
