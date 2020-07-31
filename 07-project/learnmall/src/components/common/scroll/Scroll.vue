<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BetterScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad// 上拉加载
    })
    // 2.监听滚动
    this.scroll.on('scroll', (position) => {
      this.$emit('scrollInfo', position)
    })

    // 3.上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('pullUpLoad')
    })
  },
  methods: {
    // 返回顶部
    backTop(x,y,time = 300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    // 下拉加载更多
    finishPullLoad(){
      this.scroll && this.scroll.finishPullUp()
    },
    // 刷新scroll区域高度
    refresh() {
      this.scroll && this.scroll.refresh()
    },
  },
  computed: {
    scrollY() {
      return this.scroll.y
    }
  },
}
</script>

<style scoped>

</style>