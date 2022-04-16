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
          id="form-group-room-code"
          label="ชื่อห้อง "
          label-for="room-code"
        >
          <b-form-input
            type="text"
            id="room-code"
            placeholder="IF,K,Q,AH"
            v-model="form.code"
            :state="validateName"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่อห้องต้องมีตัวอักษรมากกว่าหรือเท่ากับ 5 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- คณะ -->
        <b-form-group
          id="form-group-room-institution"
          label="ชื่อคณะ"
          label-for="room-institution"
        >
          <b-form-select
            type="text"
            id="room-nameInstitutionInstitution"
            v-model="form.institution"
            :options="institutions"
            value-field="_id"
            text-field="name"
            :state="validateInstitution"
          >
          </b-form-select>
          <b-form-invalid-feedback :state="validateInstitution">
            ต้องเลือก 1 คณะ
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- คณะ -->

        <!-- ชื่อตึก -->
        <b-form-group
          id="form-group-room-code"
          label="ชื่อตึก"
          label-for="room-code"
        >
          <b-form-select
            type="text"
            id="room-code"
            placeholder="Faculty of Informatics"
            v-model="form.building"
            text-field="name"
            value-field="_id"
            :options="buildings"
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
            :options="getFloorByBuildings(form.building)"
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
            text-field="name"
            value-field="_id"
            value="name"
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
            :options="approveres"
            text-field="name"
            value-field="_id"
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
          ชื่อคณะ {{ form.institution }}
          ชื่อตึก {{ form.building }}
          ชั้น {{ form.floor }}
          อุปกณ์ {{form.equipment}}
          ผู้พิจารณา {{form.approveres}}
          approveres
          {{ approveres }}
          institutions
          {{ institutions }}
        </pre>
      </b-card>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    room: Object,
    buildings: Array,
    approveres: Array,
    institutions: Array,
    equipments: Array
  },
  // { room: Object },
  // { buildings: Object },
  // { approveres: Object },
  // { institutions: Object }
  data () {
    return {
      form: {
        _id: '',
        code: '',
        institution: '',
        building: '',
        floor: '',
        capacity: '',
        equipment: [],
        approveres: ''
      },
      approver: [
        { text: 'Select One', value: null },
        'approvers1',
        'approvers2',
        'approvers3',
        'approvers4'
      ],

      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.code !== ''
    },
    validateInstitution () {
      return this.form.institution !== ''
    },
    validatebuilding () {
      return this.form.building !== ''
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
    getFloorByBuildings (buildingId) {
      if (buildingId !== '') {
        const building = this.buildings.find((item) => item._id === buildingId)
        const floors = []
        console.log('building', building.floor)
        for (let i = 1; i <= building.floor; i++) {
          floors.push(i)
        }
        return floors
      } else {
        return []
      }
    },
    // fliterNameInstitutions () {
    //   for (let i = 0; i < this.institutions.length; i++) {
    //     const institution = {
    //       text: this.institutions[i].name,
    //       value: this.institutions[i].name
    //     }
    //     console.log(institution)
    //     this.institutionsName.push(institution)
    //   }
    // },
    // fliterNameBuildings () {
    //   for (let i = 0; i < this.buildings.length; i++) {
    //     const building = {
    //       text: this.buildings[i].name,
    //       value: this.buildings[i].name
    //     }
    //     // console.log(buildings)
    //     this.buildingsName.push(building)
    //   }
    // },
    show () {
      // this.fliterNameInstitutions()
      // this.fliterNameBuildings()
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
        code: '',
        institution: '',
        building: '',
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
        this.form.code = this.room.code
        this.form.institution = this.room.institution
        this.form.building = this.room.building
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
