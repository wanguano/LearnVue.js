// 引入资源
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import ModuleA from './modules/moduleA'
// 1.使用插件
Vue.use(Vuex)


// 2.创建store
const store = new Vuex.Store({
  state: {
    count: 10,
    students: [
      { name: 'jack', age: 18 },
      { name: 'evenYou', age: 30 },
      { name: 'aili', age: 25 },
      { name: 'danni', age: 12 },
    ],
    info: { name: 'hapi', age: 18 }
  },
  getters,
  mutations,
  actions,
  modules: {
    a: ModuleA
  }
})

export default store