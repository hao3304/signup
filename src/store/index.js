import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

export default new vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {

  }
})
