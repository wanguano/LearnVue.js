<template>
  <div class="goods">
     <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* padding: 5px; */
  justify-content: space-around;
}
</style>