export default {
  namespaced: true,
  state: {
    idus: {}
  },
  mutations: {},
  actions: {
    sendid (context, payload) {
      this.state.idus = payload
    }
  }
}
