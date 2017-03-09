var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    main: './app/index.js',
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
          plugins: [
            'syntax-dynamic-import',
            'transform-async-to-generator',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }]
    }]

  }
}

/*

  import supersedes require.ensure
  用 import 替代 require.ensure，
    好处： 可以处理模块加载失败的情况(基于Promise)
    缺点： require.ensure 支持 第三个参数，(require.ensure([], fn, name), 重命名?)

 */
