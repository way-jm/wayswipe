import Vue from 'vue'
import App from './App'
import '@/assets/reset.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
