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
            v-model="form.institution"
            :state="validateInstitution"
          >
            <option
              v-for="f in institutions"
              :value="f"
              :key="f.id"
              id="institution-name"
            >
              {{ f.name }}
            </option>
          </b-form-select>

          <b-form-invalid-feedback :state="validateInstitution">
            Choose Institution
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="form-group-approver-name"
          label="รายการผู้อนุมัติ"
          label-for="approver-name"
        >
          <multiselect
            v-model="form.approveres"
            :options="filterUser"
            :multiple="true"
            :close-on-select="false"
            :preserve-search="true"
            placeholder="Pick some"
            label="name"
            track-by="_id"
            :preselect-first="true"
          >
            <template slot="selection" slot-scope="{ values, isOpen }"
              ><span
                class="multiselect__single"
                v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} options selected</span
              ></template
            >
          </multiselect>
          <b-form-invalid-feedback :state="validateApproveres">
            Choose Approver
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  mounted () {
  },
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
      return this.form.approveres !== '' && this.form.approveres.length >= 5
    },
    filterUser () {
      return this.users.filter((item) => (item.roles.indexOf('ADMIN') >= 0 || item.roles.indexOf('LOCAL_ADMIN') >= 0))
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
