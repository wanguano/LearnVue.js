<template>
  <div id="app">
    <h2>APP组件</h2> 
    <!-- 动态路由: 当我们进入用户页面时, 需要将当前的用户名加入到URL当中
      1.在路由配置规则中: /:userId
      2.将当天登录的用户名添加到Vue实例当中动态的显示
      3.在user组件中获取当前登录的用户名 $route.params -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
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
  computed: {
    userId() {
      return 'zhangsan'
    }
  },
}
</script>

<style>
.gap,a {
  margin: 20px;
}
.active {
  color: red;
}
</style>
