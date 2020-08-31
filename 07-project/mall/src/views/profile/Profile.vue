<template>
  <div id="profile">
    <!-- NavBar 头部导航 -->
    <nav-bar class="profile-nav">
      <template #center>我的档案</template>
    </nav-bar>
    <!-- ProfileHeader 头部信息 -->
    <profile-header/> 
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileHeader from './childComps/Profile-header'
export default {
  name: "",
  components: {
    NavBar,
    ProfileHeader,
  }
}
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>