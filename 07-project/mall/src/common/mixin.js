import { debounce } from './utils'
export const itemImgMixin = {
  data() {
    return {
      itemImgListens: null
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听,监听事件总线
    const refresh = debounce(this.$refs.scroll.refresh)
    // 2.将回调保存
    this.itemImgListens = () => {
      // 调用scroll的refresh刷新scroll的高低
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListens)
  },
}

import BackTop from 'components/content/backTop/backTop'
import { BACK_POSITION } from 'common/const'

export const backTopMixin = {
  data() {
    return {
      isShowTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    listenerShow(position) {
      this.isShowTop = Math.abs(position.y) > BACK_POSITION
    }
  },
}