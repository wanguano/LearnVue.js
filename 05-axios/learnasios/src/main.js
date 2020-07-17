import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1.axios基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(
//   value => {
//     console.log(value) 
//   }
// )

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 拼接查询字符串
//   params: {
//     type: 'pop',
//     page: '1'
//   }
// }).then(
//   value => {console.log(value)}
// )


// 2.axios发送并发请求
// axios.all([
//     axios({
//       url: '/home/multidata'
//     }),
//     axios({
//       url: '/home/data',
//       params: { type: 'pop', page: '1' }
//     })
//   ])
//   .then( value => {
//    console.log(value)
//    console.log(value[0])
//    console.log(value[1])
//})

// 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
// axios.defaults.timeout = 5000
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: { type: 'pop', page: '1' }
//   })
// ])
// .then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

//4.创建对应的axios的实例--->当每个模块的网络配置都不一致时,最好使用axios实例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/n3',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(value => {
//   console.log(value) 
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res) 
// })


// 5.封装request模块
import { request } from "./network/request";
// request({
//   url: '/home/multidata'
// },value => {console.log(value)},
// (err) => {console.log(err)})

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success(value) {
//     console.log(value)
//   },
//   shibai(err) {
//     console.log(err)
//   }
// })

request({
  url: '/home/multidata'
}).then(
  value => {
    console.log(value)
  }
).catch(
  err => {
    console.log(err)
  }
)