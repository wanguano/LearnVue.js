// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载方式
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const News = () => import('../components/News.vue')
const Message = () => import('../components/Message.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.映射配置,路径对应的组件
const routes = [
{
  // 配置默认路径
  path: '/',
  // 重定向到/home
  redirect: '/home'
},
{
  path: '/home', // 根据不同的路劲
  component: Home, // 渲染不同的组件
  // 1.设置嵌套路由
  // 2.设置默认路径
  children: [
  {
    path: '',
    redirect: 'news'
  },
  {
    path: 'news',
    component: News
  },
  {
    path: 'message',
    component: Message
  }]
},
{
  path: '/about',
  component: About
},
{
  path: '/user/:userId',
  component: User
},
{
  path: '/profile',
  component: Profile
}
]
// 3.创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 4.将router对象传入到Vue实例
export default router