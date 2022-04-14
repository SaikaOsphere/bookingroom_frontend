import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import bookingRoom from './modules/bookingRoom'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // item: ''
  },
  getters: {},
  mutations: {
    // setItem (state, item) {
    //   state.item = item
    // }
  },
  actions: {},
  modules: {
    auth,
    bookingRoom
  }
})
