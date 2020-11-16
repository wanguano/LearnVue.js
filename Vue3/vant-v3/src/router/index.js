import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

// routes 路由映射关系
const routes = [
  {
    path: '/',
    component: Home
  }
]

// createRouter 创建路由实例
const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history: createWebHashHistory(),
  routes
})

// 导出路由,在 main.js 使用
export default router