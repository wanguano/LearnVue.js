// main.js 主文件入口
// (不用在index.html引入了)
// webpack支持你在JS文件中使用任意一种规范: AMD,CMD,CommonJS,ES6 modules

// 1.使用CommonJS规范来进行模块化开发
const {sum, mul} = require('./mathUtils')
console.log(sum(10,20));
console.log(mul(10,20));

// 2.使用ES6 modules模块化规范
import {name,age,height} from './info'
console.log(name);
console.log(age);
console.log(height);