import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'
import notification from './modules/notification'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules: {
    notification
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
