<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav">
      <template #left>
        <img class="icon-left" src="~assets/img/common/left-btn.png" alt="">
      </template>
      <template #center>购物街</template>
      <template #right>
        <div class="login">登录</div>
      </template>
    </nav-bar>
    <!-- tabControl来决定是否固定显示的 -->
    <tab-control :titles="['流行', '新款', '精选']" @clickItem="clickItem" ref="tabControlFixed" class="tab-control-fixed" v-show="isControlFixed" />

    <!-- scroll 惯性移动 probeType:3监听滚动 -->
    <scroll class="content" ref="scroll" :probeType="2" @scrollInfo="scrollInfo" :pullUpLoad="true" @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @tabImgLoad="tabImgLoad" />
      <!-- recommend -->
      <recommend-view :recommends="recommends" />
      <!-- FeatureView -->
      <feature-view />
      <!-- TabControl -->
      <tab-control :titles="['流行', '新款', '精选']" @clickItem="clickItem" ref="tabControl" />
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
// 网络请求组件
import { getHomeMultidata, getHomeGoods } from 'network/home'
// 工具JS文件
import { debounce } from 'common/utils'
import { NEW, SELL, POP, BACK_POSITION } from 'common/const'
import { itemImgMixin, backTopMixin } from 'common/mixin'


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
      goodsType: POP,
      ControlOffsetTop: 0,
      isControlFixed: false,
      saveHistoryY: 0,
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
  },
  created() {
    // 1.轮播图数据
    this.getHomeMultidata()

    // 2.商品列表数据
    this.getHomeGoods(POP)
    this.getHomeGoods(NEW)
    this.getHomeGoods(SELL)

    // 3.详情推荐商品数据
  },
  mixins: [itemImgMixin, backTopMixin],
  methods: {
    // tabControl事件监听
    clickItem(index) {
      switch (index) {
        case 0:
          this.goodsType = POP
          break;
        case 1:
          this.goodsType = 'new'
          break;
        case 2:
          this.goodsType = 'sell'
          break;
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControlFixed.currentIndex = index
    },
    // 返回顶部
    backTop() {
      // 调用scroll定义的方法传递x,y值,返回顶部
      this.$refs.scroll.backTop(0, 0)
    },
    // 滚动信息
    scrollInfo(position) {
      // 1.当滚动超过1000px时,显示上箭头
      this.listenerShow(position)

      // 2.当滚动等于tabControl的offsetTop时,改变isControlFixed为true
      this.isControlFixed = Math.abs(position.y) >= this.ControlOffsetTop

    },
    // 上拉底部时触发, 一般请求发送请求
    loadMore() {
      this.getHomeGoods(this.goodsType)
    },
    // swiper-img加载完成触发: 获取tabControl的offsetTop
    tabImgLoad() {
      // 获取tabControl的offsetTop
      this.ControlOffsetTop = this.$refs.tabControl.$el.offsetTop
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
  activated() {
    // 返回上一次纵坐标
    this.$refs.scroll.backTop(0, this.saveHistoryY, 0)
    // 刷新scroll管理区域
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.离开时获取scroll的纵坐标
    this.saveHistoryY = this.$refs.scroll.getPositionY()
    // 2.解绑itemImgLoad事件  this.$bus.$off(eventName, func)
    // func: 要解绑的事件处理函数
    this.$bus.$off('itemImgLoad', this.itemImgListens)
  },
  destroyed() {
    console.log('Home destroy')
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
  /* 因为已经不使用原生滚动了 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
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
.tab-control-fixed {
  position: relative;
  top: -1px;
  background: #fff;
  z-index: 9;
}
.login {
  position: relative;
  font-family: 黑体;
}
.login::before {
  content: '';
  position: absolute;
  left: -20px;
  /* top: 1px; */
  background:  url('~assets/img/common/user.png');
  background-size: 100%;
  width: 40px;
  height: 40px;
  clear: both;
}
.icon-left {
  width: 18px;
  height: 18px;
  margin-top: 12px;
}
</style>