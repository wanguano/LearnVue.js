let arr = [
  { bookid: 110, bookName: '代码大全', price: 119, count: 3 },
  { bookid: 120, bookName: 'ES6', price: 38, count: 2 },
  { bookid: 119, bookName: 'JS高级程序设计', price: 56, count: 1 }
];
/**
 *  数组方法: Array.reduce()
 * 参数1: 回调函数(对每个数组元素执行的回调) 
 *      回调函数参数:
 *        1.accumulator是当前聚合值(初始值:就是参数2中的初始值)
 *        2.current是数组循环时当前元素,无论你返回什么值 
 * 参数2: 初始值
 */
// var newTotal = arr.reduce((total, current) => {
//   console.log(total,current,);
//   return total + current.price * current.count;
// }, 5)
// console.log(newTotal);




// 案例1数组求和
//   1.forEach
// let total = 0;
// [1,2,3].forEach(item => {
//   total += item;
// });
// console.log(total);

//  2.reduce()
var total = [4,5,6].reduce((init,current) => {
  return init + current;
},0)
console.log(total);