<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/mainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
/*
    1.在APP.vue中使用了两个组件tab-bar和tab-bar-item
    2.在APP.vue中使用tab-bar组件内填充了默认的插槽
    3.tab-bar-item有三个具名插槽app.vue
      分别添加对应图标和高亮图标和文字
      并在组件中判断了是否高亮,高亮显示对图标和应用类高亮文字
    4.在app.vue中填充了三个具名插槽
    5.配置路由,并创建对应组件
      通过props向子组件传递path,实现路由跳转
    6.点击组件显示高亮,修改isActive
      当组件点击获取当前活跃的路由对象的path然后在组件内,进行判断
      计算属性: 父组件传递的路径和当前活跃路径是否匹配
    7.实现父组件传递高亮时文字的颜色
      通过绑定属性: 判断图标是否高亮,动态绑定style,高亮文字跟随
      并且父组件可以传递高亮颜色文字
    8.再将APP.vue中使用的组件进行抽离到一个单独的vue文件中
      将抽离的组件中路径修改
      VueCLI3配置路径别名
 */
</script>

<style>
@import url('./assets/css/base.css');
</style>