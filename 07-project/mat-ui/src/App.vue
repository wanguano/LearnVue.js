<template>
  <div id="app">
    <mt-input placeholder="请输入" v-model="username" ></mt-input>
    <mt-input placeholder="请输入" v-model="username" clearable></mt-input>
    <mt-input placeholder="请输入" v-model="username" type="password" show-password></mt-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
}
</script>

<style lang="scss">
  #app {
    .mt-input {
      width: 150px;
    }
  }
</style>