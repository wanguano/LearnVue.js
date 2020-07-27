<template>
  <div>
    <nav-bar>
       <div slot="left" class="back" @click="backPage">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" class="title-item" @click="titleClick(index)" :class="{active: currentIndex==index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// 遍历titles,然后均等分,flex布局,调整文字大小
// 添加点击事件,然后高亮显示文字,动态绑定class
// 返回上一次页面
export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backPage() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  text-align: center;
  margin-top: 6px;
}
</style>