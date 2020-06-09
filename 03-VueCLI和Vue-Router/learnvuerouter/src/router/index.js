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
  redirect: '/home',
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
  }],
  meta: {
    title: '首页'
  }
},
{
  path: '/about',
  component: About
},
{
  path: '/user/:userId',
  component: User,
  meta: {
    title: '用户'
  }
},
{
  path: '/profile',
  component: Profile,
  meta: {
    title: '档案'
  }
}]
// 3.创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

// 导航守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // from: 将要进行跳转的当前$route对象, 跳转前的一些操作
  // to: 跳转后的当前$route对象, 跳转后的一些操作
  // document.title = to.meta.title;
  // document.title = to.matched[0].meta.title;
  // console.log(to);
  next()
})

// router.afterEach((to, from) => {
// console.log(to.path);
// })

// 4.将router对象传入到Vue实例
export default router