import Vue from 'vue'
import App from './App.vue'
// import {ElementUi} from 'element-ui'
import {Button, Message} from 'element-ui'

Vue.config.productionTip = false

// 1.安装ElementUi
// Vue.use(ElementUi)

// 2.引用样式
// import 'element-ui/lib/theme-chalk/index.css'

// 3.按需加载
Vue.component(Button.name, Button)
Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
}).$mount('#app')