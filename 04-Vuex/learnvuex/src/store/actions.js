export default {
  // 异步操作定义在action,执行完在提交到mutation
  updateStu(context, payload) {
    // setTimeout(() => {
    //   context.commit('updateStu')
    //   // 通知异步操作执行完毕
    //   // payload() 函数形式执行
    //   //#region 对象形式通知
    //   console.log(payload.message)
    //   payload.success()
    //   //#endregion 
    // }, 1200)

    // promise来通知异步操作是否成功
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateStu')
        resolve('异步操作成功')
      }, 1200);
    })
  }
}