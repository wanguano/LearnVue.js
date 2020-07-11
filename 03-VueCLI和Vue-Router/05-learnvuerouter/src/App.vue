<template>
  <div id="app">
    <h2>APP组件</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <!-- 参数的传递 -->
    <!-- <router-link :to="{path: '/profile',query: {
      name: 'wuyifan',
      age: 18,
      height: 1.88
    }}">档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- 当我们想排除某些组件不被进行缓存时, 使用 exclude="" -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

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
    },
    userClick() {
      this.$router.push('/user/yifan')
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: '亦凡',
          age: 18,
          height: 1
        }
      })
    }

  },
  computed: {
    userId() {
      return 'zhangsan'
    }
  },
  // created() 钩子函数: 当前组件被创建时,才会调用
  created() {
    // 但是有100个页面需要修改标题呢?
    // document.title = '首页'
    // console.log('create');
  }
}
</script>

<style>
.gap,
a {
  margin: 20px;
}
.active {
  color: red;
}
</style>
