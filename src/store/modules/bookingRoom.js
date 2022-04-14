export default {
  namespaced: true,
  state: {
    item: ''
  },
  mutations: {
  },
  actions: {
    setItem (context, payload) {
      this.state.item = payload
      console.log(this.state.item)
    }
  }
}
