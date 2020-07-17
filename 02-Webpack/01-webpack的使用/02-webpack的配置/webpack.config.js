// 1.配置webpack
const path = require('path')
module.exports = {
  entry: './src/main.js',// 入口文件
  output: {// 绝对路径
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  }
}
// 2.局部安装webpack
// development: 开发时依赖, 如webpack,gulp
// dependencies: 项目依赖, 如vue,jquery
// webpack@3.6.0--save-dev

// 3.执行本地局部命令
// 在script中添加快捷命令
// 

// 为什么要局部安装?
// 在终端执行的命令是全局的吗?