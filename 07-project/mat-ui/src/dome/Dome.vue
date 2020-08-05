<template>
  <div>
    <mt-button @click="changeMoney">按钮</mt-button>
    {{money}}
  </div>
</template>

<script>
export default {
 props: {
   money: {
     type: Number,
     default: 100
   }
 },
 methods: {
   changeMoney() {
    this.$emit('update:money',200)
   }
 },
}
</script>

<style>

</style>