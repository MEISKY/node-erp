import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register'
import Nofind from './views/404'
import Login from './views/Login'
import Home from './views/Home'
import InfoShow from './views/InfoShow'
import FoundList from './views/FoundList'

import List01 from '@/views/statement/list10.vue'
import List02 from '@/views/statement/list11.vue'
import List03 from '@/views/statement/list12.vue'
import List04 from '@/views/statement/list13.vue'
import List05 from '@/views/statement/list14.vue'
// import List06 from './views/demo/table06/List.vue'
// import List07 from './views/demo/table07/List.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Nofind },
    { path: '/home', redirect: '/home' },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/index',
      component: Index,
      name: 'index',
      children: [
        {  path: '/orderlist',  name: 'orderlist',  component: () => import('@/views/order/list')},
        {  path: '/orderdetail',  name: 'orderdetail',  component: () => import('@/views/order/detail')},
        {  path: '/ordercreate',  name: 'ordercreate',  component: () => import('@/views/order/create')},

      ]},
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
        { path: '/foundlist', name: 'foundlist', component: FoundList },

        { path: '/list010', name: 'demolist01', component: List01 },
        { path: '/list011', name: 'demolist02', component: List02 },
        { path: '/list012', name: 'demolist03', component: List03 },
        { path: '/list013', name: 'demolist04', component: List04 },
        { path: '/list014', name: 'demolist05', component: List05 },

      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router;