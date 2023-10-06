# webpack5-externals-bug

## Repro steps:

1. clone the repo and be in the root directory
2. run the following commands
    1. cd lib
    2. npm install
    3. npm build
    4. npm link
    5. cd ..
    6. cd app
    7. npm install
    8. npm link @sslepian/webpack5-lib
    9. npm run dev
3. navigate to http://localhost:8081/

## Expected

The app loads.

## Actual

The app doesn't load, and the following error appears in dev tools:

```
index.js:45 Uncaught TypeError: __webpack_require__ is not a function
```

## The problem

Looking at `lib/dist/index.js`, we see the following line at the start:

```
var __webpack_require__ = {};
```

This overwrites the `__webpack_require__` global that Webpack 4 expects, which leads to the error detailed above.

Setting minimzation in `lib/webpack.config.js` as follows will avoid this issue:

```
optimization: {
    minimize: false,
}
```

However, it's not actually necessary to minimize - simply renaming the `__webpack_require__` var in `lib/dist/index.js` will likewise fix the issue, since it will no longer override the Webpack 4 global.
