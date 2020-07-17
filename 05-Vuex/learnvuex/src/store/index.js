// 1.引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

import ModuleA from './modules/moduleA'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

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
  mutations,
  actions,
  getters,
  modules: {
    a: ModuleA
  }
})

export default store