<template>
  <div>
    <h2>我是关于页面,呵呵呵</h2>
    <div>我是关于页,呵呵呵</div>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    // document.title = '关于页'
    // console.log('About');
    console.log('created About')
  },
  destroyed() {
    console.log('destroyed About')
  }
}
</script>

<style scoped>
</style>