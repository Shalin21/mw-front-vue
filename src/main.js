import Vue from 'vue'
import App from './App.vue'
import * as $ from 'jquery';
import 'eve'
import axios from './backend/vue-axios/axios'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import ApiService from './common/api.call'
import VeeValidate from 'vee-validate';
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

//Chartjs//
import 'chart.js/dist/Chart.bundle.min'

//FLOT JS//
import 'flot/excanvas'
import 'flot/jquery.flot'
import 'flot/jquery.flot.pie'
//
import 'flot/jquery.flot.time'
import 'flot/jquery.flot.stack'
import 'flot/jquery.flot.crosshair'
 // import './dist/js/pages/flot-data'

import './dist/morris/eve'
import './dist/morris/raphael.min'
import './dist/morris/morris'
// import './dist/js/pages/morris-data'



 // import './assets/node_modules/Chart.js/Chart.min'
 import './assets/node_modules/sticky-kit-master/dist/sticky-kit.min'
 import'./assets/node_modules/sparkline/jquery.sparkline.min'
 import './assets/node_modules/jquery-sparkline/jquery.sparkline.min'
 import './dist/js/custom.min'
 // import './dist/js/perfect-scrollbar.jquery.min'
 // import './assets/node_modules/moment/min/moment.min'
 // import './assets/node_modules/footable-bootstrap.latest/js/footable.min'
 // import './farms/dist/js/pages/footable-init'

 import './dist/js/waves'

 // import './settings/dist/js/window'

  import './assets/node_modules/sparkline/jquery.charts-sparkline'

 // import './assets/node_modules/footable-bootstrap.latest/js/footable'
  // import './assets/node_modules/raphael/raphael-min'
  // import './assets/node_modules/morrisjs/morris'
  // import './dist/js/pages/morris-data'

 // import './assets/node_modules/flot/excanvas'
 // import './assets/node_modules/flot/jquery.flot'
 // import './assets/node_modules/flot/jquery.flot.pie'
 // //
 // import './assets/node_modules/flot/jquery.flot.time'
 // import './assets/node_modules/flot/jquery.flot.stack'
 // import './assets/node_modules/flot/jquery.flot.crosshair'
 // import './dist/js/pages/flot-data'
 import './assets/node_modules/flot.tooltip/js/jquery.flot.tooltip.min'
 // import './dist/js/pages/flot-data'
 import './assets/node_modules/jsgrid/db1'
 import './assets/node_modules/jsgrid/db'
 import './assets/node_modules/jsgrid/jsgrid.min'
 import './dist/js/pages/jsgrid-init'
 // import './dist/js/sidebarmenu'
 // import './dist/noUiSlider/nouislider.min.js'
 // import './assets/node_modules/ion-rangeslider/js/ion-rangeSlider/ion.rangeSlider'
 // import './assets/node_modules/ion-rangeslider/js/ion-rangeSlider/ion.rangeSlider-init'

Vue.use(VueSweetalert2);
Vue.use(VeeValidate);
ApiService.init();
new Vue({
  el: '#root',
  router,
  store,
  axios,
})
