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
        name: 'vendor' // Specify the common bundle's name.
    })
  ]
}

/*

 CommonsChunk 里不仅包含了库，还包含了webpack的环境

 */

