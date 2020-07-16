export default {
  // 在actions中定义异步方法
  asyncUpdate(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateStu')
        resolve('异步执行成功')
      }, 1200)
    })
  }
}