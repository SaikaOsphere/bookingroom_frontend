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
          label="ชื่อลำดับผู้อนุมัติ"
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
          <b-form-select
            type="text"
            id="institution-name"
            :options="institutions"
            text-field="name"
            value-field="_id"
            v-model="form.institution"
            :state="validateInstitution"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validateInstitution">
            Test Institution
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="form-group-approver-name"
          label="รายการผู้อนุมัติ"
          label-for="approver-name"
        >
          <b-form-select
            v-model="form.institutions"
            type="text"
            id="approver-approveres"
            placeholder="approveresTest"
            :state="validateApproveres"
          >
            <option value=""></option>
          </b-form-select>
          <b-form-invalid-feedback :state="validateApproveres">
            Test Approver
          </b-form-invalid-feedback>
        </b-form-group>

        <multiselect
          v-model="form.appproveres"
          :options="users"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Pick some"
          label="name"
          track-by="_id"
          :preselect-first="true"
        >
          >
        </multiselect>
      </b-form>
      <b-card>
        <pre>
        institutions {{ institutions }}
        ชื่อ User {{ form.approveres }}

      </pre
        >
      </b-card>
    </b-modal>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  props: {
    approver: Object,
    users: Array,
    institutions: Array
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        institution: '',
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
      return this.form.institution !== ''
    },
    validateApproveres () {
      return this.form.approveres !== ''
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
    },
    validateForm () {
      return (
        this.validateName && this.validateInstitution && this.validateApproveres
      )
    }
  }
}
</script>
<style></style>
