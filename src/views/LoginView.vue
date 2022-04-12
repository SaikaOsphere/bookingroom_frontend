<template>
  <div class="login">
    <b-card
      img-src="https://www.beartai.com/wp-content/uploads/2021/08/23.png"
      img-alt="Image"
      img-top
      style="max-width: 20rem"
      class="mb-2 center"
    >
      <b-card-text>
        <div style="text-align: justify">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },

      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$store.dispatch('#', this.form)
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.username = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
