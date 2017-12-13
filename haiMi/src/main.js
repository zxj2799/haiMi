// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ContentBox from '@/components/ContentBox'
import ListPage from '@/components/ListPage'
import './mock'
import loading from './plugins/loading'

Vue.component('ContentBox', ContentBox)
Vue.component('ListPage', ListPage)

Vue.config.productionTip = false

for (let item in directives) {
  Vue.directive(item, directives[item])
}
Vue.use(VueAwesomeSwiper)
Vue.use(loading)
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default vm
