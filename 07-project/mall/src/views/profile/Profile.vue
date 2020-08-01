<template>
  <div id="profile">
    <!-- NavBar 头部导航 -->
    <nav-bar class="profile-nav">
      <template #center>我的档案</template>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>