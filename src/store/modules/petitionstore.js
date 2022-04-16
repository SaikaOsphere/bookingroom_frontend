import { SAVE, OUT } from '../mutation-types'
import router from '../../router/index'

export default {
  namespaced: true,
  state: () => ({
    idus: localStorage.getItem('booking')
  }),
  mutations: {
    [SAVE] (state, payload) {
      console.log('payload', payload)
      localStorage.setItem('booking', payload)
      state.idus = payload
    },
    [OUT] (state) {
      state.idus = {}
    }
  },
  actions: {
    sendid (context, payload) {
      console.log('payload_.id', payload._id)
      context.commit(SAVE, payload._id)
      router.push('/pettitiondetail')
    },
    reset (context) {
      localStorage.removeItem('booking')
      context.commit(OUT)
      router.push('/petition')
    }
  },
  getters: {
    getBookingId (state, getters) {
      return state.idus
    }
  }

}
