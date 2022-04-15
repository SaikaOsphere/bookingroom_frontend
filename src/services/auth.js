import api from './api'

export const login = function (email, password) {
  return api.post('/login', { username: email, password: password })
}
