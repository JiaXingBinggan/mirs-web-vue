import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'
import notification from './modules/notification'
import user from './modules/user'
import captcha from './modules/captcha'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules: {
    notification,
    user,
    captcha
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
