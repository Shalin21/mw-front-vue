<template>
  <body v-bind:class="[isDarkTheme ? 'skin-default-dark fixed-layout' : 'skin-default fixed-layout']" style="min-height: 930px;">
    <div id="main-wrapper">
    <myHeader></myHeader>
    <sideMenu></sideMenu>
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper" >
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h4 class="text-themecolor">Settings</h4>
                </div>
                <div class="col-md-7 align-self-center text-right">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/Dashboard"> Dashboard</router-link></li>
                            <li class="breadcrumb-item active">Settings</li>
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
            <!-- Row -->
            <div class="row">
                <!-- Column -->
                <div class="col-lg-4 col-xlg-3 col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <!-- <center class="m-t-30"> <img src="../assets/images/users/5.jpg" class="img-circle" width="150" /> -->
                            <center class="m-t-30" width="150" height="150">
                              <div class="div-name-parent-s">
                                <div class="div-name-s">
                                  <span>
                                  {{getUsername}}
                                </span>
                                </div>
                              </div>
                                <h4 class="card-title m-t-10" >{{user.name}}</h4>
                                <h6 class="card-subtitle" >{{user.email}}</h6>
                            </center>
                        </div>
                        <div>
                            <hr> </div>
                        <div class="card-body">
                            <!--PUT HERE LANGUAGE SWITCHER-->
                            <div class="form-group">
                                <label class="col-sm-12">Language</label>
                                <div class="col-sm-12">
                                    <select class="form-control form-control-line">
                                        <option>Eng</option>
                                        <option>Rus</option>

                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">Dark mode</label>
                                <div class="col-sm-12">
                                  <toggle-button :value="isDarkTheme" :labels="true" @change="changeTheme()"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Column -->
                <!-- Column -->
                <div class="col-lg-8 col-xlg-9 col-md-7">
                    <div class="card">
                                <div class="card-body">
                                    <form class="form-horizontal form-material">
                                        <div class="form-group">
                                            <label class="col-md-12">Full Name</label>
                                            <div class="col-md-12">
                                                <input type="text" :placeholder="user.name" class="form-control form-control-line">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="example-email" class="col-md-12">Email</label>
                                            <div class="col-md-12">
                                                <input type="email"  :placeholder="user.email" class="form-control form-control-line" name="example-email" id="example-email">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">Old password</label>
                                            <div class="col-md-12">
                                                <input type="password" placeholder="******" class="form-control form-control-line">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">New password</label>
                                            <div class="col-md-12">
                                                <input type="password" placeholder="******" class="form-control form-control-line">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">Confirm</label>
                                            <div class="col-md-12">
                                                <input type="password" placeholder="******" class="form-control form-control-line">
                                            </div>
                                        </div>

                                        <div class="form-group" style="padding-top: 15px;">
                                            <div class="col-sm-12">
                                                <button class="btn btn-success">Update Profile</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                    </div>
                </div>
                <!-- Column -->
            </div>
            <!-- Row -->


            <!-- ============================================================== -->
            <!-- End PAge Content -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
    </div>
  </div>
</body>
</template>

<script>
import myHeader from '../Components/header.vue';
import sideMenu from '../Components/menu.vue';
import ThemeService from '../common/theme.service'
import { CHANGE_THEME } from '../store/actions.type'
import axios from 'axios';
export default {
  name: 'settings',
  components: { myHeader, sideMenu },
  data () {
    return {
      user:{
        name:  localStorage.getItem('username'),
        email: localStorage.getItem('email'),
      }
    }
  },
  methods:{
      changeTheme(){
        this.$store.dispatch(CHANGE_THEME)
        if(this.isDarkTheme){
          $("#html").css("background", "rgb(20,20,20)");
        }
        else{
          $("#html").removeAttr("style");
        }

        location.reload();
        // console.log(ThemeService.getTheme());
      },
      // геттер вычисляемого значения

  },
  computed:{
    isDarkTheme(){
      if(ThemeService.getTheme() == 'true'){
        return true
      }
      else{return false}
    },
    getUsername: function () {
      // `this` указывает на экземпляр vm
      if (/\s/.test(this.user.name)) {
      return this.user.name[0]+this.user.name[this.user.name.indexOf(' ')+1]
      }
      return this.user.name[0]+this.user.name[1]

    },
  },
}

</script>




<style lang="css">
@import '../dist/css/style.css';
@import '../dist/css/pages/footable-page.css';
@import '../dist/css/myCustom.css';

.div-name-parent-s{
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
}
.div-name-s{
  color:white;
  font-size: 60px;
  font-weight: 600;
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align:bottom;
  border-radius: 50%; /* may require vendor prefixes */
  background: #03a9f3;
}
</style>
