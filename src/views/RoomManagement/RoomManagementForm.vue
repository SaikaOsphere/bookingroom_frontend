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
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่อห้องต้องมีตัวอักษรมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- ชื่อตึก -->
        <b-form-group
          id="form-group-room-nameInstitution"
          label="ชื่อคณะ"
          label-for="room-nameInstitution"
        >
          <b-form-select
            type="text"
            id="room-nameInstitutionInstitution"
            placeholder="Faculty of Informatics"
            v-model="form.nameInstitution"
            :options="nameInstitutions"
            :state="validateInstitution"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validateInstitution">
            ต้องเลือก 1 คณะ
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อตึก -->

        <!-- ชื่อตึก -->
        <b-form-group
          id="form-group-room-name"
          label="ชื่อตึก"
          label-for="room-name"
        >
          <b-form-select
            type="text"
            id="room-name"
            placeholder="Faculty of Informatics"
            v-model="form.buildingname"
            :options="buildingnames"
            :state="validatebuilding"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validatebuilding">
            ต้องเลือก 1 ตึก
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบชื่อตึก -->

        <!-- ชั้นตึก -->
        <b-form-group
          id="form-group-room-floor"
          label="ชั้น"
          label-for="room-floor"
        >
          <b-form-select
            type="number"
            id="room-floor"
            placeholder="10 20 30"
            v-model="form.floor"
            :options="floors"
            :state="validateFloor"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validateFloor">
            เลือกชั้น
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
        <b-form-group label="รายการอุปกรณ์" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="form.equipment"
            :options="equipments"
            :aria-describedby="ariaDescribedby"
          ></b-form-checkbox-group>
        </b-form-group>
        <!-- <b-form-group
          id="form-group-room-equipment"
          label="รายการอุปกรณ์ "
          label-for="room-equipment"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            id="room-equipment"
            placeholder="รายการอุปกรณ์ : "
            v-model="form.equipment"
            :options="equipments"
            :aria-describedby="ariaDescribedby"
          > -->
          <!-- <b-form-checkbox value="TV"> TV</b-form-checkbox>
          <b-form-checkbox value="Projecter"> Projecter</b-form-checkbox>
          <b-form-checkbox value="Microphone"> Microphone</b-form-checkbox>
          <b-form-checkbox value="Presentation"> Presentation</b-form-checkbox> -->
          <!-- </b-form-checkbox-group>
        </b-form-group> -->
        <!-- จบ -->

        <!-- ลำดับผู้พิจารณา -->
        <b-form-group
          id="form-group-room-approveres"
          label="ลำดับผู้พิจารณา "
          label-for="room-approveres"
        >
          <b-form-select
            type="text"
            id="room-approveres"
            placeholder="ลำดับผู้พิจารณา : "
            v-model="form.approveres"
            :options="approver"
            :state="validateApproveres"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validateApproveres">
            ต้องเลือก 1 อัน
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- จบ -->
      </b-form>
      <b-card>
        <pre>
        {{ form }}
        {{ buildings }}
        {{ approveres }}
        {{ institutions }}
      </pre
        >
      </b-card>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: [
    { room: Object },
    { buildings: Object },
    { approveres: Object },
    { institutions: Object }
  ],
  data () {
    return {
      form: {
        _id: '',
        name: '',
        nameInstitution: '',
        buildingname: '',
        floor: '',
        capacity: '',
        equipment: [],
        approveres: ''
      },
      nameInstitutions: [
        { text: 'Select One', value: null },
        'Faculty of Informatics',
        'Faculty of Business Administration',
        'Faculty of Science',
        'Faculty of Health Sciences'
      ],
      buildingnames: [
        { text: 'Select One', value: null },
        'Faculty of Informatics',
        'Faculty of Business Administration',
        'Faculty of Science',
        'Faculty of Health Sciences',
        'Tamrong Buasri Building'
      ],
      floors: [
        { text: 'Select One', value: null },
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      approver: [
        { text: 'Select One', value: null },
        'approvers1',
        'approvers2',
        'approvers3',
        'approvers4'
      ],
      equipments: [
        { text: 'Television', value: 'television' },
        { text: 'Projecter', value: 'projecter' },
        { text: 'Microphone', value: 'microphone' },
        { text: 'Presentation', value: 'presentation' }
      ],
      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.name !== ''
    },
    validateInstitution () {
      return this.form.nameInstitution !== ''
    },
    validatebuilding () {
      return this.form.buildingname !== ''
    },
    validateFloor () {
      return this.form.floor !== ''
    },
    validatePerson () {
      return this.form.capacity !== ''
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
        nameInstitution: '',
        buildingname: '',
        floor: '',
        capacity: '',
        equipment: [],
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
        this.form.nameInstitution = this.room.nameInstitution
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
        this.validateInstitution &&
        this.validatebuilding &&
        this.validateFloor &&
        this.validatePerson &&
        this.validateApproveres
      )
    }
  }
}
</script>
<style></style>
