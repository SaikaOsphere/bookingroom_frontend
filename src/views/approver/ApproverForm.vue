<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่ม</b-button>
    <b-modal
      id="modal-approver"
      ref="modalApprover"
      title="ผู้อนุมัติ"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <b-form-group
          id="form-group-approver-name"
          label="ลำดับผู้อนุมัติ"
          label-for="approver-name"
        >
          <b-form-input
            type="text"
            id="approver-name"
            placeholder="approver...."
            v-model="form.name"
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่อต้องมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="form-group-institution-name"
          label="ชื่อหน่วยงาน"
          label-for="institution-name"
        >
          <b-form-input
            type="text"
            id="approver-institution"
            placeholder="InstitutionTest"
            v-model="form.institution"
            :state="validateInstitution"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateInstitution">
            Test Institution
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="form-group-approver-name"
          label="รายการผู้อนุมัติ"
          label-for="approver-name"
        >
          <b-form-input
            type="text"
            id="approver-approveres"
            placeholder="approveresTest"
            v-model="form.approveres"
            :state="validateApproveres"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateApproveres">
            Test Approver
          </b-form-invalid-feedback>
        </b-form-group>
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
    approver: Object,
    users: [Object],
    institutions: [Object]
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        institutions: '',
        approveres: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.name !== '' && this.form.name.length >= 5
    },
    validateInstitution () {
      return this.form.institution !== '' && this.form.institution.length >= 1
    },
    validateApproveres () {
      return this.form.approveres !== '' && this.form.approveres.length >= 1
    },
    validateForm () {
      return (
        this.validateName && this.validateInstitution && this.validateApproveres
      )
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
      this.$refs.modalApprover.show()
    },
    submit () {
      const approver = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', approver)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        institution: '',
        approveres: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.approver._id
        this.form.name = this.approver.name
        this.form.institution = this.approver.institution
        this.form.approveres = this.approver.approveres
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.validateForm) {
        return
      }
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-approver')
      })
    }
  }
}
</script>
<style></style>
