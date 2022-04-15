<template>
  <div>

    <b-button @click="addNew" variant="primary" class="ml-5"
      >เพิ่มห้อง</b-button
    >
    <b-modal
      id="modal-room"
      ref="modalRoom"
      title="เพิ่มห้อง"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
        <b-form-group
          id="form-group-room-name"
          label="ชื่อห้อง "
          label-for="room-name"
        >
          <b-form-input
            type="text"
            id="room-name"
            placeholder="IF,K,Q,AH"
            v-model="form.name"
            :state="validateCode"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateCode">
            ชื่อตึกต้องมีตัวอักษรมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>

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

        <!-- จำนวนคน -->
        <b-form-group
          id="form-group-room-capacity"
          label="จำนวนคนที่รองรับ "
          label-for="room-capacity"
        >
          <b-form-input
            type="text"
            id="room-capacity"
            placeholder="จำนวนคนที่รองรับ : "
            v-model="form.capacity"
            :state="validatePerson"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validatePerson">
            ต้องมีคนมากกว่า 2 คน
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบ -->

        <!-- รายการอุปกรณ์ -->
        <b-form-group
          id="form-group-room-equipment"
          label="รายการอุปกรณ์ "
          label-for="room-equipment"
        >
          <b-form-input
            type="text"
            id="room-equipment"
            placeholder="รายการอุปกรณ์ : "
            v-model="form.equipment"
            :state="validateEquipment"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateEquipment">
            อุปกรณ์ต้องมีมากกว่า 1 ชิ้น
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบ -->

        <!-- ลำดับผู้พิจารณา -->
        <b-form-group
          id="form-group-room-approveres"
          label="ลำดับผู้พิจารณา "
          label-for="room-approveres"
        >
          <b-form-input
            type="text"
            id="room-approveres"
            placeholder="ลำดับผู้พิจารณา : "
            v-model="form.approveres"
            :state="validateApproveres"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateApproveres">
            ต้องมีมากกว่า 1 คน หรือ เท่ากับ 1
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบ -->
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
    room: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        buildingname: '',
        floor: '',
        capacity: '',
        equipment: '',
        approveres: ''
      },
      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.name !== '' && this.form.name.length >= 5
    },
    validateFloor () {
      return this.form.floor !== ''
    },
    validatePerson () {
      return this.form.capacity !== ''
    },
    validateEquipment () {
      return this.form.equipment !== ''
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
      this.$refs.modalRoom.show()
    },
    submit () {
      const room = JSON.parse(JSON.stringify(this.form))
      room.floor = parseFloat(room.floor)
      room.capacity = parseFloat(room.capacity)
      this.$emit('save', room)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        buildingname: '',
        floor: '',
        capacity: '',
        equipment: '',
        approveres: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.room._id
        this.form.name = this.room.name
        this.form.buildingname = this.room.buildingname
        this.form.floor = this.room.floor
        this.form.capacity = this.room.capacity
        this.form.equipment = this.room.equipment
        this.form.approveres = this.room.approveres
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
        this.$bvModal.hide('modal-room')
      })
    },
    validateForm () {
      return (
        this.validateName &&
        this.validateFloor &&
        this.validateCode &&
        this.validatePerson &&
        this.validateEquipment &&
        this.validateApproveres
      )
    }
  }
}
</script>
<style></style>
