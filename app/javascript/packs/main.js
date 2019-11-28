/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExchangeAlt)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('app', App)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#root',
  })
})
