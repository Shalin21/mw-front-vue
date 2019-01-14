import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
import axios from 'axios'
import Login from '../Login/App.vue'
import Register from '../Register/App.vue'
import Settings from '../settings/App.vue'
import Farms from '../farms/Farms.vue'
import Home from '../home/Home.vue'
import Farm from '../farm/Farm.vue'
import mainBody from '../main/main.vue'
import JwtService from '../common/jwt.service'
import { CLEAR_ERRORS } from '../store/actions.type'

Vue.use(Router)

let resp = []

// const getFarms = (to, from, next) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Bearer '+localStorage.getItem('user-token'),
//
//     }
//   }
//
//   if(localStorage.getItem('user-token')!=null){
//   axios.get(`http://localhost:8082/users/AllFarms/`, config)
//   .then(response => {
//     console.log(response.data);
//     // console.log(response.data);
//     localStorage.setItem('farms',JSON.stringify(response.data));
//     // resp = response.data;
//     // console.log(resp[0].name);
//     next()})
//   .catch(e => console.log(e))
// }
// }
// const set = (to, form, next) =>{
// // console.log(resp);
//       next()
// }
//
// const ifAuthenticated = (to, from, next) => {
//   console.log(store.token)
//   if (store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/login')
// }

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Login,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: { requiresAuth: false }
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
      meta: { requiresAuth: true }
      // beforeEnter: ifAuthenticated,
    },
    {

        path: '/Farm/:id',
        name: 'Farm',
        component: Farm,
        meta: { requiresAuth: true }
    },
    {
      path: '/Farms',
      name: 'Farms',
      component: Farms,
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach((to, from, next) => {
  store.dispatch(CLEAR_ERRORS)

  if(to.name == 'Login' || to.name == 'Register') { // check if "to"-route is "callback" and allow access
    // if(to.name == 'Login' && localStorage.getItem('user-token') != null){
    if(to.name == 'Login' && !!JwtService.getToken()){
      next('/Dashboard')
    }
    else{
      next()
    }
  }
  else if (to.path == '/Logout'){
    JwtService.destroyToken()
     console.log('You was suc logouted')
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-email')
    localStorage.removeItem('farms')
    //isAuth = false
    next('/Login')
  }
  else if (!!JwtService.getToken()) { // if authenticated allow access
   next()
  }
  else { // trigger auth0 login
    next('/Login')
  }
})

export default router
