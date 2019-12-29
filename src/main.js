import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

import './assets/css/common.scss'  //加载全局css
import 'lib-flexible/flexible.js'  //移动端适配

import "./assets/iconfont/iconfont.css"  //字体图标

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
