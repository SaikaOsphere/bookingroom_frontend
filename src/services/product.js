import api from './api'

export function getProduct () {
  return api.get('/products')
}
