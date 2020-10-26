<template>
  <div id="profile">
    <!-- NavBar 头部导航 -->
    <nav-bar class="profile-nav">
      <template #center>我的</template>
    </nav-bar>
    <!-- ProfileHeader 头部信息 -->
    <profile-header />
    <!-- ProfileManage 个人信息管理 -->
    <profile-manage :profileManage="['我的订单','账号管理','地址管理','人工客服','关于我们',]"/>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileHeader from "./childComps/Profile-header";
import ProfileManage from "./childComps/Profile-manage";
// https://s1.ax1x.com/2020/09/13/wBpQER.png
export default {
  name: "",
  components: {
    NavBar,
    ProfileHeader,
    ProfileManage
  }
};
</script>

<style scoped>
/* #profile {
  padding: 0 15px;
} */
.profile-nav {
  background-color: var(--color-tint);
  /* background: url(''); */
  color: #fff;
}
</style>
