<template>
<body>
    <div class="login">
      <b-card img-alt="Image" class="mb-2 center backgroundformLogin">
        <!-- <iframe
        width="275"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      > -->
        <b-card-text>
          <div style="text-align: justify">
            <b-form
              @submit="onSubmit"
              @reset="onReset"
              v-if="showForm"
              class="formLogin"
            >
              <b-form-group
                id="input-group-1"
                label="Username"
                label-for="input-1"
              >
                <b-form-input
                  class="borderInput"
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  placeholder="Username"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  class="borderInput"
                  v-model="form.password"
                  placeholder="Password"
                  required
                  type="password"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary" class="m-2">Login</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
              <!-- {{ $store.state.auth.userLogin }}
              {{ $store.getters['auth/isLogin'] }} -->
            </b-form>
          </div>
        </b-card-text>
        <!-- </iframe> -->
      </b-card>
    </div>
    <!-- <b-card no-body class="overflow-hidden center" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card> -->

</body>

</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      showForm: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      // ยิงไป action
      this.$store.dispatch('auth/login', this.form)
    },
    onReset (event) {
      event.preventDefault()
      this.form.username = ''
      this.form.password = ''
      this.showForm = false
      this.$nextTick(() => {
        this.showForm = true
      })
    }
  }
}
</script>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.backgroundformLogin {
  background: #fff;
  color: rgb(0, 0, 0);
  width: 600px;
  height: 350px;
  background-repeat: no-repeat;
  background-origin: content-box;
  border-radius: 25px;
  box-shadow: 0px 0px 15px 0px #000;
}
.bg {
  background: url('../assets/wallpaperLogin.jpg') no-repeat;
  width: 750px;
  height: 750px;
}

.borderInput {
  max-width: 20rem;
  border-radius: 25px;
  margin-right: 500px;
}
.formLogin {
  padding-top: 55px;
  padding-left: 150px;
}
</style>
