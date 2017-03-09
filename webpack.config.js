var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    main: './app/index-es2017.js',
    // vendor: 'moment'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'es2015',
              {
                modules: false
              }
            ]
          ],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }]

  }
}

/*

  1. import() as a split-point
  2. babel, modules: false, 'syntax-dynamic-import'
  3. publicPath: 'dist/'

 */
