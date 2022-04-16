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
        <!-- คณะ -->
        <b-form-group
          id="form-group-room-institution"
          label="ชื่อคณะ"
          label-for="room-institution"
        >
        <!-- อันใหม่ -->
          <b-form-select v-model="form.institution"  :state="validateInstitution">
            <option v-for="f in institutions" :value="f" :key="f.id" id="room-nameInstitutionInstitution">
              {{ f.name }}
            </option>
          </b-form-select>
        <!-- อันใหม่ -->

          <!-- อันเดิม -->
          <!-- <b-form-select
            type="text"
            id="room-nameInstitutionInstitution"
            v-model="form.institution"
            :options="institutions"
            value-field="institutions{}"
            text-field="name"
            :state="validateInstitution"
          >
          </b-form-select> -->
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
            :options="buildings"
            text-field="name"
            value-field="_id"
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
        <b-form-group label="รายการอุปกรณ์">
          <multiselect
            type="text"
            v-model="form.equipment"
            :options="equipments"
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
                >{{ values.length }} อุปกรณ์ ถูกเลือกแล้ว</span
              ></template
            >
          </multiselect>
        </b-form-group>
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
            :options="getApproveresByInstitution(form.institution)"
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
          จำนวนคนที่รองรับ {{ form.capacity }}
          ชื่อตึก {{ form.building }}
          ชื่อคณะ {{ form.institution }}
          ชั้น {{ form.floor }}
          ชื่อห้อง {{ form.code }}
          ผู้พิจารณา {{ form.approveres }}
          อุปกรณ์ {{ form.equipment }}
        </pre>
      </b-card>
    </b-modal>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
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
        equipment: '',
        approveres: ''
      },
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
    getApproveresByInstitution (institutionId) {
      if (this.validateInstitution) {
        // ค้นหา approveres ที่ตรงกันกับ institutionId
        const approveresMatch = this.approveres.filter(
          (item) => item.institution._id === institutionId
        )
        console.log(approveresMatch)
        return approveresMatch
      }
    },
    getFloorByBuildings () {
      if (this.validatebuilding) {
        // หาตึกที่เลือก
        const building = this.buildings.find(
          (item) => item._id === this.form.building
        )

        console.log('building', building)
        const floors = []
        for (let i = 1; i <= building.floor; i++) {
          floors.push(i)
        }
        return floors
      } else {
        console.log(this.validatebuilding)
        return []
      }
    },
    show () {
      this.$refs.modalRoom.show()
    },
    submit () {
      const room = JSON.parse(JSON.stringify(this.form))
      console.log(room)
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
        equipment: '',
        approveres: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        console.log('room', this.room)
        this.form._id = this.room._id
        this.form.code = this.room.code
        this.form.institution = this.room.institution._id
        this.form.building = this.room.building._id
        this.form.floor = this.room.floor
        this.form.capacity = this.room.capacity
        this.form.equipment = this.room.equipment
        this.form.approveres = this.room.approveres._id
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
