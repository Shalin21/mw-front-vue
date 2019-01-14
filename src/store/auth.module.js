import ApiService from '../common/api.call'
import {FarmService} from '../common/api.call'
import JwtService from '../common/jwt.service'
import FarmsService from '../common/farms.service'
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH, UPDATE_USER, GET_FARMS, CLEAR_ERRORS } from './actions.type'
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_LOGIN_ERROR, SET_REG_ERROR, SET_FARMS, SET_REG, DELETE_ERRORS } from './mutations.type'
import { LOGIN_ERROR, REGISTRATION_ERROR } from './errors.type'

const state = {
  errors: null,
  isAuthenticated: !!JwtService.getToken()
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [CLEAR_ERRORS] (context) {
    context.commit(DELETE_ERRORS)
  },
  [LOGIN] (context, credentials) {
    return new Promise((resolve) => {
      // ApiService.setAuthHeader();
      ApiService
        .loginPost('oauth/token', credentials)
        .then(({data}) => {
          context.commit(SET_AUTH, data.access_token)
          resolve(data)

        })
        .catch((response) => {
          context.commit(SET_LOGIN_ERROR, response)
        })
    })
  },
  [GET_FARMS] (context) {
    return new Promise((resolve) => {
      ApiService.setHeader();
      ApiService.get('users/Name')
      .then(({data}) => {
        localStorage.setItem('username', data)
        // context.commit(SET_REG)
        // resolve(data)
      })
      // console.log("Doshlo do name:"+localStorage.getItem('username'));
      FarmService
        .getAll()
        .then(({data}) => {
          console.log("GETTING FARMS");
          console.log(data);
          context.commit(SET_FARMS, data)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER] (context, credentials) {
    return new Promise((resolve) => {
      ApiService
        .post('signup', credentials)
        .then(({data}) => {
          context.commit(SET_REG)
          resolve(data)
        })
        .catch((response) => {
          context.commit(SET_REG_ERROR, response)
        })
    })
  },
  [CHECK_AUTH] (context) {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      ApiService
        .get('user')
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response)
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  },
  [UPDATE_USER] (context, payload) {
    const {email, username, password, image, bio} = payload
    const user = {
      email,
      username,
      bio,
      image
    }
    if (password) {
      user.password = password
    }

    return ApiService
      .put('user', user)
      .then(({data}) => {
        context.commit(SET_AUTH, data.user)
        return data
      })
  }
}

const mutations = {
  [DELETE_ERRORS] (state) {
    state.errors = null
  },
  [SET_REG] (state) {

  },
  [SET_LOGIN_ERROR] (state, error) {
      state.errors = error.response.data.error_description
  },
  [SET_REG_ERROR] (state, error) {
      state.errors = error.response.data.message
  },
  [SET_ERROR] (state, error) {
      state.errors = error.response.data
  },
  [SET_FARMS] (state, farms) {
    state.errors = {}
    console.log("SETTING FARMS");
    console.log(farms);
    FarmsService.saveFarms(farms)
    // localStorage.setItem('farms',JSON.stringify(farms));
  },
  [SET_AUTH] (state, token) {
    state.isAuthenticated = true
    state.errors = {}
    JwtService.saveToken(token)
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.errors = {}
    JwtService.destroyToken()
    FarmsService.destroyFarms()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
