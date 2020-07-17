export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + 11111
    },
    fullName2(state, getters) {
      return getters.fullName + 2222
    },
    // 使用根状态定义的count
    fullName3(state, getters, rootState) {
      return state.fullName2 + rootState.count
    }
  },
  actions: {
    asyncUpdateName(context) {
      setTimeout(() => {
        console.log(context) // 包含一些"根"的属性
        context.commit('updateName','lisi')
      }, 1000)  
    }
  },
  modules: {

  }
}