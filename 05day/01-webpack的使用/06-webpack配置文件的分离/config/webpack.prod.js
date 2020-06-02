const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
module.exports = webpackMerge(baseConfig,{
    plugins: [
      new uglifyJsPlugin(), // 压缩JS (运行时抽离)
    ]
  
})