export default {
  namespaced: true,
  state: {
    idRoom: '',
    datetime: {}
  },
  mutations: {},
  actions: {
    sendRoom (context, payload) {
      this.state.idRoom = payload
    },
    sendTime (context, payload) {
      this.state.datetime = payload
    }
  }
}
