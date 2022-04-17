import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import bookingRoom from './modules/bookingRoom'
import checkid from './modules/petitionstore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    bookingRoom,
    checkid
  }
})
