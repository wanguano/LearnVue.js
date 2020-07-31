<template>
  <nav-bar class="detail-navbar">
    <img slot="left" src="~assets/img/common/back.svg" alt="" class="back" @click="back">
    <div slot="center" class="detail-title">
      <div v-for="(item, index) in titles" :key="index" class="titles-item" @click="titleClick(index)" :class="{titleActive: index==currentIndex}">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "",
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    back() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.detail-navbar {
  background: #fff;
}
.back {
  margin-top: 11px;
}
.detail-title {
  display: flex;
  color: #666;
}
.titles-item {
  flex: 1;
}
.titleActive { 
  color: var(--color-high-text);
}
</style>