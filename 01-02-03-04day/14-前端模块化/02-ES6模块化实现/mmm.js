// 1.导入变量
import {flag} from './aaa.js'
if (flag) {
  console.log('小明好帅哈哈哈哈');
}

// 2.直接导入export定义的变量
import {num1, height} from './aaa.js'
console.log(num1);
console.log(height);

// 3.导入函数和类
import {Person,mul} from './aaa.js'
var p = new Person();
p.run()
console.log(mul(10,5));

// 4.导入 export default 中的内容
import addr from './aaa.js'
addr(1)

// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);

// 6.导入别名
import {customName} from './aaa.js'
console.log(customName);

// 不能改变导入的值, 导入的只是个可读引用 (可以改变对象的属性)
// flag = false;
// console.log(flag);
// 可以改变对象的属性
console.log(aaa.obj.name = '我修改看了');