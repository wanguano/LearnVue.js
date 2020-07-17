export default  {
  state: {
    name: 'zhangsan',
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name += 111
    }
  },
  actions: {
    asyncName ({state, commit, rootState}) {
      setTimeout(() => {
        commit('updateName',rootState.count)
        console.log(rootState.count)
      }, 1000)
    }
  }
}