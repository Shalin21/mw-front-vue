import Vue from 'vue'
import Vuex from 'vuex'

// import home from './home.module'
import auth from './auth.module'
import common from './common.module'
// import article from './article.module'
// import profile from './profile.module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    // user_token: localStorage.getItem('user-token'),
    email: '',

    // farms:[],
  },
  modules: {
    auth,
    common
  }
  // },
  // modules: {
  //   user,
  //   auth,
  // },
  // strict: debug,
})
