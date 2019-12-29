import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'search', component: () => import('@/pages/search/search.vue') }
]

const router = new VueRouter({
  routes
})

export default router
