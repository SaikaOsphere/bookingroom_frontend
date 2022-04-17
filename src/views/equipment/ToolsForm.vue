<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่มอุปกรณ์</b-button>
    <b-modal
      id="modal-equipment"
      ref="modalEquipment"
      title="อุปกรณ์"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">

        <!-- ชื่ออุปกรณ์ -->
        <b-form-group
          id="form-group-equipment-name"
          label="ชื่ออุปกรณ์"
          label-for="equipment-name"
        >
          <b-form-input
            type="text"
            id="equipment-name"
            placeholder="Name : "
            v-model="form.name"
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่ออุปกรณ์ต้องมีตัวอักษรมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่ออุปกรณ์ -->

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
    equipment: Object
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
      this.$refs.modalEquipment.show()
    },
    submit () {
      const equipment = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', equipment)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        code: '',
        name: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.equipment._id
        this.form.name = this.equipment.name
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
        this.$bvModal.hide('modal-equipment')
      })
    },
    validateForm () {
      return this.validateName
    }
  }
}
</script>
<style></style>
