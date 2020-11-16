<template>
  <div id="category">
    <!-- nav-bar -->
    <nav-bar class="category-nav"><template #center>商品分类</template></nav-bar>
    <!-- category-content -->
    <category-content/>
  </div>
</template>

<script>
// childComps
import CategoryContent from './childComps/CategoryContent'

// components
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
// 网络请求

export default {
  name: "Category",
  data() {
    return {
    }
  },
  components: {
    CategoryContent,
    NavBar,
    Scroll
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped>
/* #category {
  height: 100vh;
} */
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>