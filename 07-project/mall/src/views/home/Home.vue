<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- scroll 惯性移动 probeType:3监听滚动 -->
    <scroll class="content" ref="scroll" :probeType="3" @scrollInfo="scrollInfo" :pullUpLoad="true" @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" />
      <!-- recommend -->
      <recommend-view :recommends="recommends" />
      <!-- FeatureView -->
      <feature-view />
      <!-- TabControl -->
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @clickItem="clickItem" />
      <!-- GoodList -->
      <goods-list :goods="showGoods" />
    </scroll>

    <!-- backTop 返回顶部图标 -->
    <BackTop @click.native="backTop" v-show="isShowTop" />

  </div>
</template>

<script>
// Home相关的子组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
// content和common相关组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/backTop'
// 网络请求组件
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: "",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: 'pop',
      isShowTop: false
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1.轮播图数据
    this.getHomeMultidata()

    // 2.商品列表数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 1.监听事件总线
    this.$bus.$on('itemImgLoad', () => {
      // 调用scroll的refresh刷新scroll的高低
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // tabControl事件监听
    clickItem(index) {
      switch (index) {
        case 0:
          this.goodsType = 'pop'
          break;
        case 1:
          this.goodsType = 'new'
          break;
        case 2:
          this.goodsType = 'sell'
          break;
      }
    },
    // 返回顶部
    backTop() {
      // 调用scroll定义的方法传递x,y值,返回顶部
      this.$refs.scroll.backTop(0, 0)
    },
    // 滚动信息
    scrollInfo(position) {
      this.isShowTop = Math.abs(position.y) > 1000
    },
    // 上拉底部时触发, 一般请求发送请求
    pullingUp() {
      this.getHomeGoods(this.goodsType)
    },
    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      // 临时变量,获取当前请求的页码数
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        // 自身页码数+1
        this.goods[type].page += 1
        // 继续上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list
    }
  },
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
  overflow-x: hidden;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
.content {
  /* height: 85.7vh;*/
  /* height: calc(100% - 49px); */

  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>