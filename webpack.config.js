var path = require('path');
var webpack = require('webpack');

var packageData = require('./package.json');
var minify = process.argv.indexOf('--minify') != -1;
var plugins = [];
var filename = 'index.js';

if (minify) {
  filename.splice(filename.length - 1, 0, 'min');
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, packageData.main),
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: filename,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: plugins
}