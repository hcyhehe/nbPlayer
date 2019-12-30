import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    redirect: '/search',
    component: () => import('@/pages/index'),
    children: [
      { path: '/search', name: 'search', component: () => import('@/pages/search/search') },
      { path: '/rank', name: 'rank', component: () => import('@/pages/rank/rank') }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
