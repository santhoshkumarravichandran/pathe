// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import pathe from './Pathe'
import router from './router'

import Vuesax from 'vuesax' // import dependency
import 'vuesax/dist/vuesax.css' // import css style

import VueHorizontal from 'vue-horizontal'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueHorizontal)

Vue.use(Vuesax, {
    colors: {
        primary: '#5b3cc4',
        success: 'rgb(23, 201, 100)',
        danger: 'rgb(242, 19, 93)',
        warning: 'rgb(255, 130, 0)',
        dark: 'rgb(36, 33, 69)'
    }
})

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
    el: '#pathe',
    router,
    components: { pathe },
    template: '<pathe/>'
})
