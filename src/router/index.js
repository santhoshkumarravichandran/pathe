import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Single from '../views/SingleStory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/story/:id',
      name: 'single',
      component: Single
    }
  ],
  mode: 'history',
  base: process.env.BASE_URL
})
