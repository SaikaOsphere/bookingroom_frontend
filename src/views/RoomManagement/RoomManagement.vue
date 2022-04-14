<template>
  <div>
    <b-button size="sm" class="mr-2" style="float:right;" to="/addRoomManagement">เพิ่ม</b-button>
    <b-table :items="items" :fields="fields" striped responsive="sm">
       <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(ดำเนินการ)>
        <b-button size="sm" class="mr-2" to="/editRoomManagement">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" to="/deleteRoomManagement">ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'

export default {
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
