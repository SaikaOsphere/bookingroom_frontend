<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่ม</b-button>
    <b-modal
      id="modal-approver"
      ref="modalApprover"
      title="หน่วยงาน"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <b-form-group
          id="form-group-approver-name"
          label="ชื่อหน่วยงาน"
          label-for="approver-name"
        >
          <b-form-input
            type="text"
            id="approver-name"
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
    approver: Object
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
      this.$refs.modalapprover.show()
    },
    submit () {
      const approver = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', approver)
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
        this.form._id = this.approver._id
        this.form.name = this.approver.name
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
        this.$bvModal.hide('modal-approver')
      })
    },
    validateForm () {
      return this.validateName
    }
  }
}
</script>
<style></style>
