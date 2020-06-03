import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n'
import messages from './language/index'
import axios from './services/http.service'
import $ from 'jquery'
import {
  Carousel,
  CarouselItem,
} from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);

Vue.use(iView);
Vue.use(VueI18n)

function lang() {
  let lan = window.localStorage.getItem('language')
  if (lan) return lan
  else return 'en'
}

const language = lang()

window.lang = lang()
window.$ = $

const i18n = new VueI18n({
  locale: language,
  messages,
})

//将axios挂在到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  axios,
  render: h => h(App)
})
