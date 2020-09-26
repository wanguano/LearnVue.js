<template>
  <div class="user-info">
    <div class="user-pic">
      <img src="~assets/img/profile/user-graduate.png" alt="" />
    </div>
    <div class="user-detail">
      <div class="detail-item">昵称:</div>
      <div class="detail-item">登录名:</div>
      <div class="detail-item">个性签名:</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
}
</script>

<style scoped>
.user-info {
  margin: 15px 8px;
  width: 95%;
  height: 165px;
  border-radius: 4%;
  padding: 20px;
  background-color: #43c1c1;
  box-shadow: 4px 4px 8px 2px rgba(62,190,190,0.4), 0px -4px 8px 2px rgba(62,190,190,0);
}
.user-pic {
  display: inline-block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 15px;
}
.user-pic img {
  width: 100%;
}
.user-detail {
  display: inline-block;
  color: #fff;
}
.user-detail .detail-item{ 
  line-height: 30px;
}
</style>