<template>
  <div>
    <h3>{{counter}}</h3>
  </div>
</template>

<script>
// 当一个组件需要获取多个状态时，可以直接在函数中声明。
import { mapState } from 'vuex'
// mapGetters辅助函数用于有多个状态需要获取的情况。
import {mapGetters} from 'vuex'
export default {
  name: "",
  computed: mapState({
    counter: state => state.counter
  })
}
</script>

<style scoped>
</style>