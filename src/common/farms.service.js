const FARMS = 'user_farms'

export default {
  getFarms () {
    return JSON.parse(window.localStorage.getItem(FARMS))
  },

  saveFarms (farms) {
    window.localStorage.setItem(FARMS, JSON.stringify(farms))
  },

  destroyFarms () {
    window.localStorage.removeItem(FARMS)
  }
}
