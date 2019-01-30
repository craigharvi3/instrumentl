const path = require('path');
const webpack = require('webpack');
const del = require('del');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('config');

class CleanPlugin {
  constructor(options) {
    this.options = options;
  }

  apply() {
    del.sync(this.options.files);
  }
}

module.exports = {
  mode: "development",
  entry: './app/index',
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanPlugin({
      files: ['dist/js'],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(config),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: path.join(__dirname, 'node_modules')
      }
    ],
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in development
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
