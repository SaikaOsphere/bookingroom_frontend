<template>
  <div class="booking">
    <b-row style="margin-bottom: 30px">
      <h1 style="color: black">จองห้อง</h1>
    </b-row>
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
      <b-col>
        <b-button variant="primary" @click="filter()" v-if="!searched"
          >ค้นหา</b-button
        >
        <b-button variant="danger" @click="filter()" v-else>รีเซ็ต</b-button>
      </b-col>
      <b-col
        ><b-button variant="primary" to="/bookingHistory"
          >ประวัติการจอง</b-button
        ></b-col
      >
    </b-row>

    <b-row align-v="stretch">
      <b-table :items="rooms" :fields="fields">
        <template #cell(ลำดับ)="data">
          {{ data.index + 1 }}
        </template>

        <template #cell(อุปกรณ์)="data">
          <ul>
            <li
              v-for="(item, index) in rooms[data.index].equipment"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </template>

        <template #cell(การดำเนินการ)="{ item }">
          <b-button
            size="sm"
            class="mr-2"
            variant="info"
            @click="sending(item)"
            >รายละเอียด</b-button
          >
        </template>
      </b-table>
    </b-row>
  </div>
</template>
<script>
import api from '@/services/api'

export default {
  data () {
    return {
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
          key: 'code',
          label: 'รหัสห้อง'
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
          key: 'building.name',
          label: 'อาคาร'
        },
        'อุปกรณ์',
        // {
        //   key: 'institution',
        //   label: 'หน่วยงาน'
        // },
        'การดำเนินการ'
      ],
      rooms: [],
      allRooms: 0,
      filtered: {
        building: '',
        floor: '',
        type: '',
        size: '',
        coderoom: ''
      },
      equip: [],
      searched: false
    }
  },
  methods: {
    getฺRooms () {
      api.get('http://localhost:3000/rooms').then(
        function (response) {
          this.rooms = response.data
          console.log(this.rooms)
          this.allRooms = this.rooms.length
          this.getFloor(response)
          for (let i = 0; i < this.rooms.length; i++) {
            api
              .get(
                'http://localhost:3000/buildings/' + this.rooms[i].building._id
              )
              .then(
                function (response) {
                  this.rooms[i].building = response.data
                }.bind(this)
              )
          }
        }.bind(this)
      )
    },
    getFloor (response) {
      for (let i = 0; i < response.data.length; i++) {
        // Get floor list
        let sameFloor = false
        const floor = {
          text: response.data[i].floor,
          value: response.data[i].floor
        }
        this.filterFloor.forEach((element) => {
          if (element.value === response.data[i].floor) {
            sameFloor = true
          }
        })

        if (!sameFloor) {
          this.filterFloor.push(floor)
        }

        // Get building list
        let sameBuilding = false
        const build = {
          text: response.data[i].building.name,
          value: response.data[i].building.name
        }
        this.filterBuilding.forEach((element) => {
          if (element.value === response.data[i].building.name) {
            sameBuilding = true
          }
        })

        if (!sameBuilding) {
          this.filterBuilding.push(build)
        }
      }
    },
    filter () {
      this.searched = !this.searched
      if (
        this.filtered.building === '' &&
        this.filtered.floor === '' &&
        this.filtered.type === '' &&
        this.filtered.size === '' &&
        this.filtered.coderoom === ''
      ) {
        this.getฺRooms()
        // this.getEquipment()
      } else {
        console.log(this.filtered.size)
        if (this.rooms.length < this.allRooms) {
          this.getฺRooms()
          // this.getEquipment()
        }
        if (this.filtered.building !== '') {
          for (let i = 0; i < this.rooms.length; i++) {
            if (this.filtered.building !== this.rooms[i].building.name) {
              this.rooms.splice(i, 1)
              i--
            }
          }
        }
        if (this.filtered.floor !== '') {
          for (let i = 0; i < this.rooms.length; i++) {
            if (this.filtered.floor !== this.rooms[i].floor) {
              this.rooms.splice(i, 1)
              i--
            }
          }
        }
        if (this.filtered.size !== '') {
          for (let i = 0; i < this.rooms.length; i++) {
            if (this.filtered.size === 1) {
              if (this.rooms[i].capacity > 6) {
                this.rooms.splice(i, 1)
                i--
              }
            } else if (this.filtered.size === 2) {
              if (this.rooms[i].capacity < 7 || this.rooms[i].capacity > 15) {
                this.rooms.splice(i, 1)
                i--
              }
            } else if (this.filtered.size === 3) {
              if (this.rooms[i].capacity < 15) {
                this.rooms.splice(i, 1)
                i--
              }
            }
          }
        }
        if (this.filtered.coderoom !== '') {
          for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].code !== this.filtered.coderoom) {
              this.rooms.splice(i, 1)
              i--
            }
          }
        }
      }
    },
    resetFilter () {
      this.getฺRooms()
      this.filtered.building = ''
      this.filtered.floor = ''
      this.filtered.type = ''
      this.filtered.size = ''
      this.filtered.coderoom = ''
    },
    sending (item) {
      this.$store.dispatch('bookingRoom/sendRoom', item._id)
      this.$router.push({ path: '/bookingRoomDetail' })
    }
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.push({ path: '/' })
    } else {
      this.getฺRooms()
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    }
  }
}
</script>
<style>
.booking {
  padding: 0px 0px 0px 0px;
}

.b-table {
  margin-top: 20px;
  border-radius: 25px;
  background-color: white;
}

b-col,
b-row {
  border: 2px solid black;
}
</style>
