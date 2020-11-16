import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { Button } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

// 创建实例
const app = createApp(App)


app.use(router)
app.use(Button)// 注册组件

app.mount('#app')

// Vue2.0
// new Vue({
//   render: h => h(App)
// }).$mount('#app')