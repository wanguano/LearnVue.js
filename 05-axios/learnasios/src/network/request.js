import axios from 'axios'


export function request(config) {
  // 1.创建axios的实例,基本配置
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config) 
    // 1.比如config中一些信息不符合服务器的要求
    // 2.比如每次发送请求时,都希望在页面中显示一个请求进度条
    // 3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
    return config// 放行
  }, err => {
    console.log(err) 
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res) 
    return res.data
  },err => {
    console.log(err) 
  })

  // 3.发送网络请求
  return instance(config)
}


// export function request(config) {
//   // 基本配置
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/n3',
//     timeout: 5000
//   })

//   instance(config.baseConfig).then(
//     value => {
//       config.success(value)
//     }
//   ).catch(err => {
//     config.shibai(err) 
//   })
// }


// export function request(config, success, shibai) {
//   // 基本配置
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/n3',
//     timeout: 5000
//   })

//   instance(config).then(
//     value => {
//       success(value)
//     }
//   ).catch(err => {
//     shibai(err) 
//   })
// }