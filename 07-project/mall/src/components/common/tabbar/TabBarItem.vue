<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot> 
    </div>
    <div :style="activeStyle" :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // isActive: false,
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      // 通过props来接收父组件传递的path
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      // 判断父组件传递的目标路径和当前活跃的路径是否匹配,匹配则高亮
      return this.path === this.$route.path?true:false
      // return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      // 判断图标是否高亮
      return this.isActive? {color: this.activeColor}:{} 
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>