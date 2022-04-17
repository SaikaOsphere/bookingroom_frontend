import { AUTH_LOGIN, AUTH_LOGOUT } from '../mutation-types'
import router from '../../router'
import { login } from '../../services/auth'

export default {
  namespaced: true,
  state: () => ({
    user: JSON.parse(localStorage.getItem('user'))

  }),
  mutations: {
    [AUTH_LOGIN] (state, payload) {
      state.user = payload
    },
    [AUTH_LOGOUT] (state) {
      state.user = null
    }
  },
  actions: {
    async login ({ commit }, payload) {
      console.log(payload)
      try {
        // console.log('login')
        const res = await login(payload.username, payload.password)
        const user = res.data.user
        const token = res.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        // console.log(res)

        router.push('/home')
        commit(AUTH_LOGIN, user)
      } catch (e) {
        router.push('/')
      }
      // if correct
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      commit(AUTH_LOGOUT)
    }
  },
  getters: {
    isLogin (state, getters) {
      return state.user != null
    },
    isAdmin (state) {
      const roles = ['ADMIN', 'USER', 'LOCAL_ADMIN']
      if (state.user != null) {
        for (let i = 0; i < state.user.roles.length; i++) {
          if (state.user.roles[i] === roles[0]) {
            return true
          }
        }
      }
      return false
    },
    isLocalAdmin (state) {
      const roles = ['ADMIN', 'USER', 'LOCAL_ADMIN']
      if (state.user != null) {
        for (let i = 0; i < state.user.roles.length; i++) {
          if (state.user.roles[i] === roles[2]) {
            return true
          }
        }
      }
      return false
    }

  }
}
