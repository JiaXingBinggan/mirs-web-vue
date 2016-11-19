import * as types from '../mutation-types'

// initial state
const state = {
  show: false,
  options: {
    autoClose: false,
    showTime: 3000,
    backgroundColor: '#769FCD',
    content: 'Default content',
    countdownBar: true,
    barColor: '#415F77'
  }
}

// mutations
const mutations = {
  [types.NEW_NOTICE] (state, options) {
    window.console.log('in notification mutations: NEW_NOTICE')
    state.show = true
    state.options = options
  },
  [types.CLOSE_NOTICE] (state) {
    window.console.log('in notification mutations: CLOSE_NOTICE')
    state.show = false
    state.options = {}
  }
}

// actions
const actions = {
  newNotice ({commit}, options) {
    commit(types.NEW_NOTICE, options)
  },
  closeNotice ({commit}) {
    commit(types.CLOSE_NOTICE)
  }
}

export default {
  state,
  mutations,
  actions
}
