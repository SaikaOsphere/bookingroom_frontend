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
                v-model="filtered.building"
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
                v-model="filtered.floor"
                :options="filterFloor"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col>
        <b-row
          ><b-col cols="4">ขนาดห้อง</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="filtered.size"
                :options="filterSize"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
        <b-row>
          <b-col cols="4">รหัสห้อง</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-input> </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        ><b-button variant="primary" @click="filter()">ค้นหา</b-button></b-col
      >
    </b-row>

    <b-row align-v="stretch">
      <b-table :items="rooms" :fields="fields">
        <template #cell(ลำดับ)="data">
          {{ data.index + 1 }}
        </template>
        <!-- <template #cell(building)="data">
          {{ test }} //{{ getBuildingsName(data.value) }}
          55555
        </template> -->
        <template #cell(การดำเนินการ)="{ item }">
          <b-button size="sm" class="mr-2" @click="sending(item)"
            >รายละเอียด</b-button
          >
        </template>
      </b-table>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>
<script>
import api from '@/services/api'

export default {
  data () {
    return {
      test3: [],
      test: '',
      filterBuilding: [{ text: 'กรุณาเลือก', value: '' }],
      filterFloor: [{ text: 'กรุณาเลือก', value: '' }],
      filterType: [
        { text: 'กรุณาเลือก', value: '' },
        { text: 'ห้องประชุม', value: '' },
        { text: 'ห้องเรียน', value: '' },
        { text: 'ห้องโถง', value: '' }
      ],
      filterSize: [
        { text: 'กรุณาเลือก', value: '' },
        { text: 'เล็ก (ไม่เกิน 6 คน)', value: 1 },
        { text: 'กลาง (ตั้งแต่ 6 คนจนถึง 15 คน)', value: 2 },
        { text: 'ใหญ่ (ตั้งแต่ 15 คนขึ้นไป)', value: 3 }
      ],
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
      rooms: [],
      filtered: {
        building: '',
        floor: '',
        type: '',
        size: '',
        coderoom: ''
      }
    }
  },
  methods: {
    getฺBuildingName (id) {
      api
        .get('http://localhost:3000/buildings/' + id)
        .then(function (response) {
          console.log(response.data.name)
          this.test = response.data.name
        })
        .bind(this)
    },
    getฺRooms () {
      api.get('http://localhost:3000/rooms').then(
        function (response) {
          // console.log(response.data)
          this.rooms = response.data
          // this.rooms[0].building = '111'
          this.getFloor(response)
          for (let i = 0; i < this.rooms.length; i++) {
            api
              .get('http://localhost:3000/buildings/' + this.rooms[i].building)
              .then(
                function (response) {
                  // console.log(response.data.name)
                  this.rooms[i].building = response.data.name
                }.bind(this)
              )
          }
        }.bind(this)
      )
      for (let i = 0; i < this.rooms.length; i++) {
        // const temp = []
        for (let j = 0; j < this.rooms[i].equipment.length; j++) {
          api
            .get(
              'http://localhost:3000/equipments/' + this.rooms[i].equipment[j]
            )
            .then(function (response) {
              // console.log(response.data.name)
              this.test3.push(response.data.name)
              console.log(this.test3)
              // this.rooms[i].equipment.pop()
              // this.rooms[i].equipment.push(response.data.name)
              // this.rooms[i].equipment[j] = 'eoeo'
            })
        }
        // console.log(i)
        // console.log(temp)
        // this.rooms[i].equipment = []
        this.rooms[i].equipment = this.test3
        // console.log(this.rooms[i].equipment)
      }
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
      api.get('http://localhost:3000/buildings').then(
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
    },
    filter () {
      console.log('Sended')
      console.log(this.filtered)
      console.log(this.rooms)
    },
    sending (item) {
      console.log(item._id)
      // this.$store.commit('setItem', item._id)
      this.$store.dispatch('bookingRoom/sendRoom', item._id)
      // console.log('hello' + this.$store.state.item)
      this.$router.push({ path: '/bookingRoomDetail' })
    },
    testEq () {}
  },
  mounted () {
    this.getฺRooms()
    this.testEq()
    this.getBuildings()
  },
  computed: {
    test2 (text) {
      this.getBuildingsName(text)
      return this.test
    }
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
