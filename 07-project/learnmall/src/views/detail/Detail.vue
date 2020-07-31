<template>
  <div id="detail">
    <!-- DetailNarBar 头部导航 -->
    <detail-nav-bar :titles="titles"></detail-nav-bar>
    <!-- scroll -->
    <scroll class="detail-scroll" ref="scroll">
      <!-- DetailSwiper 轮播图 -->
      <detail-swiper :swiperList="swiperList" />
      <!-- DetailBaseInfo 商品详情 -->
      <detail-base-info :goods="goods" />
      <!-- DetailShopInfo 店铺信息 -->
      <detail-shop-info :shop="shopInfo" />
      <!-- DetailGoodsInfo 商品详情信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <!-- DetailParamsInfo 商品参数信息 -->
      <detail-params-info :paramInfo="detailParams" />
      <!-- DetailCommentInfo 商品评论信息 -->
      <detail-comment-info :commentInfo="detailCommentInfo" />
      <!-- GoodsList 商品推荐信息 -->
      <goods-list :goods="detailRecommendList" />
    </scroll>
  </div>
</template>

<script>
// childComps
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
// components
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// 网络请求
import { getDetailData, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
// 混入
import { imgLoadMixin } from 'common/mixin'
export default {
  name: "Detail",
  data() {
    return {
      titles: ['商品', '推荐', '评论'],
      iid: null,
      swiperList: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      detailParams: {},
      detailCommentInfo: {},
      detailRecommendList: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  mixins: [imgLoadMixin],
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.query.iid

    // 2.根据iid请求详情数据
    getDetailData(this.iid).then(res => {
      const data = res.result
      console.log(data)
      // 1.保存轮播图数组
      this.swiperList = data.itemInfo.topImages

      // 2.保存商品详情信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.店铺信息
      this.shopInfo = new Shop(data.shopInfo)

      // 4.商品详情和图片展示数据
      this.detailInfo = data.detailInfo

      // 5.商品参数尺寸信息
      this.detailParams = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 6.商品评论信息
      this.detailCommentInfo = data.rate.list[0]

      // 7.商品推荐数据保存
      getRecommend().then(value => {
        this.detailRecommendList = value.data.list
      })
    })
  },
  methods: {
    // 商品详情页图片加载完毕
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  },
  destroyed() {
    // 1.取消事件总线的监听
    this.$off('imgLoad', this.busImgLoad)
  },
}
</script>

<style scoped>
#detail {
  height: 100vh;
}
.detail-scroll {
  /* 44 + 58  = 102 */
  height: calc(100% - 102px);
  overflow: hidden;
}
</style>