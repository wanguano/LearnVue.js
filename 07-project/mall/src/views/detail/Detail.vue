<template>
  <div id="detail">
    <!-- detail-nav-bar 头部导航 -->
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav" />
    <!-- scroll 管理区域 -->
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @scrollInfo="scrollInfo">
      <!-- detail-swiper 轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- DetailBaseInfo 商品详情信息 -->
      <detail-base-info :goods="goods" />
      <!-- DetailShopInfo 店铺详情信息 -->
      <detail-shop-info :shop="shop" />
      <!-- DetailGoodsInfo 商品详情图片和文字信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <!-- DetailParamInfo 商品尺寸和参数 -->
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <!-- DetailCommentInfo 商品的评价 -->
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <!-- GoodsList 商品推荐信息 -->
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <!-- DetailBottomBar 底部导航 -->
    <detail-bottom-bar @addCart="addToCart" />
    <!-- backTop 返回顶部图标 -->
    <BackTop @click.native="backTop" v-show="isShowTop" />
  </div>
</template>

<script>
// 子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// 混入
import { itemImgMixin, backTopMixin } from 'common/mixin'
// 网络请求
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
// mapActions
import { mapActions } from 'vuex'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      currentIndex: 0,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      // 1.保存轮播图地址
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo)

      // 4.获取商品详情图片和文字数据
      this.detailInfo = data.detailInfo

      // 5.商品的尺寸和参数数据
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 6.评论信息数据
      this.commentInfo = data.rate.list[0]

      // 7.获取推荐和参数和评论的offsetTop (获取 参数 评论 推荐的真实offsetTop)
      // this.$nextTick(() => {
      //   // 值不对的原因: 图片没有计算在内
      //   // 根据最新的数据, 对应的DOM时已经被渲染出来
      //   // 但是图片依然是没有加载完(目前获取到offsetTop不包含其中的图片)
      //   this.themeTopY = []
      //   this.themeTopY.push(0)
      //   this.themeTopY.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopY)
      // })
    })

    // 3.商品推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mixins: [itemImgMixin, backTopMixin],
  methods: {
    // mapActions
    ...mapActions(['addCart']),
    // 监听详情页图片加载完毕
    imageLoad() {
      this.$refs.scroll.refresh()
      // 获取推荐和参数和评论的offsetTo
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
      // console.log(this.themeTopY)
    },

    // 点击标题触发
    titleClick(index) {
      // 根据索引跳转到对应的位置
      this.$refs.scroll.backTop(0, -this.themeTopY[index], 350)
    },

    // 监听内容滚动
    scrollInfo(position) {
      // 1.保存y坐标
      const positionY = -position.y
      // 2.positionY和主题中值进行对比: [0, 28736, 29497, 29713 ]
      // positionY在 0 - 28736 之间, index = 0
      // positionY在 =28736 - 29497 之间, index = 1
      // positionY在 =29497 - 29713 之间, index = 2
      // positionY超出 29713 , index = 3
      let length = this.themeTopY.length // 4
      for (let i = 0; i < length - 1; i++) {
        /* if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]) || (i === length - 1 && positionY >= this.themeTopY[i])) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        } */
        if (this.currentIndex !== i && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }

      // 2.当滚动超过1000px时,显示上箭头
      this.listenerShow(position)
    },

    // 返回顶部
    backTop() {
      // 调用scroll定义的方法传递x,y值,返回顶部
      this.$refs.scroll.backTop(0, 0)
    },

    // 加入购物车
    addToCart() {
      // 1.根据购物车界面需要,设计数据结构: 图片,标题,描述,价格
      let product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 2.提交mutation
      this.addCart(product).then(value => {
        // console.log(value)
        // 显示Toast,传递value
        // this.show = true
        // this.message = value
        // // 1.5秒后取消显示
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500);
        // console.log(this.$toast.show)
        this.$toast.show(value, 1500)
      })
    }
  },
  updated() {
    // // 获取 参数 评论 推荐的真实offsetTop
    // this.themeTopY = []
    // this.themeTopY.push(0)
    // this.themeTopY.push(this.$refs.params.$el.offsetTop)
    // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopY)
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListens)
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  height: 100vh;
  background: #fff;
}
.detail-nav {
  position: relative;
  background: #fff;
  z-index: 9;
}
.detail-scroll {
  /* 44px - 58px */
  height: calc(100% - 102px);
  overflow: hidden;
}
</style>