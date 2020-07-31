/**
 * 对函数进行防抖操作
 * @param {function} func 要执行的函数
 * @param {Number} delay 间隔多长时间取消上一次的执行
 */
export function debounce(func, delay) {
  let timer = null
  return (...arg) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arg)
    }, delay);
  }
}

/**
 * 对时间戳进行格式化
 * @param {Date} date 时间戳
 * @param {String} fmt 指定格式
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};