<template>
  <div>
         <b-button @click="addNew" variant="primary">เพิ่ม</b-button>

    <b-modal
      id="modal-building"
      ref="modalBuilding"
      title="ตึก"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <!-- รหัสตึก -->
        <b-form-group
          id="form-group-building-name"
          label="รหัสตึก"
          label-for="building-name"
        >
          <b-form-input
            type="text"
            id="building-name"
            placeholder="IF,K,Q,AH"
            v-model="form.code"
            :state="validateCode"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateCode">
            รหัสต้องมากกว่าหรือเท่ากับ 1 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบรหัสตึก -->

        <!-- ชื่อตึก -->
        <b-form-group
          id="form-group-building-name"
          label="ชื่อตึก"
          label-for="building-name"
        >
          <b-form-input
            type="text"
            id="building-name"
            placeholder="Faculty of Informatics"
            v-model="form.name"
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่อตึกต้องมีตัวอักษรมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อตึก -->

        <!-- ชั้นตึก -->
        <b-form-group
          id="form-group-building-floor"
          label="ชั้น"
          label-for="building-floor"
        >
          <b-form-input
            type="number"
            id="building-floor"
            placeholder="10 20 30"
            v-model="form.floor"
            :state="validateFloor"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateFloor">
            ชั้นต้องมีมากกว่า 1 ชั้น
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชั้นตึก -->
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
        name: '',
        floor: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateCode () {
      return this.form.code !== '' && this.form.code.length >= 1
    },
    validateName () {
      return this.form.name !== '' && this.form.name.length >= 5
    },
    validateFloor () {
      return this.form.floor !== ''
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
        name: '',
        floor: ''
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
        this.form.floor = this.building.floor
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
        this.$bvModal.hide('modal-building')
      })
    },
    validateForm () {
      return this.validateName && this.validateFloor && this.validateCode
    }
  }
}
</script>
<style></style>
