import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';
import VueAxios from 'vue-axios';
import seller from 'components/seller/seller.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import 'common/css/index.less';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter, axios, VueAxios);

const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/seller', component: seller},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app');

