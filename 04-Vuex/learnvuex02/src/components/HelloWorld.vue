<template>
  <div>
    <h2>HelloVuex组件</h2>
    <h3>子组件当前计数: {{$store.state.count}}</h3>
    <h3>{{$store.getters.countPawer}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // count: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
