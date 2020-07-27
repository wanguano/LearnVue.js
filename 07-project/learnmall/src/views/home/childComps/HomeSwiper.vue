<template>
    <!-- 轮播图 -->
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: "",
  data() {
    return {
      isImgLoad: true
    }
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      // 发射事件,只需要发射一次
      if (this.isImgLoad) {
        this.$emit('imgLoad')
        this.isImgLoad = false
      }
    }
  }
}
</script>

<style scoped>
</style>
