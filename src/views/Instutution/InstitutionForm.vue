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
        <b-form-group
          id="form-group-building-name"
          label="ชื่อตึก"
          label-for="building-name"
        >
          <b-form-input
            type="text"
            id="building-name"
            placeholder="ชื่อตึก Informatics..."
            v-model="form.name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-group-building-rooms"
          label="ห้อง"
          label-for="building-rooms"
        >
          <b-form-input
            type="text"
            id="building-rooms"
            placeholder="xx"
            v-model="form.rooms"
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
    building: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        rooms: []
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
      this.$refs.modalBuilding.show()
    },
    submit () {
      const building = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', building)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        rooms: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.building._id
        this.form.name = this.building.name
        this.form.rooms = this.building.rooms
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-building')
      })
    }
  }
}
</script>
<style></style>
