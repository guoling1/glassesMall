// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入vuex
import { Swiper, SwiperItem } from 'vux'

Vue.component('swiper', Swiper);
Vue.component('swiperItem', SwiperItem);

// 设置rem
import remConfig from './config/remConfig'
remConfig();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
