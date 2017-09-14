// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.component('icon', Icon)

import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
