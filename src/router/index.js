import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
    meta:{
      requieresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "create" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next)=>{
  const requieresAuth = to.matched.some(view => view.meta.requieresAuth);
  requieresAuth && !(await store.dispatch('userMod/setUserState')) ?
   next({name: 'Login'}) :
   next();
})

export default router
