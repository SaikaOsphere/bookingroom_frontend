<template>
  <div class="login">
    <b-card
      img-src="https://www.beartai.com/wp-content/uploads/2021/08/23.png"
      img-alt="Image"
      img-top
      style="max-width: 20rem"
      class="mb-2 center"
    >
      <iframe
        width="275"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
        <b-card-text>
          <div style="text-align: justify">
            <b-form @submit="onSubmit" @reset="onReset" v-if="!loggedIn">
              <b-form-group
                id="input-group-1"
                label="Username"
                label-for="input-1"
              >
                <b-form-input
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
                  v-model="form.password"
                  placeholder="Password"
                  required
                  type="password"
                ></b-form-input>
              </b-form-group>

              <b-button type="reset" variant="danger">Reset</b-button>
              <b-button type="submit" variant="primary" class="m-2"
                >Login</b-button
              >
            </b-form>
            <b-form v-else @submit="logout">
              You are logged in
              <b-button type="submit" variant="primary" class="m-2">
                Logout
              </b-button>
            </b-form>
          </div>
        </b-card-text>
      </iframe>
    </b-card>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      loggedIn: true
    }
  },
  methods: {
    logout (event) {
      event.preventDefault()
      this.loggedIn = false
    },
    onSubmit (event) {
      event.preventDefault()
      // this.$store.dispatch('#', this.form)
      this.loggedIn = true
    },
    onReset (event) {
      event.preventDefault()
      this.form.username = ''
      this.form.password = ''
      this.loggedIn = false
      this.$nextTick(() => {
        this.loggedIn = true
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
</style>
