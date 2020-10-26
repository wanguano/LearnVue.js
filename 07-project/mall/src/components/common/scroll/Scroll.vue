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
  name: "scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    /* 为什么不使用原生的获取DOM?因为动粗们那天.querySelector来获取有可能不是当前组件内的DOM元素,有可能是其他组件内DOM元素 */

    // 1.创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType, // 监听滚动
      pullUpLoad: this.pullUpLoad // 滚动底部
    })
    
    // 2.监听滚动
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
        // 发射事件,传递坐标信息
        this.$emit('scrollInfo', position)
      })
    }

    // 3.上拉到底部触发
    if (this.pullUpLoad) {
      // 滚动底部
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }

  },
  methods: {
    // 返回顶部
    backTop(x, y, time = 300) {
      // console.log(x, y, time)
      this.scroll.scrollTo(x, y, time)
    },

    // 刷新scroll管理区域高度
    refresh() {
      this.scroll && this.scroll.refresh()
    },

     // 继续下拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },

    getPositionY() {
      return this.scroll ? this.scroll.y : 0
    },
  }
}
</script>

<style scoped>
</style>