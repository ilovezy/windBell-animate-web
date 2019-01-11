const USER = {
  setToken(str) {
    localStorage.setItem('rfjr-web-token', str)
  },
  getToken() {
    return localStorage.getItem('rfjr-web-token')
  },
  isLogin() {
    return !!localStorage.getItem('rfjr-web-token')
  },
  setLoginName(str) {
    localStorage.setItem('rfjr-web-loginName', str)
  },

  getLoginName() {
    return localStorage.getItem('rfjr-web-loginName')
  },

  getPermissions() {
    return JSON.parse(localStorage.getItem('rfjr-web-permissonList'))
  },
  logout() {
    localStorage.removeItem('rfjr-web-token')
    localStorage.removeItem('rfjr-web-loginName')
    localStorage.removeItem('rfjr-web-permissonList')
  }
}

export default USER
