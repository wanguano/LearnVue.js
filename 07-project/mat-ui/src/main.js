import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 1.注册全局组件
// 2.通过props传递type属性来动态控制button的样式
import MtButton from './components/Button.vue'
import MtDialog from './components/Dialog.vue'
import MtInput from './components/Input.vue'
import './assets/fonts/font.scss'

// 全局组件注册
Vue.component(MtButton.name, MtButton)
Vue.component(MtDialog.name, MtDialog)
Vue.component(MtInput.name, MtInput)

new Vue({
  render: h => h(App),
}).$mount('#app')