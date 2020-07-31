<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- TabControl -->
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="itemClick" ref="tabControlFixed" v-show="isFixed" />

    <!-- scroll 管理区域 -->
    <scroll :probeType="3" :pullUpLoad="true" class="content" @pullUpLoad="pullUpLoad" @scrollInfo="scrollInfo" ref="scroll">
      <!-- 轮播图 -->
      <home-swiper :banner="banner" @imgLoad="imgLoad" />
      <!-- Recommend -->
      <recommend :recommend="recommend" />
      <!-- Feature -->
      <feature />
      <!-- TabControl -->
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="itemClick" ref="tabControl" />
      <!-- 商品列表页 -->
      <goods-list :goods="showGoods" class="goods-list" />
    </scroll>

    <!-- backTop -->
    <backTop @click.native="backTop" v-show="isShowTop" />

  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
// 相关子组件
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/Recommend'
import Feature from './childComps/Feature'
// 网络请求相关组件
import { getHomeMultidata, getHomeGoods } from 'network/home'
// 工具函数,混入
import { imgLoadMixin } from 'common/mixin'

export default {
  name: "",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowTop: false,
      controlTop: 0,
      isFixed: false,
      saveHistoryY: 0,
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    Recommend,
    Feature,
  },
  mixins: [imgLoadMixin],
  created() {
    // 1.轮播图数据
    this.getHomeMultidata()

    // 2.商品列表数据
    this.getHomeGoods('pop', 0)
    this.getHomeGoods('new', 0)
    this.getHomeGoods('sell', 0)

  },
  methods: {
    // 保存banner和recommend数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 为什么不在声明周期函数中处理? 因为接收到的数组在函数执行完毕就会被销毁,所以我们要保存到变量当中
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    // 将相应对应的请求保存在goods中list数组中
    getHomeGoods(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 下拉加载更多
        this.$refs.scroll.finishPullLoad()
      })
    },
    // 根据control来决定高亮显示文字和下边框
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControlFixed.currentIndex = index
      this.$refs.tabControl.currentIndex = index

    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.backTop(0, 0)
    },
    // 滚动坐标信息
    scrollInfo(position) {
      // 1.大于1000像素显示上箭头
      this.isShowTop = Math.abs(position.y) > 1000

      // 2.是否固定tabControl
      this.isFixed = Math.abs(position.y) > this.controlTop ? true : false
    },
    // 上拉加载
    pullUpLoad() {
      // 发送第二页请求
      this.getHomeGoods(this.currentType)
    },
    // 轮播图加载完毕,获取tab-control的offsetTop
    imgLoad() {
      // 1.获取backTop的offsetTop
      this.controlTop = this.$refs.tabControl.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    // 1.恢复到上一次位置
    this.$refs.scroll.backTop(0, this.saveHistoryY)
    // 2.refresh刷新管理区域高度
    this.$refs.scroll.refresh()
    // 遗留问题: 当回退到HOME组件时,点击good-list-item时第一次点击无效:  pointer-events:none
    this.$refs.scroll.backTop(0, this.saveHistoryY + 0.1)
  },
  deactivated() {
    // 1.保存离时的位置
    this.saveHistoryY = this.$refs.scroll.scrollY
    // 2.取消事件总线的监听
    this.$off('imgLoad', this.busImgLoad)
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}

.nav-bar {
  /*position: fixed;*/
  z-index: 9;
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
}

.tab-control {
  position: relative;
  background: #fff;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 51px;
  overflow: hidden;
}
</style>
