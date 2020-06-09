import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
new Vue({
  // 渲染APP组件
  render: h => h(App),
  router
}).$mount('#app')

// console.log(router);
