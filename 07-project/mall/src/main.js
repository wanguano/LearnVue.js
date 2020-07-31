import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import Toast from 'components/common/toast'

Vue.config.productionTip = false
// 添加事件总线对象
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
// 解决移动端300ms延迟
Fastclick.attach(document.body)
// 使用懒加载的插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
