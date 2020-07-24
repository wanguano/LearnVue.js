<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- scroll -->
    <scroll class="content" ref="scroll" :probeType="3" @scrollInfo="scrollInfo" :pullUpLoad="true" @pullUpLoad="pullUpLoad">
      <!-- 轮播图 -->
      <home-swiper :banner="banner" />
      <!-- Recommend -->
      <recommend :recommend="recommend" />
      <!-- Feature -->
      <feature />
      <!-- TabControl -->
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="itemClick" />
      <!-- 商品列表页 -->
      <goods-list :goods="showGoods" />
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
      isShowTop: false
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
  created() {
    // 1.轮播图数据
    this.getHomeMultidata()

    // 2.商品列表数据
    this.getHomeGoods('pop', 0)
    this.getHomeGoods('new', 0)
    this.getHomeGoods('sell', 0)
    
  },
  methods: {
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
    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.backTop(0, 0)
    },
    // 滚动坐标信息
    scrollInfo(position) {
      this.isShowTop = Math.abs(position.y) > 400
    },
    // 上拉加载
    pullUpLoad() {
      // 发送第二页请求
      this.getHomeGoods(this.currentType)
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mounted() {
       // 1.监听事件总线
    this.$bus.$on('imgLoad', () => {
      // 调用scroll的refresh刷新scroll的高低
      this.$refs.scroll.refresh()
    })
  },
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}
.nav-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
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