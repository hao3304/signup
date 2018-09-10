// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Main from './Main.vue'
import 'lib-flexible'
import MuseUI from 'muse-ui'
import vueg from 'vueg'
import 'muse-ui/dist/muse-ui.css'
import 'vueg/css/transition-min.css'
import VeeValidate from 'vee-validate';
import dict from '@/components/dict'
import  { ToastPlugin, LoadingPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
import store from '@/store'
import Storage from 'vue-ls';

const options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};

Vue.filter('image', (val) => {
  return 'http://www.lvsoftware.cn:85/school/images/' + val
})


Vue.use(Storage, options)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(MuseUI)
Vue.use(VueRouter)
Vue.use(VeeValidate)

import router from '@/router'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(vueg, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(Main),
  created() {
    this.$validator.localize('zh', dict);
  }
}).$mount('#app-box')
