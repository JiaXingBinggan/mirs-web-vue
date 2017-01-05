import * as types from '../mutation-types'
import Store from '../../utils/store.js'
import Courier from '../../utils/courier.js'
import userApi from '../../api/userApi.js'

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
    actions.connectStomp(user['id'])
  },
  doLogout ({commit}) {
    commit(types.LOGOUT)
  },
  connectStomp (id) {
    Courier.connect(id)
  },
  sendMessageByStomp (msg) {
    Courier.sendMessage(msg)
  },
  sendSimpleMessage ({commit}, simpleMessage) {
    window.console.log(simpleMessage)
    window.console.log('----------------------------')
    userApi.sendMessage(simpleMessage)
  }
}

export default {
  state,
  mutations,
  actions
}
