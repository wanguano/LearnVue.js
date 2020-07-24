<template>
  <div id="app">
     <main-tar-bar/>
     <router-view></router-view>
  </div>
</template>

<script>
import MainTarBar from 'components/content/mainTabBar/mainTabBar'
export default {
  name: 'App',
  components: {
    MainTarBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
