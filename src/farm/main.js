import Vue from 'vue'
import Farms from './Farms.vue'
import VueMaterial from 'vue-material'


// require('./dist/js/perfect-scrollbar.jquery.min.js');
// import '../assets/node_modules/moment/min/moment.min'
// import '../assets/node_modules/footable-bootstrap.latest/js/footable.min'
// import './dist/js/pages/footable-init'

//required('../assets/node_modules/jquery/jquery-3.2.1.min')
// required('../assets/node_modules/popper/popper.min')
// required('../assets/node_modules/bootstrap/dist/js/bootstrap.min')
// required('./dist/css/pages/login-register-lock.css')
// required('./dist/css/style.min.css')

new Vue({
  el: '#root',
  render: h => h(Farms)
})
