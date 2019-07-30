// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 将vueRouter挂载到Vue上
Vue.use(VueRouter)

// 引入登录页组件
import Login from '@/views/login'


// 配置路由规则

const router = new VueRouter({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }
]
})

// 导出路由规则
export default router
