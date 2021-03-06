// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import VueLazyload from 'vue-lazyload'




Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/loading.gif',
  loading: '../static/loading.gif',
  attempt: 1
})

Vue.use(YDUI);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
