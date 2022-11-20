import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import ShowInformation from '../views/ShowInformation.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/show/:id',
            name: 'ShowInformation',
            component: ShowInformation
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/'
        }
    ],
    mode: 'history',
    base: process.env.BASE_URL
})
