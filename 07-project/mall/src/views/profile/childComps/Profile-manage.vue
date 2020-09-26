<template>
  <ul class="profile-manage">
    <li class="manage-item" v-for="(item, index) in profileManage" :key="index">
      <span>{{ item }}</span>
      <span class="right-arrows"><img src="~assets/img/profile/right-jianTou.png" alt="箭头" /></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    profileManage: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.profile-manage {
  padding: 0 15px;
}
.manage-item {
  display: flex;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  margin-left: 10px;
  justify-content: space-between;
}
.right-arrows {
  width: 15px;
  height: 15px;
}
.right-arrows img {
  width: 100%;
}
</style>