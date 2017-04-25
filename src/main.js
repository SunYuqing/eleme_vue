// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//  el: '#app',
//  template: '<App/>',
//  components: { App }
// });

// 1.使用import引入路由组件

// 2.定义路由。每个路由应该映射一个路由。
const routes = [
  {
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    component: goods
  }, {
    path: '/ratings',
    component: ratings
  }, {
    path: '/seller',
    component: seller
  }
];

// 3.实例化router，传入配置
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// 4.创建和挂载根实例。通过router配置参数注入路由，让整个应用都有路由功能
new Vue({
  el: '#app',
  router,
  render: h => h(App) // h作为createElement函数的别名是Vue生态系统的一个惯例。
});

