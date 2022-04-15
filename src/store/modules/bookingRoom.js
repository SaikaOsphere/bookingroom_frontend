export default {
  namespaced: true,
  state: {
    idRoom: '',
    datetime: {},
    room: {},
    user: {},
    form: {}
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
    sendForm (context, payload) {
      this.state.form = payload
      this.state.form.room = this.state.room
      this.state.form.user = this.state.user
    },
    reset (context) {
      this.state.idRoom = ''
      this.state.datetime = {}
      this.state.room = {}
    }
  }
}
