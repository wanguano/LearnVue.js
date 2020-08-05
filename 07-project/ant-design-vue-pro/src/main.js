import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 1.下载引入ant-design和moment
// 2.在main.vue使用a-button
// 3.引入css样式,替换成less(解决报错)
// 4.按需加载样式: babel
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.less'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/lib/button/style'

Vue.config.productionTip = false;

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");