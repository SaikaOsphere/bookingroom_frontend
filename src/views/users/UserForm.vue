<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่ม</b-button>
    <b-modal
      id="modal-user"
      ref="modalUser"
      title="ผู้ใช้"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <!-- ชื่อผู้ใช้ -->
        <b-form-group
          id="form-group-user-username"
          label="ชื่อผู้ใช้"
          label-for="user-username"
        >
          <b-form-input
            type="text"
            id="user-username"
            placeholder="โปรดระบุ username"
            v-model="form.username"
            :state="validateUsername"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateUsername">
            ชื่อผู้ใช้ต้องมีความยาวมากกว่า 8 แต่น้อยกว่า 30 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อผู้ใช้ -->
        <!-- รหัสผ่าน -->
        <b-form-group
          id="form-group-user-password"
          label="รหัสผ่าน"
          label-for="user-password"
        >
          <b-form-input
            type="text"
            id="user-password"
            placeholder="โปรดระบุ password"
            v-model="form.password"
            :state="validatePassword"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validatePassword">
            รหัสผ่านต้องมีความยาวมากกว่า 8 แต่น้อยกว่า 30 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อตึก -->
        <!-- ชื่อจริง -->
        <b-form-group
          id="form-group-user-name"
          label="ชื่อจริง"
          label-for="user-name"
        >
          <b-form-input
            type="text"
            id="user-name"
            placeholder="นาย/นางสาว..."
            v-model="form.name"
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อจริง -->

        <!-- นามสกุล -->
        <b-form-group
          id="form-group-user-surname"
          label="นามสกุล"
          label-for="user-surname"
        >
          <b-form-input
            type="text"
            id="user-surname"
            placeholder="นามสกุล..."
            v-model="form.surname"
            :state="validateSurname"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateSurname">
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบนามสกุล -->
        <!-- หน่วยงาน -->
        <b-form-group
          id="form-group-user-institution"
          label="หน่วยงาน"
          label-for="user-institution"
        >
          <b-form-input
            type="text"
            id="user-institution"
            placeholder="Facalty of ..."
            v-model="form.institution"
            :state="validateInstitution"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateInstitution">
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- หน่วยงาน -->
      </b-form>
      <b-card>
        <pre>
        {{ form }}
      </pre
        >
      </b-card>
    </b-modal>
  </div>
</template>
<script>

export default {

  props: {
    user: Object
  },
  data () {
    return {
      form: {
        _id: '',
        username: '',
        password: '',
        name: '',
        surname: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateUsername () {
      return this.form.username !== '' && this.form.username.length >= 8 && this.form.username.length <= 30
    },
    validatePassword () {
      return this.form.password !== '' && this.form.password.length >= 8 && this.form.password.length <= 30
    },
    validateName () {
      return this.form.name !== ''
    },
    validateSurname () {
      return this.form.surname !== ''
    },
    validateInstitution () {
      return this.form.institution !== ''
    }
  },
  methods: {
    addNew () {
      this.isAddNew = true
      this.$nextTick(() => {
        this.show()
        this.isAddNew = false
      })
    },
    show () {
      this.$refs.modalUser.show()
    },
    submit () {
      const user = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', user)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        username: '',
        password: '',
        name: '',
        surname: '',
        institution: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.user._id
        this.form.name = this.user.name
        this.form.username = this.user.username
        this.form.surname = this.user.surname
        this.form.institution = this.user.institution
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.validateForm()) {
        return
      }
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-user')
      })
    },
    validateForm () {
      return this.validateName && this.validateUsername && this.validatePassword && this.validateSurname && this.validateInstitution
    }
  }
}
</script>
<style></style>
