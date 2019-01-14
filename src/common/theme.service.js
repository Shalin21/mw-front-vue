const DARK_THEME = 'dark_theme'

export default {
  getTheme () {
    return window.localStorage.getItem(DARK_THEME)
  },

  saveTheme (theme) {
    window.localStorage.setItem(DARK_THEME, theme)
  },

  destroyTheme () {
    window.localStorage.removeItem(DARK_THEME)
  }
}
