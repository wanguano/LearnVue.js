// 1.引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2.安装插件
Vue.use(Vuex)

// 3.创建对象
const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      { name: 'james', age: 21 },
      { name: 'ming', age: 10 },
      { name: 'kebo', age: 30 },
      { name: 'jack', age: 23 }
    ],
    info: {name: 'eventYou', age: 18}
  },
  // 通过mutations来改变store中state
  mutations: {
    // 方法
    increment(state) {
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
      Vue.delete(state.info, 'age')
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },
    // 用户用户传入的age来进行过滤
    moreAgeStu(state) {
      return (age) => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

export default store