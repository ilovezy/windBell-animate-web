import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
window.CurrentEnv = process.env.NODE_ENV
window.isDev = window.CurrentEnv == 'development'

Vue.use(Element, {
  size: 'large' // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
