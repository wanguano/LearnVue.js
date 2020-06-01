var name = '小明'
var age = 1.88
var flag = true

function sum(a = 10,b = 10) {
  return a + b;
}
// 1.通过对象导出
export {flag, sum}

// 2.导出方式二
export var num1 = 1000;
export var height = 1.88;

// 3.导出函数/类
export function mul(num1 ,num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 4. export default, 一个js文件只能默认暴露一个(导入时可以变量名可以由使用者起)
// const address = '北京市'
// export default address

export default function (argument) {
  console.log(argument);
}

const a = 10;
export { a as customName }

export let obj = {
  name: '占山'
}