<template>
  <div id="app">
    <h2>APP组件</h2>
    <!-- tag: 指定<router-link>组件渲染成什么元素 -->
    <!-- replace: 没有history记录,前后键没有用 -->
    <!-- active-class: 修改匹配成功默认添加的class类名 -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <span class="gap"></span>
    <router-link to="/about" tag="button" replace active-class="active">关于页面</router-link>

    <router-link to="/home" tag="button" replace >首页</router-link>
    <span class="gap"></span>
    <router-link to="/about" tag="button" replace >关于页面</router-link>
    <router-view></router-view> -->

    <button @click="home">主页</button>
    <button @click="about">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
// 1.在home和about组件中写入内容
// 2.配置路由的映射关系: path 和 compoent
// 3.在APP中使用全局组件 router-link, to 属性 = 

export default {
  name: 'app',
  components: {
  },
  methods: {
    home() {
      // console.log('home');  
      // 没有使用<router-link>全局组件,来跳转URL,如何实现
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    about() {
      // console.log('about');
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  },
}
</script>

<style>
.gap {
  margin: 20px;
}
.active {
  color: red;
}
</style>
