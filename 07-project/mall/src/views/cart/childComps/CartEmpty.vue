<template>
  <div class="cart-empty">
    <div class="tb">
      <div class="empty-header">
        <img src="~assets/img/common/smile.png" alt="" />
      <div>购物车空空空如也</div>
      </div>
      <div class="empty-to">
        <router-link to="/home"><span>前往首页</span></router-link>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "CartEmpty",
}
</script>

<style scoped>
.cart-empty {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.tb {
  margin-top: -50px;
  line-height: 25px;
  text-align: center;
}
.empty-to {
  margin-top: 20px;
  width: 180px;
  height: 44px;
  background: #1baeae;
  text-align: center;
  line-height: 44px;
}
.empty-to span {
  color: #fff;
}
</style>