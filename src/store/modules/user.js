const user = {
  state: {
    count: 0,
    userInfo: {
      availableBalance: 0,
      balance: 0,
      bindCardFlag: false,
      name: '',
      openAccountFlag: false,
      realNameFlag: false,
      account: ''
    }
  },

  mutations: {
    increment(state) {
      state.count++
    },

    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo || {}
    }
  },

  actions: {
    UPDATE_USER_INFO({ commit, state }, userInfo) {
      commit('updateUserInfo', userInfo)
    }
  }
}

export default user
