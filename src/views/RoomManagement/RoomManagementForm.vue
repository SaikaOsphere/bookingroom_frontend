<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่มห้อง</b-button>
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
            placeholder="ชื่อ : ชื่อห้อง "
            v-model="form.name"
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="form-group-building-name"
          label="ชื่อตึก "
          label-for="building-name"
        >
          <b-form-input
            type="text"
            id="building-name"
            placeholder="ชื่อตึก : Informatics... "
            v-model="form.buildingname"
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="form-group-building-floor"
          label="ชั้น "
          label-for="building-floor"
        >
          <b-form-input
            type="text"
            id="building-floor"
            placeholder="ชั้น : "
            v-model="form.floor"
          >
          </b-form-input>
        </b-form-group>

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
          >
          </b-form-input>
        </b-form-group>

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
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="form-group-room-approveres"
          label="รายการอุปกรณ์ "
          label-for="room-approveres"
        >
          <b-form-input
            type="text"
            id="room-approveres"
            placeholder="ลำดับผู้พิจารณา : "
            v-model="form.approveres"
          >
          </b-form-input>
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
      return this.form.name.length >= 3
    },
    validateForm () {
      return this.validateName
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
      // if (!this.validateForm) return
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-room')
      })
    }
  }
}
</script>
<style></style>
