const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 项目的主要配置文件
module.exports = {
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
        routes: ['/'], // 将需要生成骨架屏的路由添加到数组中
      })
    ],
  },
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("common", resolve("src/common"));

      // 骨架屏
      if (process.env.NODE_ENV !== 'development') {
        config.plugin('html').tap(opts => {
          opts[0].minify.removeComments = false
          return opts
        })
      }
  },
};