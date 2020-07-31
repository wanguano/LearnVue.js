import { ADD_COUNTER, ADD_TO_CART } from './mutation_type'
export default {
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      // 判断push的payload是否已经存在 for.of find indexOf
      // find匹配成功返回: 匹配到的元素
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      // 存在添加count += 1
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else {
        commit(ADD_TO_CART, payload)
        resolve('加入购物成功')
      }
    })
  },
}