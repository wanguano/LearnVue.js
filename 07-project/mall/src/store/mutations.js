import {ADD_COUNTER, ADD_TO_CART} from './mutation_type'
export default {
  // mutation中每个方法进行进行单一的操作
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1
    payload.checked = false
    state.cartList.push(payload)
  },
}