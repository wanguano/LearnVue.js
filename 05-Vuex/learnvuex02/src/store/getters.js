export default {
  countPawer(state) {
    return state.count * state.count
  },
  more20Stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  countCustom(state) {
    return (age) => {
      return state.students.filter(s => s.age > age)
    }
  }
}