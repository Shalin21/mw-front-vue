<template>

  <!-- <body v-if="dark_theme" class=" fixed-layout"> -->
  <body v-bind:class="[isDarkTheme ? 'skin-default-dark fixed-layout' : 'skin-default fixed-layout']">
    <div id="main-wrapper">
    <myHeader></myHeader>
    <sideMenu></sideMenu>
      <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== -->
      <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
          <!-- ============================================================== -->
          <!-- Bread crumb and right sidebar toggle -->
          <!-- ============================================================== -->
          <div class="row page-titles">
            <div class="col-md-5 align-self-center">
              <h4 class="text-themecolor">Dashboard</h4>
            </div>
            <div class="col-md-7 align-self-center text-right">
              <div class="d-flex justify-content-end align-items-center">
                <ol class="breadcrumb">
                  <!-- <li class="breadcrumb-item"><a href="/Dashboard">Home</a></li> -->
                  <li class="breadcrumb-item active">Dashboard</li>
                </ol>
                <!--<button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New</button>-->
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- End Bread crumb and right sidebar toggle -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- Start Page Content -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Product line Chart</h4>
                  <ul class="list-inline text-right">
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-inverse"></i>iPhone</h5>
                    </li>
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-info"></i>iPad</h5>
                    </li>
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-success"></i>iPod</h5>
                    </li>
                  </ul>
                  <div id="morris-area-chart"></div>
                </div>
              </div>
            </div>
            <!-- column -->
            <!-- column -->
            <!-- <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Donute Chart</h4>
                  <div id="morris-donut-chart"></div>
                </div>
              </div>
            </div> -->
            <!-- column -->
            <!-- column -->
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Real Chart</h4>
                  <div class="demo-container" style="height:400px;">
                    <!-- <div id="placeholder" class="flot-chart-content"></div> -->
                    <canvas id="myChart" ref="canvas"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <!-- column -->
            <!-- column -->
            <!-- <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Real Chart</h4>
                  <div class="demo-container" style="height:400px;">
                    <div id="placeholder1" class="flot-chart-content"></div>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- column -->
            <!-- column -->
            <!-- column -->
            <!-- <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Extra Area Chart</h4>
                  <ul class="list-inline text-center m-t-40">
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-info"></i>Site A</h5>
                    </li>
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-inverse"></i>Site B</h5>
                    </li>
                    <li>
                      <h5><i class="fa fa-circle m-r-5 text-success"></i>Site C</h5>
                    </li>
                  </ul>
                  <div id="extra-area-chart"></div>
                </div>
              </div>
            </div> -->
            <!-- column -->
            <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Data Table</h4>
                <h6 class="card-subtitle">Data table example</h6>
                <div class="table-responsive m-t-40">
                  <table id="myTable" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Farm 1</td>
                      <td style="color: green">Online</td>
                    </tr>
                    <tr>
                      <td>Farm 2</td>
                      <td style="color: green">Online</td>
                    </tr>
                    <tr>
                      <td>Farm 3</td>
                      <td style="color: red">Offline</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
              <!-- Column -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Error Log</h4>
                  <div id="staticgridissues"></div>
                </div>
              </div>
              <!-- Column -->
            </div>
            <!-- column -->

          </div>


          <!-- ============================================================== -->
          <!-- End PAge Content -->
          <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
      </div>
      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
    </div>
    </body>
</template>

<script>
import { mapState } from 'vuex'
import myHeader from '../Components/header.vue';
import sideMenu from '../Components/menu.vue';
import { CHANGE_THEME } from '../store/actions.type'
import ThemeService from '../common/theme.service'
import axios from 'axios';

export default {
  name: 'home',
  components: { myHeader, sideMenu },
  data () {
    return {
      user:{
        name: "Habib Nurzaliev",
        email: "habib@nur.cz"
      },
    farms: JSON.parse(localStorage.getItem('farms')),
    }
  },
  computed:{
    isDarkTheme(){
      if(ThemeService.getTheme() == 'true'){
        return true
      }
      else{return false}
    }
  },
  mounted: function () {
    var ctx = this.$refs["canvas"]
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });

  }
}

</script>




<style lang="css">
@import '../dist/css/style.min.css';
@import '../assets/node_modules/morrisjs/morris.css';
@import '../dist/css/pages/float-chart.css';
@import '../assets/node_modules/jsgrid/jsgrid.min.css';
@import '../assets/node_modules/jsgrid/jsgrid-theme.min.css';

</style>
