import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/homepage.vue'
import About from '../views/about.vue'
import Help from '../views/help.vue'
import Detail from '../views/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
      alias: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: '/poster/:poster_id',
      name: 'detail',
      component: Detail,
    }
  ]
})