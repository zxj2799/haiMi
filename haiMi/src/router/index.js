import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Fenlei from '@/views/Fenlei'
import Search from '@/views/Search'
import Shop from '@/views/Shop'
import Me from '@/views/Me'
import Login from '@/views/Login'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/search/:searchVal',
      name: 'Search',
      component: Search
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: { requiresAuth: true }
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      query: {
        loginCallBack: ''
      },
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login',
        query: {loginCallBack: to.path}
      })
    }
  } else {
    next()
  }
})
export default router
