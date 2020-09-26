<template>
  <div class="cart">
    <!-- NavBar 购物车导航 -->
    <nav-bar class="cart-nav">
      <template #center>购物车({{length}})</template>
    </nav-bar>
    <!-- CartList 商品列表 -->
    <cart-list />
    <!-- CartBottomBar 底部结算汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 两种语法:在组件的计算属性中直接使用getters
    // ...mapGetters(['cartLength'])
    // 自定义名用法
    ...mapGetters({
      length: 'cartLength'
    })
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>