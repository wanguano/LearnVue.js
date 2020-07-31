<template>
  <div class="check-button" :class="{check: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 0.53333vw solid #ccc;
}
.check{
  background: #ff8198;
}
</style>