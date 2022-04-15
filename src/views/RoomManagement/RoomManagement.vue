<template>
  <div>
      <b-row>
        <b-col class="text-right">
          <RoomManagementForm
            :room="selectedItem"
            ref="roomManagementForm"
            @save="saveRoomManagement"
          ></RoomManagementForm>
        </b-col>
      </b-row>
      <h1>การจัดการห้อง</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
       <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(ดำเนินการ)>
        <b-button size="sm" class="mr-2" variant="info" @click = "edit(data.item)">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" variant="danger" @click = "deleteItem(data.item)">ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import RoomManagementForm from './RoomManagementForm.vue'

export default {
  components: {
    RoomManagementForm
  },
  data () {
    return {
      fields: [
        { key: '_id', label: 'ลำดับ' },
        { key: 'code', label: 'ชื่อห้อง' },
        { key: 'capacity', label: 'จำนวนคนที่รองรับ' },
        { key: 'building', label: 'ตึก' },
        { key: 'floor', label: 'ชั้น' },
        { key: 'equipment', label: 'รายการอุปกรณ์' },
        { key: 'approveres', label: 'ลำดับผู้พิจารณา' },
        'ดำเนินการ'],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getRoomManagement () {
      api.get('http://localhost:3000/rooms').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveRoomManagement (room) {
      // console.log('Submit', room)
      if (room._id === '') {
        api.post('http://localhost:3000/rooms', room).then(
          function (response) {
            this.getRoomManagement()
          }.bind(this)
        ).catch(() => {
        })
      } else {
        api.put('http://localhost:3000/rooms/' + room._id, room).then(
          function (response) {
            this.getRoomManagement()
          }.bind(this))
      }
    },
    /* ------------------------ edit ------------------------ */
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item.name))
      // !- ทำ nextTick เพราะ state ยังไม่ได้ถูก load ทำให้error ต้องใช้ nextTick
      this.$nextTick(() => {
        this.$refs.roomForm.show()
      })
    }, /* ----------------------- delete ----------------------- */

    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบตึกชื่อ ${item.name} จริงเปล่า ?`)) {
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
  }
}
</script>
