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
    publicPath: 'dist/',
    pathinfo: true // 注释， 模块路径
  }
}
