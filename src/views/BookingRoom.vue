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
                :options="filterFloor"
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
                :options="filterType"
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
                :options="filterSize"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col
        ><b-col cols="6">รหัสห้อง</b-col
        ><b-col>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input> </b-form-input>
          </b-form-group> </b-col
      ></b-col>
      <b-col><b-button variant="primary" type="submit">ค้นหา</b-button></b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-table :items="rooms" :fields="fields">
        <template #cell(ลำดับ)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(การดำเนินการ)>
          <b-button size="sm" class="mr-2" to="/bookingRoomDetail"
            >รายละเอียด</b-button
          >
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
      filterBuilding: [{ text: 'กรุณาเลือก', value: '' }],
      filterFloor: [{ text: 'กรุณาเลือก', value: '' }],
      filterType: [{ text: 'กรุณาเลือก', value: '' }],
      filterSize: [{ text: 'กรุณาเลือก', value: '' }],
      fields: [
        'ลำดับ',
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
        },
        'การดำเนินการ'
      ],
      rooms: []
    }
  },
  methods: {
    getฺRooms () {
      axios.get('http://localhost:3000/rooms').then(
        function (response) {
          console.log(response)
          this.rooms = response.data
          this.getFloor(response)
        }.bind(this)
      )
    },
    getFloor (response) {
      for (let i = 0; i < response.data.length; i++) {
        let same = false
        const floor = {
          text: response.data[i].floor,
          value: response.data[i].floor
        }
        this.filterFloor.forEach((element) => {
          if (element.value === response.data[i].floor) {
            same = true
          }
        })

        if (!same) {
          this.filterFloor.push(floor)
        }
      }
    },
    getBuildings () {
      axios.get('http://localhost:3000/buildings').then(
        function (response) {
          for (let i = 0; i < response.data.length; i++) {
            const building = {
              text: response.data[i].name,
              value: response.data[i].name
            }
            this.filterBuilding.push(building)
          }
        }.bind(this)
      )
    }
  },
  mounted () {
    this.getฺRooms()
    this.getBuildings()
  }
}
</script>
<style>
.booking {
  padding: 0px 0px 0px 0px;
}

b-col,
b-row {
  border: 2px solid black;
}
</style>
