var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    main: './app/index.js',
    vendor: ['lodash', 'moment']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/, // 不能加引号
      use: ['style-loader','css-loader']
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
}

/*

  CommonsChunk
    1. 肯定包含webpack的运行时
    2. 编译时查看入口里有没有和 name 设置项同名的入口key值
      a. 有的话把webpack运行环境和同名入口文件打包在一起
      b. 没有的话，则只打包webpack运行时

 */

