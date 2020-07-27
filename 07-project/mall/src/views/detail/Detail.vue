<template>
  <div id="detail">
    <!-- detail-nav-bar 头部导航 -->
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-scroll" ref="scroll">
      <!-- detail-swiper 轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- DetailBaseInfo 商品详情信息 -->
      <detail-base-info :goods="goods" />
      <!-- DetailShopInfo 店铺详情信息 -->
      <detail-shop-info :shop="shop" />
      <!-- DetailGoodsInfo 商品详情图片和文字信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <!-- DetailParamInfo 商品尺寸和参数 -->
      <detail-param-info :paramInfo="paramInfo" />
      <!-- DetailCommentInfo 商品的评价 -->
      <detail-comment-info :commentInfo="commentInfo" />
      <!-- GoodsList 商品推荐信息 -->
      <goods-list :goods="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {itemImgMixin} from 'common/mixin'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'

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
    GoodsList,
    Scroll
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res)
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
    })

    // 3.商品推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mixins: [itemImgMixin],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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
  height: calc(100% - 44px);
}
</style>