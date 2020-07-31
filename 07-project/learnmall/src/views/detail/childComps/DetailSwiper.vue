<template>
  <!-- Swiper -->
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: "",
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 45vh;
}
</style>