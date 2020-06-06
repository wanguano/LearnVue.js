// 1.使用commonjs的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import { name, age, height } from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊,webpack!</h2>')

// 5.引入vue,并使用vue开发
// 抽离到js文件中
import Vue from 'vue'
// import App from './js/App'// 暴露一个组件
import App from './vue/App.vue'
new Vue({
  el: '#app',
  // 挂载元素同时有template属性,会将template的html覆盖掉挂载元素(template会替换el)
  template: '<app/>',// 根组件
  components: {
    App// 注册组件
  }
})
