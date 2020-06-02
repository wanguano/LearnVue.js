<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import cpn from './Cpn'
export default {
  name: 'App',
  components: {
    cpn
  },
  data() {
    return {
      message: '我是data中的消息',
      name: 'wanguan'
    }
  },
  methods: {
    btnClick() {
      console.log('被点击了');
    }
  },
}
</script>

<style scoped>
.title {
  color: aquamarine;
}
</style>