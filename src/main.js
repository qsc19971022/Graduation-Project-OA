import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "@/router";
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
