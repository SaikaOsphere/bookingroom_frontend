<template>
  <div class="booking">
    <!-- <b-container> -->
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="4"> ตึก </b-col>
          <b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="filterBuilding"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
        <b-row
          ><b-col cols="4">ชั้น</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="filterBuilding"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col>
        <b-row
          ><b-col cols="4">ประเภท</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="filterBuilding"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
        <b-row
          ><b-col cols="4">ขนาดห้อง</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="filterBuilding"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col
        ><b-col cols="6">รหัสห้อง</b-col
        ><b-col>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="test"
              :options="filterBuilding"
              required
            ></b-form-select>
          </b-form-group> </b-col
      ></b-col>
      <b-col><b-button variant="primary" type="submit">ค้นหา</b-button></b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-table :items="rooms" :fields="fields">
        <template #cell(ดำเนินการ)>
          <b-button size="sm" class="mr-2" to="/bookingRoomDetail">รายละเอียด</b-button>
        </template>
      </b-table>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      test: '',
      filterBuilding: [
        { text: 'กรุณาเลือก', value: '' }
      ],
      fields: [
        {
          key: '_id',
          label: 'ไอดี'
        },
        {
          key: 'capacity',
          label: 'จำนวนคนที่รองรับ'
        },
        {
          key: 'floor',
          label: 'ชั้น'
        },
        {
          key: 'building',
          label: 'อาคาร'
        },
        {
          key: 'equipment',
          label: 'อุปกรณ์'
        },
        {
          key: 'approveres',
          label: 'การอนุมัติ'
        },
        {
          key: '',
          label: 'รายละเอียด'
        }
      ],
      rooms: [
        // {
        //   isActive: true,
        //   ลำดับ: 1,
        //   โค้ดห้อง: 'IL-3L03',
        //   อุปกรณ์: ['โปรเจคเตอร์', 'กระดาน'],
        //   ตึก: '',
        //   จำนวนคนที่รองรับ: 5,
        //   ดำเนินการ: ''
        // }
      ]
    }
  },
  methods: {
    getฺRooms () {
      axios.get('http://localhost:3000/rooms').then(function (response) {
        console.log(response)
        this.rooms = response.data
      }.bind(this))
    }
  },
  mounted () {
    this.getฺRooms()
  }
}
</script>
<style>
.screen {
  padding-left: 10%;
  padding-right: 10%;
}

b-col,
b-row {
  border: 2px solid black;
}
</style>
