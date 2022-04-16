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
        <!-- รหัสอุปกรณ์ -->
        <b-form-group
          id="form-group-equipment-name"
          label="รหัสอุปกรณ์"
          label-for="equipment-code"
        >
          <b-form-input
            type="text"
            id="equipment-code"
            placeholder="Code : "
            v-model="form.code"
            :state="validateCode"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateCode">
            รหัสต้องมากกว่าหรือเท่ากับ 4 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบรหัสอุปกรณ์ -->

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
    building: Object
  },
  data () {
    return {
      form: {
        _id: '',
        code: '',
        name: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateCode () {
      return this.form.code !== '' && this.form.code.length >= 4
    },
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
      this.$refs.modalBuilding.show()
    },
    submit () {
      const building = JSON.parse(JSON.stringify(this.form))
      building.floor = parseFloat(building.floor)
      this.$emit('save', building)
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
        this.form._id = this.building._id
        this.form.code = this.building.code
        this.form.name = this.building.name
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
      return this.validateName && this.validateCode
    }
  }
}
</script>
<style></style>
