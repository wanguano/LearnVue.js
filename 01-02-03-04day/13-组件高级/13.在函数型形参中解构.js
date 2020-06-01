// 在函数形参中, 对实参进行解构
function foo({name}) {
  console.log(name);
}

const user = {name: '展示',age: 18}
foo(user)