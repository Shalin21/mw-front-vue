import Vue from 'vue'
import Register from './App.vue'
Vue.use(require('vue-script2'))
//required('../assets/node_modules/jquery/jquery-3.2.1.min')
// required('../assets/node_modules/popper/popper.min')
// required('../assets/node_modules/bootstrap/dist/js/bootstrap.min')
// required('./dist/css/pages/login-register-lock.css')
// required('./dist/css/style.min.css')

new Vue({
  el: '#root',
  render: h => h(Register)
})
