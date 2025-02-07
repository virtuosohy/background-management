import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from './config.js'
import store from '../store/index.js'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

RoutesConfig.forEach(item => {
  router.addRoute('mainbox', item)
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      if(!store.state.isGetterRouter){
        ConfigRouter()
        next({
          path: to.fullPath
        })
      }else{
        next()
      }
    }
  }
})

const ConfigRouter = () =>{
  RoutesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  })

  // 标记已经获取过路由
  store.commit('changeGetterRouter', true)
}
export default router
