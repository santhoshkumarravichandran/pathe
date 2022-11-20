// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import pathe from './Pathe'
import router from './router'

import VueHorizontal from 'vue-horizontal'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueHorizontal)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
    el: '#pathe',
    router,
    components: { pathe },
    template: '<pathe/>'
})
