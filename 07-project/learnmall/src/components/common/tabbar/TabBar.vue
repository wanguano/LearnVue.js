<template>
  <div class="tab-bar">
    <slot></slot> 
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
  background-color: #f6f6f6;
  z-index: 9;
}
</style>