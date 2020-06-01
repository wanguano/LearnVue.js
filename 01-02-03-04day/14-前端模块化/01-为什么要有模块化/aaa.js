// 小明
var module1 = (function () {
  var obj = {}
  var a = "111"
  var flag = true;

  function sum(a, b) {
    return a + b
  }
  obj.flag = flag;
  obj.sum = sum;
  return obj

}())