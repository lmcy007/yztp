// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  loading: '/static/img/loading.gif'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app },
  store: store
  //  render: (h) => h(App)
}).$mount('#app')

