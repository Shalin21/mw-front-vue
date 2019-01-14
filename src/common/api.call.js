import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from './jwt.service'
import { API_URL, loginConfig } from './config'
import router from '../router'

var qs = require('qs');

const ApiService = {
  init () {
    // use(VueAxios, axios)
    axios.defaults.baseURL = API_URL
  },
  setAuthHeader () {
    axios.defaults.headers.common['Authorization'] = `Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ=`
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  },
  setHeader () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  },

  query (resource, params) {
    return axios.get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource) {
    return axios.get(`${resource}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params) {
    return axios.post(`${resource}`, params)

  },
  loginPost (resource, params) {
    return axios.post(`${resource}`, qs.stringify(params), loginConfig)
  },
  update (resource, params) {
    return axios.put(`${resource}`, qs.stringify(params))
  },

  put (resource, params) {
    return axios.put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService


export const LoginService = {

  login (post_email, post_password) {
    const error = {
      isError: false,
      error_message: ''
    };
    const requestBody = {
      grant_type: 'password',
      username: post_email,
      password: post_password
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ='
      }
    }
    axios.post(`http://localhost:8082/oauth/token`, qs.stringify(requestBody), config)
    .then(response => {
      this.loginSuccessful(response)

    })
    .catch(e => {
      this.loginFailed(e)
      error.isError = true
      error.error_message=e

    })

  },
  loginSuccessful (req) {
    const error = {
      isError: false,
      error_message: ''
    };
    if (!req.data.access_token) {
      this.loginFailed()
    }
    console.log("TOKEN: " + req.data.access_token);


    JwtService.saveToken(req.data.access_token)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + JwtService.getToken(),
      }
    }
  
    axios.get(`http://localhost:8082/users/AllFarms`, config)
    .then(response => {
      console.log("Farms was setted");
      console.log(response.data);
      localStorage.setItem('farms',JSON.stringify(response.data));
      error.isError=false;
      return error;
      })
    // FarmService.getAll()
    // .then(response => {
    //   console.log("Farms was setted");
    //   console.log(response.data);
    //
    //   localStorage.setItem('farms',JSON.stringify(response.data));
    //
    //   this.$router.push('Dashboard')
    //   })

  },

  loginFailed (e) {
    const error = {
      isError: false,
      error_message: ''
    };
    JwtService.destroyToken()
    error.isError=true;
    error.error_message=e;
    return error;
  }

}

export const FarmService = {
  query (type, params) {
    return ApiService
      .query(
        'users/AllFarms',
        { params: params }
      )
  },
  get (slug) {
    return ApiService.get('users/AllFarms', slug)
  },
  getAll () {
    return ApiService.get('users/AllFarms')
  },
  create (params) {
    return ApiService.post('farms/AllFarms', {article: params})
  },
  update (slug, params) {
    return ApiService.update('farms/updateFarm', slug, {article: params})
  },
  destroy (slug) {
    return ApiService.delete(`farms/deleteFarm/${slug}`)
  }
}
