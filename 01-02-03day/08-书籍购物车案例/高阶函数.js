// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)
// filter/map/reduce

// filter中回调函数一个要求, 必须返回Boolean值
// true: 当返回true时, 函数内部自动将这次回调的元素加入到新的数组
// false: 返回false, 函数内部会自动过滤掉这次的元素
const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(item => item < 100).map(item => item * 2).reduce((preValue, item) => preValue + item)
console.log(total);


// let total = nums.filter(item => {
//   return item < 100
// }).map(item => {
//   return item * 2
// }).reduce((preValue, item) => {
//   return preValue + item
// }, 0)
// console.log(total);

// 1.filter函数使用
// let newNums = nums.filter(item => item < 100)
// console.log(newNums);

// 2.map函数的使用
// let newNums2 = newNums.map(item => item * 2)
// console.log(newNums2);3

// 3.reduce函数作用
// reduce作用对数组所有内容进行汇总
// let total = newNums2.reduce((preValue, item) => {
//   return preValue + item;
// },0)
// console.log(total);
// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第二次: preValue 60 n 80
// 第二次: preValue 140 n 100
// 240

// // 1.需求: 取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   // n < 100? newNums.push(n):'';
//   if (n<100) newNums.push(n)
// }
// // console.log(newNums);

// // // 2.需求:将所有小于100的数字进行转化: 全部*2
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n * 2)
// }
// //
// // console.log(new2Nums);
// //
// //
// // // 3.需求:将所有new2Nums数字相加,得到最终的记过
// let total = 0
// for (let n of new2Nums) {
//   total += n
// }
// //
// console.log(total);