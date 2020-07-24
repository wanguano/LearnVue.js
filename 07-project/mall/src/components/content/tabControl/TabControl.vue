<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="item" class="control-item" 
      :class="{active: currentIndex===index}"
      @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "tab-control",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0  
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('clickItem', index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}
.control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>