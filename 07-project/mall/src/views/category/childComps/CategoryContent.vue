<template>
  <div class="category-content">
    <scroll class="scroll-lef">
      <!-- CategoryLeft -->
      <category-left :category-left="categoryList" @itemClick="itemClick" />
    </scroll>
    <scroll class="scroll-right" ref="scroll">
      <!-- CategoryRight -->
      <category-right :categoryIconList="categoryIcon" @imgLoad="imgLoad" />
      <!-- TabControl -->
      <tab-control :titles="['综合','新品','销量']" />
      <!-- GoodsList -->
      <goods-list :goods="goodList" />
    </scroll>
  </div>
</template>

<script>
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
// components
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
// 网络请求
import { getCategory, getCategoryIcon, getCategoryGoods } from 'network/category'
// mixin
import { itemImgMixin } from 'common/mixin'
export default {
  name: "CategoryContent",
  data() {
    return {
      categoryList: [],
      categoryIcon: [],
      maitkey: 3627,
      miniWallkey: 10062603,
      goodList: []
    }
  },
  components: {
    CategoryLeft,
    CategoryRight,
    GoodsList,
    Scroll,
    TabControl
  },
  created() {
    // 实例被创建完,但是模板还没有渲染
    // 1.发送商品分类数据
    this.getCategory()

    // 2.发送视频图标和文字请求,根据当前高亮显示的分类,发送对应的请求
    this.getCategoryIcon(this.maitkey)

    // 3.发送商品列表请求
    this.getCategoryGoods(this.miniWallkey)
  },
  methods: {
    // 右侧icon图片加载完毕
    imgLoad() {
      // 右侧icon和文字描述加载完毕: 刷新scroll高度
      this.$refs.scroll.refresh()
    },
    // 左侧item点击时保存:maitkey和miniWallkey
    itemClick(maitkey, miniWallkey) {
      this.maitkey = maitkey
      this.miniWallkey = miniWallkey
      this.getCategoryIcon(this.maitkey)
      this.getCategoryGoods(this.miniWallkey)
      this.$refs.scroll.backTop(0, 0, 0)
    },
    getCategoryIcon(maitkey) {
      getCategoryIcon(maitkey).then(res => {
        const data = res.data
        // console.log(data)
        // 保存图标和文字描述
        this.categoryIcon = data.list
      })
    },
    getCategory() {
      getCategory().then(res => {
        const data = res.data
        // 保存categoryList
        this.categoryList = data.category.list
      })
    },
    getCategoryGoods(miniWallkey) {
      getCategoryGoods(miniWallkey, 'new').then(res => {
        this.goodList = res
      })
    }
  },
  mixins: [itemImgMixin],
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListens)
  }
}
</script>

<style scoped>
.category-content {
  display: flex;
  /* 44  + 49*/
  /* height: calc(100% - 93px); */
  height: 100vh;
}
.scroll-lef,
.scroll-right {
  height: calc(100% - 93px);
  overflow: hidden;
}
.scroll-lef {
  width: 30%;
  /* background: skyblue; */
  background: #f6f6f6;
}
.scroll-right {
  width: 70%;
  /* background: purple; */
}
</style>