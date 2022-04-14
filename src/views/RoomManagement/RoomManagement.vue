<template>
  <div>
      <b-row>
        <b-col class="text-right">
          <roomManagementForm
            :RoomManagement="selectedItem"
            ref="roomManagementForm"
            @save="saveRoomManagement"
          ></roomManagementForm>
        </b-col>
      </b-row>
      <h1>การจัดการห้อง</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
       <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(ดำเนินการ)>
        <b-button size="sm" class="mr-2" >เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" >ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import roomManagementForm from './RoomManagementForm.vue'

export default {
  components: {
    roomManagementForm
  },
  data () {
    return {
      fields: [
        { key: '_id', label: 'ลำดับ' },
        { key: 'code', label: 'ชื่อห้อง' },
        { key: 'building', label: 'ตึก' },
        { key: 'floor', label: 'ชั้น' },
        { key: 'capacity', label: 'จำนวนคนที่รองรับ' },
        { key: 'equipment', label: 'รายการอุปกรณ์' },
        { key: 'approveres', label: 'ลำดับผู้พิจารณา' },
        'ดำเนินการ'],
      items: []
    }
  },
  methods: {
    getRoomManagement () {
      api.get('http://localhost:3000/rooms').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    }
  },
  mounted () {
    this.getRoomManagement()
  }
}
</script>
