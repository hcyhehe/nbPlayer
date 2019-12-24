import Vue from 'vue'
import Router from 'vue-router'
import search from '@/pages/search/search'


Vue.use(Router)


const routes = [
  { path: '/',component: search }
]


const router = new Router({
  mode: 'hash',
  routes
})


export default router
