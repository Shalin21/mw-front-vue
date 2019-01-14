<template>

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
                        <h4 class="text-themecolor">Farms</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Farms</li>
                            </ol>
                            <!--<button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New</button>-->
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Farms</h4>
                                <table class="table table-bordered table-hover demo-foo-row-toggler2 toggle-circle" data-page-size="7">
                                    <thead>
                                    <tr>
                                        <th data-sort-initial="true" data-toggle="true">Name</th>
                                        <th>Online</th>
                                        <th data-hide="phone, tablet">Coin</th>
                                        <th data-hide="phone, tablet">Pool</th>
                                        <th data-hide="phone, tablet">H/r</th>
                                        <th data-hide="phone, tablet">Eq/d</th>
                                        <th data-sort-ignore="true" class="min-width">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="farm in all_farms">
                                        <td >{{farm.name}}</td>
                                        <td>
                                          <span v-if="farm.name != 'Farm 3'" class="label label-table label-success">Online</span>
                                          <span v-else class="label label-table label-danger">Offline</span>
                                        </td>
                                        <td>Eth</td>
                                        <td>Nano</td>
                                        <td>250Mhz</td>
                                        <td>20$</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline " data-toggle="tooltip" data-original-title="Edit">Edit</button>
                                        </td>
                                    </tr>
                                  </tbody>


                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
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
import myHeader from '../Components/header.vue';
import sideMenu from '../Components/menu.vue';
import ThemeService from '../common/theme.service'
export default {
  name: 'farms',
  components: { myHeader, sideMenu },
  data () {
    return {
      user:{
        name: "Habib Nurzaliev",
        email: "habib@nur.cz"
      },
      all_farms:JSON.parse(localStorage.getItem('farms'))
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
}
</script>




<style lang="css">
@import '../dist/css/style.css';
@import '../dist/css/pages/footable-page.css';
</style>
