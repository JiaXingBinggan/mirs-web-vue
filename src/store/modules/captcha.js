import * as types from '../mutation-types'

// initial state
const state = {
  captcha: '',
  captchaError: ''
}

// mutations
const mutations = {
  [types.SET_CAPTCHA_ERROR] (state, error) {
    state.captchaError = error
  },
  [types.CLEAR_CAPTCHA_ERROR] (state) {
    state.captchaError = ''
  }
}

// actions
const actions = {
  setCaptchaError ({commit}, options) {
    commit(types.SET_CAPTCHA_ERROR, options)
  },
  clearCaptchaError ({commit}) {
    commit(types.CLEAR_CAPTCHA_ERROR)
  }
}

export default {
  state,
  mutations,
  actions
}
