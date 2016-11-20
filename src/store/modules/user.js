import * as types from '../mutation-types'

const state = {
  login: false,
  user: {
    username: '',
    token: ''
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    window.console.log('in notification mutations: LOGIN')
    state.login = true
    state.user = user
  },
  [types.LOGOUT] (state) {
    window.console.log('in notification mutations: LOGOUT')
    state.login = false
    state.user = {}
  }
}

// actions
const actions = {
  doLogin ({commit}, user) {
    commit(types.LOGIN, user)
  },
  doLogout ({commit}) {
    commit(types.LOGOUT)
  }
}

export default {
  state,
  mutations,
  actions
}
