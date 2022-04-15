export default {
  namespaced: true,
  state: {
    idRoom: '',
    datetime: {},
    room: {},
    user: {}
  },
  mutations: {},
  actions: {
    sendRoom (context, payload) {
      this.state.idRoom = payload
    },
    sendDataRoom (contexet, payload) {
      this.state.room = payload
    },
    sendDataUser (context, payload) {
      this.state.user = payload
    },
    sendTime (context, payload) {
      this.state.datetime = payload
    },
    reset (context) {
      this.state.idRoom = ''
      this.state.datetime = {}
    }
  }
}
