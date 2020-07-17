<template>
  <div>
    <h3>子组件当前计数:{{$store.state.counter}}</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>{{$store.getters.more20Stu}}</h3>
    <h3><h3>{{$store.state.info}}</h3></h3>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapSate
import { mapSate, mapState } from 'vuex'
export default {
  name: "",

}
</script>

<style scoped>
</style>