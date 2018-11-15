// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios=axios
 
import 'mint-ui/lib/style.css'

import MintUI from "mint-ui";
Vue.use(MintUI);

Vue.config.productionTip = false

import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.http.options.root="http://127.0.0.1:3000/"


/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
