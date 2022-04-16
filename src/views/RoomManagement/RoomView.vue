<template>
  <div>
    <h1>การจัดการห้อง</h1>

    <b-row>
      <b-col class="text-right">
        <RoomForm
          :room="selectedItem"
          :approveres="approveres"
          :buildings="buildings"
          :institutions="institutions"
          :equipments="equipments"
          ref="roomForm"
          @save="saveRoomManagement"
        ></RoomForm>
      </b-col>
    </b-row>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(รายการอุปกรณ์)="data">
        <ul>
          <li v-for="(item, index) in items[data.index].equipment" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </template>

      <template #cell(ดำเนินการ)="data">
        <b-button size="sm" class="mr-2" variant="info" @click="edit(data.item)"
          >เเก้ไข</b-button
        >
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click="deleteItem(data.item)"
          >ลบ</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import RoomForm from './RoomForm.vue'

export default {
  components: {
    RoomForm

  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'code', label: 'ชื่อห้อง' },
        { key: 'capacity', label: 'จำนวนคนที่รองรับ' },
        { key: 'building.name', label: 'ตึก' },
        { key: 'floor', label: 'ชั้น' },
        'รายการอุปกรณ์',
        { key: 'approveres.name', label: 'ชื่อลำดับผู้พิจารณา' },
        { key: 'institution.name', label: 'คณะ' },
        'ดำเนินการ'
      ],
      approveres: [],
      institutions: [],
      buildings: [],
      items: [],
      selectedItem: null,
      equipments: []
    }
  },
  methods: {
    getRoomManagement () {
      api.get('http://localhost:3000/rooms').then(
        function (response) {
          console.log(response)
          this.items = response.data
        }.bind(this)
      )
    },
    getApprovers () {
      // ดึงผู้พิจารณา
      api.get('http://localhost:3000/approveres').then(
        function (response) {
          this.approveres = response.data
        }.bind(this)
      )
    },
    getInstitutions () {
      // ดึงคณะ
      api.get('http://localhost:3000/institutions').then(
        function (response) {
          this.institutions = response.data
        }.bind(this)
      )
    },
    getBuildings () {
      // ดึงตึก
      api.get('http://localhost:3000/buildings').then(
        function (response) {
          this.buildings = response.data
        }.bind(this)
      )
    },
    getEquipments () {
      // ดึงอุปกรณ์
      api.get('http://localhost:3000/equipments').then(
        function (response) {
          this.equipments = response.data
        }.bind(this)
      )
    },
    saveRoomManagement (room) {
      // console.log('Submit', room)
      if (room._id === '') {
        api
          .post('http://localhost:3000/rooms', room)
          .then(
            function (response) {
              this.getRoomManagement()
            }.bind(this)
          )
          .catch(() => {})
      } else {
        api.put('http://localhost:3000/rooms/' + room._id, room).then(
          function (response) {
            this.getRoomManagement()
          }.bind(this)
        )
      }
    },
    /* ------------------------ edit ------------------------ */
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      // !- ทำ nextTick เพราะ state ยังไม่ได้ถูก load ทำให้error ต้องใช้ nextTick
      this.$nextTick(() => {
        this.$refs.roomForm.show()
      })
    } /* ----------------------- delete ----------------------- */,

    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบห้องชื่อ ${item.code} จริงหรือเปล่า ?`)) {
        api.delete('http://localhost:3000/rooms/' + item._id).then(
          function (response) {
            this.getRoomManagement()
          }.bind(this)
        )
      }
    }
  },
  mounted () {
    this.getRoomManagement()
    this.getApprovers()
    this.getInstitutions()
    this.getBuildings()
    this.getEquipments()
  }
}
</script>
