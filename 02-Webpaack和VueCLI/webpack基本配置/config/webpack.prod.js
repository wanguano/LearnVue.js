/* webpack的配置文件, 用于指定webpack执行哪些任务 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 注意要解构赋值！！
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');	
module.exports = {
  // 入口 (检测模块是否更新)
  entry: ['./src/js/main.js', './src/index.html'],
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'), // 文件输出目录
    filename: 'js/bundle.js', // 输出的文件名
    publicPath: '/' // 所有输出资源在引入时的公共路径，若loader中也指定了publicPath，会以loader的为准。
  },
  // 工作模式
  mode: 'production', // 配置工作模式

  /* 
    配置loader
      1.所有loader都要配置在module对象中的rules属性中
      2.rules是一个数组, 数组中的每一个对象就是一个loader
      3.loader特点: 下载后无需引入, 只需声明
  */
  module: {
    rules: [
      // 解析less(不完美)
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', //将less编译后的css转换成为CommonJs的一个模块。
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
                require('postcss-normalize')(),
              ],
              sourceMap: true,
            },
          },
          'less-loader' //将less编译为css，但不生成单独的css文件，在内存中。
        ],
      },

      // JS语法检查
      {
        test: /\.js$/, //只检测js文件
        exclude: /node_modules/, //排除node_modules文件夹
        enforce: "pre", //提前加载使用
        use: ['eslint-loader'] // 当use中只有配置loader,可以简写
      },

      // JS语法转换(ES6-->ES5)
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules文件夹
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env',
              {
                useBuiltIns: 'usage', // 按需引入需要使用polyfill
                corejs: { version: 3 }, // 解决warn
                targets: { // 指定兼容性处理哪些浏览器
                  "chrome": "58",
                  "ie": "9",
                }
              }]
            ],
            cacheDirectory: true, // 开启babel缓存
          }
        }
      },

      // 使用url-loader处理样式文件中的图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            publicPath: '/images/', // 决定图片的url路径
            outputPath: 'images', // 决定文件本地输出路径
            name: '[hash:5].[ext]', // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
            
          },
        }]
      },

      // 使用html-loader处理html中的标签资源
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },

      // 使用file-loader处理其他资源
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]'
        }
      }


    ]
  },

  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
      minify: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[hash:5].css",
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      cssProcessorOptions: { // 解决没有source map问题
        map: {
          inline: false,
          annotation: true,
        }
      }
    })
  ],

  // performance: {
  //   // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
  //   hints: "warning",
  //   // 开发环境设置较大防止警告
  //   // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
  //   maxEntrypointSize: 5000000, 
  //   // 最大单个资源体积，默认250000 (bytes)
  //   maxAssetSize: 3000000
  // },

  // 配置devtool实现源文件映射
  devtool: 'cheap-module-source-map'


}