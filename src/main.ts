// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import InfiniteScroll from 'vue-infinite-scroll';

import 'element-ui/lib/theme-default/index.css'
import './assets/css/style.scss';
//import 'font-awesome/css/font-awesome.css';

import locale from 'element-ui/lib/locale/lang/es'

Vue.use(ElementUI, { locale })
Vue.use(InfiniteScroll)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
