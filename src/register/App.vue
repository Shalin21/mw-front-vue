<template>

  <div id="app">
    <body class="skin-blue card-no-border">

        <section id="wrapper">
            <div class="login-register" style="background-image:url(../assets/images/background/login-register.jpg);">
                <div class="login-box card">
                    <div class="card-body">
                        <form class="form-horizontal form-material" id="loginform" @submit.prevent="register">

                          <div class="alert alert-danger" v-if="log_errors">{{ log_errors }}</div>
                          <div class="alert alert-danger" v-if="error">{{ error }}</div>

                            <h3 class="box-title m-b-20">Sign Up</h3>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <input v-model="name" class="form-control" type="text" minlength="2" required placeholder="Name">
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input v-model="email" name="email" class="form-control"  v-validate="{ required: true, email: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }" type="text" placeholder="Email">
                                    <!-- <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input v-model="password"  class="form-control" type="password" minlength="6" required placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <input v-model="cpassword" class="form-control" type="password" minlength="6" required placeholder="Confirm Password">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                        <label class="custom-control-label" for="customCheck1">I agree to all <a href="javascript:void(0)">Terms</a></label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center p-b-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light" type="submit">Sign Up</button>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    Already have an account? <router-link to="/Login" class="text-info m-l-5"><b>Sign In</b></router-link>
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
  import { REGISTER } from '../store/actions.type'
  // var qs = require('qs');
export default {


  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      error: false
    }
  },
  methods: {
    register () {
      const requestBody = {
        name: this.name,
        email: this.email,
        password: this.password,
      }

        if (this.password == this.cpassword && !this.errors.has('email'))      {
          this.error = ''
          this.$store
            .dispatch(REGISTER,  requestBody)
                .then(() =>  this.$router.push('Login'))
        }
        else if(this.errors.has('email')){
          this.error= this.errors.first('email')
        }
        else{
          this.error = 'Passwords dont match'
        }

    },
  },
  computed: {
    ...mapState({
      log_errors: state => state.auth.errors
    })
  }
}
</script>

<script2 src="../assets/node_modules/jquery/jquery-3.2.1.min.js"></script2>
<script2 src="../assets/node_modules/popper/popper.min.js"></script2>
<script2 src="../assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script2>
<style lang="css">
@import '../dist/css/pages/login-register-lock.css';
@import '../dist/css/style.min.css';

</style>
