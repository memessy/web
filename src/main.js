import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueClipboard from 'vue-clipboard2';
import store from "./store";
import '@babel/polyfill'
import "./plugins/baseURL";
import router from './router'

Vue.config.productionTip = false
Vue.use(VueClipboard);
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
