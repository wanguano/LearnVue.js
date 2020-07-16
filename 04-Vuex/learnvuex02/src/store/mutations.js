import { INCREMENT } from './mutation_type'
import { DECREMENT } from './mutation_type'
export default {
  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  },
  addCount(state, payload) {
    state.count += payload.count
  },
  addStu(state, payload) {
    state.students.push(payload.newStu)
  },
  updateStu(state) {
    // 添加属性,不是响应式的
    // state.info['address'] = '洛杉矶'
    // Vue.set(state.info, 'address', '洛杉矶')

    // delete state.info.age
    // Vue.delete(state.info, 'age')

    // 在mutations中执行异步操作,devtools是捕捉不到的
    // setTimeout(() => {
    state.info.name = 'peiqi'
    // }, 1000)
  }
}