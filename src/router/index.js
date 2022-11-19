import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MovieInformation from '../views/MovieInformation.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/movie/:id',
      name: 'MovieInformation',
      component: MovieInformation
    }
  ],
  mode: 'history',
  base: process.env.BASE_URL
})
