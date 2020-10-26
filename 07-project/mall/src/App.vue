<template>
  <div id="app">
    <keep-alive exclude="Detail,Category,CategoryRight,Cart">
      <router-view />
    </keep-alive>
    <!-- main-tab-bar 底部导航 -->
    <main-tab-bar />
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabBar/mainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  provide: {
    foo: '我是APP组件通过provide传递的foo'
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
