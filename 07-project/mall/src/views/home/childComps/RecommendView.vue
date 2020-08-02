<template>
  <div class="recommend">
      <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  margin: 12px 10px 12px;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
}
</style>