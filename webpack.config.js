const path = require('path');
const webpack = require('webpack');

const enableThreadLoader = process.env.NODE_ENV === 'production';
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          enableThreadLoader && 'thread-loader',
          {
            loader: 'css-loader',
            options: {
              context: path.resolve(__dirname),
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              getLocalIdent: (context, localIdentName, localName) => 'oooooooooooo',
            }
          },
        ].filter(Boolean)
      }
    ]
  }
};
