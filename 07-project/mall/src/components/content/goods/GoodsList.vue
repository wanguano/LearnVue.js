<template>
  <div class="goods">
    <good-list-item class="good-item" v-for="(item, index) in goods" :key="index" :goodItem="item" />
  </div>
</template>

<script>
import GoodListItem from './GoodsListItem'
export default {
  name: "",
  components: {
    GoodListItem
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
  justify-content: space-around;
  padding: 2px;
}
</style>