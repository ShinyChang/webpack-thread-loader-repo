# webpack-thread-loader-repo

Please use `yarn local` and `yarn build` to test it. The first will generate the class name `oooooooooooo` which defined in the `webpack.config.js`. The second will generate `styles__root--xxxxx`. Which means `getLocalIdent` does not be passed to css-loader when thread-loader enabled.

