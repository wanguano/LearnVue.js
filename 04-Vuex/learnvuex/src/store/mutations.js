import {INCREMENT} from './Mutations-type'
export default {
// 通过mutations来改变store中state
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
       state.counter += payload.count
      
    },
    addStu(state, stu) {
      state.students.push(stu)
    },
    updateStu(state) {
      // 修改响应式状态
      // state.info.name = 'coderwhy'
      // 1.添加属性,通过[]来添加属性 (不是响应式的)
      // state.info['address'] = '洛杉矶'
      // 通过Vue.set() 来添加属性
      // Vue.set(state.info, 'address', '洛杉矶')

      // 2.删除某个属性的响应式 delete (不是响应式的)
      // delete state.info.age
      // Vue.delete(state.info, 'age')

      // 通过mutation来异步方式更新state (Devtools捕捉不到)
      // setTimeout(() => {
        state.info.name = 'coderwhy'
      // }, 1000)
      // 如何解决: 在Action是进行异步操作然后提交到mutation
    }
  
}