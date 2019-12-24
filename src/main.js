import 'babel-polyfill'

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

import './assets/css/common.scss'  //加载全局css
import 'lib-flexible/flexible.js'  //移动端适配

import "./assets/iconfont/iconfont.css"  //字体图标

Vue.use(Vuex)
Vue.use(Vant)

var store = new Vuex.Store({
	state: {
    bmTab: '首页',
    payLogin: false,
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
