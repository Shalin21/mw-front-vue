import ThemeService from '../common/theme.service'
import { CHANGE_THEME } from './actions.type'
import { SET_THEME } from './mutations.type'


const state = {
  isDarkTheme: !!ThemeService.getTheme()
}

const getters = {
  isDark(state) {
    return state.isDarkTheme
  }
}

const actions = {
  [CHANGE_THEME] (context) {
    context.commit(SET_THEME)
  },
}

const mutations = {
  [SET_THEME] (state) {
    // console.log(ThemeService.getTheme());
    if(ThemeService.getTheme() == 'false'){
      ThemeService.saveTheme('true');
    }
    else{
      ThemeService.saveTheme('false');
    }
    state.isDarkTheme = ThemeService.getTheme();
     // console.log(ThemeService.getTheme());
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
