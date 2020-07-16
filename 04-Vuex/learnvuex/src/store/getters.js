export default {
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
}