var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    main: './app/index.js',
    // vendor2: 'moment' @__1
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/, // 不能加引号
      use: ['style-loader','css-loader']
    }]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor2' @__1
    // })
  ]
}

/*

 1. @__1 两处的名字要一样？



 */