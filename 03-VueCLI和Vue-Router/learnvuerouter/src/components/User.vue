<template>
  <div>
     <h2>我是用户界面</h2> 
     <p>我是用户相关的信息,嘿嘿嘿</p>
     <p>当前登陆的帅哥是: <strong>{{$route.params.userId}}</strong></p>
     <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // $route: 当前活跃的路由组件对象
      // params: 获取路径参数对象
      console.log(this.$route);
      return this.$route.params.userId
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  mounted() {
    // document.title = '用户页面'
    // console.log('user');
  },
}
</script>

<style scoped>

</style>