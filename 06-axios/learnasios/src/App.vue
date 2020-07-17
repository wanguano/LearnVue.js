<template>
  <div id="app">
    <h2>APP组件</h2>
    <div>{{result}}</div>
    <h2>----------------------------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
// import axios from 'axios'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: ''
    }
  },
  created() {
    // axios({
    //   url:'http://123.207.32.32:8000/home/multidata'
    // }).then(
    //   res => {this.result = res}
    // )
  },
}
</script>

<style>
</style>
