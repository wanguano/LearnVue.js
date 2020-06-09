<template>
  <div>
    <h2>我是主页,哈哈哈</h2>
    <div>我是主页,哈哈哈</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Home",
}
</script>

<style scoped>

</style>