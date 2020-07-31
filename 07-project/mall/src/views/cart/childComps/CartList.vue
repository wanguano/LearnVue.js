<template>
  <div class="cart-list">
    <!-- scroll 管理区域 -->
    <scroll class="scroll-content" ref="scroll">
      <!-- CartListItem -->
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartListItem from './CartListItem'


import Scroll from 'components/common/scroll/Scroll'
export default {
  name: "",
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart-list {
  /* 44px - 49px  - 40 */
  height: calc(100% - 136px);
}
.scroll-content {
  height: 100%;
  overflow: hidden;
}
</style>