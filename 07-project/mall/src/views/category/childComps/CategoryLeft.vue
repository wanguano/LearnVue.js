<template>
  <ul class="category-left">
    <li class="category-item" v-for="(item, index) in categoryLeft" :key="index" @click="itemClick(index)" :class="{active: index==currentIndex}">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categoryLeft: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(newIndex) {
      this.currentIndex = newIndex
      this.$emit('itemClick', this.categoryLeft[newIndex].maitKey, this.categoryLeft[newIndex].miniWallkey)
    }
  },
}
</script>

<style scoped>
.category-left {
  text-align: center;
  line-height: 45px;
  font-size: 14px;
}
.category-item {
  height: 45px;
}
.active {
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
  font-weight: bold;
}
</style>