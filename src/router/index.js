// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

//引入home组件
import Home from '@/views/home'

// 将vueRouter挂载到Vue上
Vue.use(VueRouter)

// 引入登录页组件
import Login from '@/views/login'

// 引入404组件
import NotFound from '@/views/NotFound'

//引入实验请求拦截器组件
import Request from '@/views/request'


// 配置路由规则

const router = new VueRouter({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/request',
      name: 'request',
      component: Request
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 导航守卫，前置守卫
router.beforeEach((to, from, next) => {
  const user = window.sessionStorage.getItem('hm73')
  if (to.path !== '/login' && !user) {
    return next('/login')
  }
  next()
})

// 导出路由规则
export default router
