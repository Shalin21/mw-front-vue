<template>

  <div id="app">
  <body class="skin-blue card-no-border" >
    <!-- <img src="../assets/images/background/login-register.jpg" alt="user-img" class="img-circle"> -->

  <section id="wrapper">
      <div class="login-register login-register-back">
          <div class="login-box card">
              <div class="card-body">
                <div class="alert alert-danger" v-if="log_errors">{{ log_errors }}</div>
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <!-- <ul v-if="log_errors" class="error-messages">
                  <li
                  v-for="(v, k) in log_errors"
                  :key="k">
                  {{k}} {{ v | error }}
                  </li>

                </ul> -->

                  <form class="form-horizontal form-material" id="loginform" @submit.prevent="login">
                      <h3 class="box-title m-b-20">Sign In</h3>
                      <div class="form-group ">
                          <div class="col-xs-12">
                              <input v-model="email" name="email" v-validate="{ required: true, email: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }" class="form-control" type="text" placeholder="Username" required autofocus> </div>
                      </div>
                      <div class="form-group">
                          <div class="col-xs-12">
                              <input v-model="password" class="form-control" type="password" required minlength="6" placeholder="Password"> </div>
                      </div>
                      <div class="form-group row">
                          <div class="col-md-12">
                              <div class="custom-control custom-checkbox">
                                  <!-- <input type="checkbox" class="custom-control-input" id="customCheck1"> -->
                                  <!-- <label class="custom-control-label" for="customCheck1">Remember me</label> -->
                                  <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Forgot password?</a>
                              </div>
                          </div>
                      </div>
                      <div class="form-group text-center">
                          <div class="col-xs-12 p-b-20">
                              <button class="btn btn-block btn-lg btn-info btn-rounded" type="submit">Log In</button>
                          </div>
                      </div>

                      <div class="form-group m-b-0">
                          <div class="col-sm-12 text-center">
                              Don't have an account? <router-link to="/Register" class="text-info m-l-5"><b>Sign Up</b></router-link>
                          </div>
                      </div>
                  </form>
                  <form class="form-horizontal" id="recoverform" action="index.html">
                      <div class="form-group ">
                          <div class="col-xs-12">
                              <h3>Recover Password</h3>
                              <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                          </div>
                      </div>
                      <div class="form-group ">
                          <div class="col-xs-12">
                              <input class="form-control" type="text" required="" placeholder="Email"> </div>
                      </div>
                      <div class="form-group text-center m-t-20">
                          <div class="col-xs-12">
                              <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </section>
</body>
</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import { LOGIN, GET_FARMS, CHANGE_THEME } from '../store/actions.type'

// import {LoginService} from '../common/api.call';
var qs = require('qs');

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  mounted: function () {
    localStorage.setItem('dark_theme', 'false')
  },
  methods: {
    login () {
      const requestBody = {
           grant_type: 'password',
           username: this.email,
           password: this.password
         }
         if (!this.errors.has('email'))      {
           this.error = ''
          localStorage.setItem('email', this.email)
           this.$store
             .dispatch(LOGIN,  requestBody)
                     .then(() => this.$store
                       .dispatch(GET_FARMS)
                           .then(() => this.$router.push('Dashboard'))
                   )
                   // .catch(err => console.log(err))
         }
         else if(this.errors.has('email')){
          // this.errors.first('email')
          this.error = this.errors.first('email')
          localStorage.removeItem('email')

         }



        // .then(() => this.$router.push('Dashboard'))
      // LoginService.login(this.email, this.password);

      // if(error.isError == true){
      //   console.log('RUN HERE IS ERROR');
      //   this.error = error.error_message}
      // else {
      //   console.log('CALM DOWN NO ERROR');
      //   this.$router.push('Dashboard')
      // }
   //    const requestBody = {
   //      grant_type: 'password',
   //      username: this.email,
   //      password: this.password
   //    }
   //
   //    const config = {
   //      headers: {
   //        'Content-Type': 'application/x-www-form-urlencoded',
   //        'Authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ='
   //      }
   //    }
   //    // this.$router.push('Home')
   //    axios.post(`http://localhost:8082/oauth/token`, qs.stringify(requestBody), config)
   //
   // .then(response => this.loginSuccessful(response))
   // .catch(e => this.loginFailed(e))

    }
  },
  computed: {
    ...mapState({
      log_errors: state => state.auth.errors
    })
  }
}


</script>


<style lang="css">
@import '../dist/css/pages/login-register-lock.css';
@import '../dist/css/style.min.css';


</style>
