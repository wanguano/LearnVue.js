<template>
  <div id="app">
    <!-- main-tab-bar 底部导航 -->
    <main-tab-bar />
    <!-- router-view 路由相对应组件 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/mainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
