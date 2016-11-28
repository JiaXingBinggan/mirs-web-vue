import * as types from '../mutation-types'
import commonApi from '../../api/commonApi'

// initial state
const state = {
  captcha: '',
  captchaError: '',
  captchaUrl: commonApi.captchaUrl()
}

// mutations
const mutations = {
  [types.SET_CAPTCHA] (state, captcha) {
    state.captcha = captcha
  },
  [types.CLEAR_CAPTCHA] (state) {
    state.captcha = ''
  },
  [types.SET_CAPTCHA_ERROR] (state, error) {
    state.captchaError = error
  },
  [types.CLEAR_CAPTCHA_ERROR] (state) {
    state.captchaError = ''
  },
  [types.CHANGE_CAPTCHA] (state, url) {
    state.captchaUrl = url
  }
}

// actions
const actions = {
  setCaptcha ({commit}, captcha) {
    commit(types.SET_CAPTCHA, captcha.toLowerCase())
  },
  clearCaptcha ({commit}) {
    commit(types.CLEAR_CAPTCHA)
  },
  setCaptchaError ({commit}, error) {
    commit(types.SET_CAPTCHA_ERROR, error)
  },
  clearCaptchaError ({commit}) {
    commit(types.CLEAR_CAPTCHA_ERROR)
  },
  changeCaptcha ({commit}) {
    let url = commonApi.captchaUrl() + '?' + Math.floor(Math.random() * 100)
    commit(types.CHANGE_CAPTCHA, url)
  },
  validateCaptcha ({commit, actions}) {
    commonApi.checkCaptcha(state.captcha)
    .then(function (res) {
      if (res.data['success'] === false) {
        commit(types.SET_CAPTCHA_ERROR, '验证码错误')
        // 自动刷新验证码
        actions.changeCaptcha()
        // _this.captcha = ''
      }
      window.console.log(res.data)
    })
    .catch(function (res) {
      if (res instanceof Error) {
        window.console.log(res.message)
      } else {
        window.console.log(res.data)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
