<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่ม</b-button>
    <b-modal
      id="modal-institution"
      ref="modalInstitution"
      title="หน่วยงาน"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <b-form-group
          id="form-group-institution-name"
          label="ชื่อหน่วยงาน"
          label-for="institution-name"
        >
          <b-form-input
            type="text"
            id="institution-name"
            placeholder="Facalty of ..."
            v-model="form.name"
            :state="validateName"
          >
          </b-form-input>
           <b-form-invalid-feedback :state="validateName">
            ชื่อต้องมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    institution: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.name !== '' && this.form.name.length >= 5
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
      this.$refs.modalInstitution.show()
    },
    submit () {
      const institution = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', institution)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.institution._id
        this.form.name = this.institution.name
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
        this.$bvModal.hide('modal-institution')
      })
    },
    validateForm () {
      return this.validateName
    }
  }
}
</script>
<style></style>
