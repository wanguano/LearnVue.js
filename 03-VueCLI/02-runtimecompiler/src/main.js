import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }
  render (createElement) {
    // 1.普通用法: createElement('tag',{tagName},['content'])
    // return createElement('h2', {class: 'box'}, ['hello World',createElement('button', ['按钮'])])

    // 2.传入组件对象
    return createElement(App)
  }

})
console.log(vm)
// runtime-compiler
// template -> ast -> render -> vdom -> UI

// runtime-only
// render -> vdom -> UI
