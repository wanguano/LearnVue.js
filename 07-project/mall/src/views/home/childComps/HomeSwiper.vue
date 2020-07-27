<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="tabImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isImgLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    tabImgLoad() {
      if (!this.isImgLoad) {
        this.$emit('tabImgLoad')
        this.isImgLoad = true
      }
    }
  },
}
</script>

<style>
</style>