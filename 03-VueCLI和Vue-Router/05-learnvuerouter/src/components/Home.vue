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
  data() {
    return {
      // 默认路径
      // 思路: 在当前路由跳转前, 将路径进行保存保存
      path: '/home/news'
    }
  },
  created() {
    // 但是有100个页面需要修改标题呢?
    // document.title = '首页'
    console.log('home-created');
    // this.$router.push('/home/news')
  },
  // 下面这两个函数,只有该组件被保持了状态使用了keep-alive时,才是有效的
  destroyed() {
    console.log('home-destoryed');
  },
  activated() {
    this.$router.push(this.path)
    // console.log('active');
  },
  deactivated() {
    // console.log('deactivated')
  },
 // 导航离开该组件的对应路由时调用
  beforeRouteLeave (to, from, next) {
    // 可以访问组件实例 `this`
    this.path = this.$route.path 
    next()
  }
}
</script>

<style scoped>
</style>