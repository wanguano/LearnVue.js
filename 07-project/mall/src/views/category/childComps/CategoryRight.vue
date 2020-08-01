<template>
  <div class="category-right">
    <div class="category-item" v-for="(item, index) in categoryIconList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="categoryLoad">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryRight",
  data() {
    return {
      counterLoad: 0
    }
  },
  props: {
    categoryIconList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    categoryLoad() {
      if (++this.counterLoad === this.categoryIconList.length) {
        this.$emit('imgLoad')
      }
    }
  },
}
</script>

<style scoped>
.category-right {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
}
.category-item {
  padding: 10px;
  width: 33.33%;
}
.category-item img {
  width: 100%;
  margin-bottom: 6px;
}
</style>