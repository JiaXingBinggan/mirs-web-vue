import * as types from '../mutation-types'
import Store from '../../utils/store.js'

const state = {
  login: false,
  user: {
    id: '',
    username: '',
    email: '',
    bio: '',
    location: '',
    university: '',
    major: ''
  },
  expireTime: ''
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.login = true
    state.user = user
    state.expireTime = new Date().getTime() + 30 * 60 * 1000
    // 加入储存中
    Store.save('user', state)
  },
  [types.LOGOUT] (state) {
    window.console.log('in notification mutations: LOGOUT')
    state.login = false
    state.user = {}
    state.expireTime = ''
    Store.remove('user')
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
