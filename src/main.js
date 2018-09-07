// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Main from './Main.vue'
import 'lib-flexible'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

Vue.use(MuseUI)
Vue.use(VueRouter)
import router from '@/router'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(vueg, router)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(Main)
}).$mount('#app-box')
