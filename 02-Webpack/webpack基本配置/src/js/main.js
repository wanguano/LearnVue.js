/* 
  注意!!!
  该index.js不同于学习模块化时, 那个用于汇总JS的文件
  该模块化技术的index.js只用于汇总各个js模块
  该index.js时webpack的 入口文件
  该文件可以用于汇总: js css json 图片 音频 视频
*/
// import '@babel/polyfill'; // 包含ES6的高级语法的转换, 缺点: 将所有高级语法都进行了转换, 不能按需加载
import {sum} from './module1'
import { sub } from "./module2";
import  module3 from "./module3";
// 在入口文件引入json文件
import a from '../json/test.json'
// 在入口文件引入样式, 不用变量接, 不用写from
import "../css/index.less";
import "../css/iconfont.less";

console.log(sum(1,2));
console.log(sub(3,4));
console.log(module3.mul(4,5));
console.log(module3.div(10,5));
console.log(a,typeof a)

// 1.webpack只管翻译es6的模块语法变为浏览器认识的，但是不会处理其他新语法
setTimeout(()=>{
  console.log('定时器到点了')
},1000)

// 2.JS语法检查
//console.log(1);// 没问题
// alert('11')// 语法检查报错
//console.log(1==2);// 语法检查报错

// 3.JS语法转换(ES6->ES5, 只支持简单的语法, promise不支持)
// 4.兼容性处理: 使用polyfill, 让IE低版本支持promise(缺点转换了全部语法, 不能按需转换)
// 4.1 搭配core-js使用可以转换使用的ES6新语法(按需转换) 

// 5.打包样式文件中的图片资源
// 在.less引入的图片,打包会报错,需要下载对应的loader
// url-loader和file-loader

// 6.html-wepack-pluins 简单创建 HTML 文件

// 7. 使用html-1oader处理html中的图片资源

// 8. 打包其他资源(字体图标,音视频资源)

// 9.自动编译打包运行
//  全局更新
// 10.(热模块替换)局部更新

// 11.devtool: 打包后压缩的源代码映射回源文件的一种技术

// 生产环境

// 1.清除打包文件目录
// 2.提取css成单独文件


let x = 10;
console.log(x);
setTimeout(() => {
  console.log('定时器');
}, 2000);
let myPromise = new Promise((resolve) => {
  resolve('promise: 哈哈哈')
})
myPromise.then((data) => console.log(data))
// myPromise() // 映射到源代码给出报错信息
/* 
  注意: webpack是从右到左来解析的

  1.less-loader(解析less编译css)
    依赖: less 和 css-loader 和 style-loader
  2.es-loader (JS语法检查)
    
*/

// 0不检查console(开发时, 推荐设置0)
// 1警告: 有console,就会警告(项目上线时,不需要打印到控制台了, 推荐设置1)
// 2报错/不能用: 有console,就会报错

