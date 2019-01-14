<template>

    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- User Profile-->
            <div class="user-profile">
                <div class="user-pro-body">
                    <!-- <div><img src="../assets/images/users/2.jpg" alt="user-img" class="img-circle"></div> -->
                    <div class="div-name-parent">
                      <div class="div-name">
                        <span>
                        {{getUsername}}
                      </span>
                      </div>
                    </div>

                    <div class="dropdown">
                        <a href="javascript:void(0)" class="dropdown-toggle u-dropdown link hide-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span></a>
                        <div class="dropdown-menu animated flipInY">
                            <!-- text-->
                            <router-link to="/Settings" class="dropdown-item"><i class="ti-user"></i> My Profile</router-link>
                            <!-- text-->
                            <a href="javascript:void(0)" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                            <!-- text-->
                            <a href="javascript:void(0)" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                            <!-- text-->
                            <div class="dropdown-divider"></div>
                            <!-- text-->
                            <!-- <router-link to="/Settings" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a> -->
                            <!-- text-->
                            <div class="dropdown-divider"></div>
                            <!-- text-->
                            <a href="login.html" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                            <!-- text-->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li>
                        <div class="hide-menu text-center">
                            <h4>{{user.name}}</h4>
                            <div id="eco-spark"></div>
                            <small>TOTAL EARNINGS - JUNE 2018</small>
                            <h4>$2,478.00</h4>
                        </div>
                    </li>
                    <li class="nav-small-cap"><router-link to="/Dashboard" >--- Dashboard</router-link></li>
                    <li> <a class="has-arrow waves-effect waves-dark" aria-expanded="false"><i class="icon-speedometer text-info" style="font-size:16px;"></i><span class="hide-menu">Farms  <span class="badge badge-pill badge-cyan ml-auto" >{{farms.length}}</span></span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><router-link to="/Farms" >All Farms</router-link></li>
                              <li v-for="farm in farms"><router-link :to="'/Farm/' + farm.farmCode" >{{farm.name}}</router-link></li>

                        </ul>
                    </li>
                    <li> <router-link to="/Settings" class="waves-effect waves-dark"  aria-expanded="false"><i class="fa fa-cog text-info" style="font-size:24px;"></i><span class="hide-menu">Settings</span></router-link></li>
                    <li> <router-link to="/Login" class="waves-effect waves-dark" aria-expanded="false"><i class="fa fa-question-circle text-info " style="font-size:24px;"></i><span class="hide-menu">Support</span></router-link></li>
                    <li> <router-link to="/Logout" class="waves-effect waves-dark"  aria-expanded="false"><i class="fa fa-circle-o text-danger"></i><span class="hide-menu">Log Out</span></router-link></li>
                    <!-- <router-view></router-view> -->



                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->

</template>

<script>
import FarmsService from '../common/farms.service'

export default {
  name: 'sideMenu',
  data () {
    return {
      user:{
          name: localStorage.getItem('username'),
      },
      farms: FarmsService.getFarms(),
    }
  },
  computed: {
    // геттер вычисляемого значения
    getUsername: function () {
      // `this` указывает на экземпляр vm
      if (/\s/.test(this.user.name)) {
      return this.user.name[0]+this.user.name[this.user.name.indexOf(' ')+1]
      }
      return this.user.name[0]+this.user.name[1]

    }
  },
  mounted: function(){
    // var slrt = require('../dist/js/sidebarmenu.js');
    $(function () {
        var url = window.location;
        var element = $('ul#sidebarnav a').filter(function () {
            return this.href == url;
        }).addClass('active').parent().addClass('active');
        while (true) {
            if (element.is('li')) {
                element = element.parent().addClass('in').parent().addClass('active').children('a').addClass('active');

            }
            else {
                break;
            }
        }
        $('#sidebarnav a').on('click', function (e) {

                if (!$(this).hasClass("active")) {
                    // hide any open menus and remove all other classes
                    $("ul", $(this).parents("ul:first")).removeClass("in");
                    $("a", $(this).parents("ul:first")).removeClass("active");

                    // open our new menu and add the open class
                    $(this).next("ul").addClass("in");
                    $(this).addClass("active");

                }
                else if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this).parents("ul:first").removeClass("active");
                    $(this).next("ul").removeClass("in");
                }
        })
        $('#sidebarnav >li >a.has-arrow').on('click', function (e) {
            e.preventDefault();
        });
    });
  }
}

</script>




<style lang="css">
/* @import '../dist/css/style.css'; */
@import '../dist/css/pages/footable-page.css';
@import '../dist/css/myCustom.css';

.div-name-parent{
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
}
.div-name{
  color:white;
  font-size: 30px;
  font-weight: 600;
  height: 84px;
  width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align:bottom;
  border-radius: 50%; /* may require vendor prefixes */
  background: #03a9f3;
}
</style>
