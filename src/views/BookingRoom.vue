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
          key: 'building',
          label: 'อาคาร'
        },
        {
          key: 'equipment',
          label: 'อุปกรณ์'
        },
        // {
        //   key: 'institution',
        //   label: 'หน่วยงาน'
        // },
        'การดำเนินการ'
      ],
      rooms: [],
      filtered: {
        building: '',
        floor: '',
        type: '',
        size: '',
        coderoom: ''
      },
      equip: []
    }
  },
  methods: {
    getEquipment () {
      api.get('http://localhost:3000/equipments').then(
        function (response) {
          this.equip = response.data
          console.log(response.data)

          for (let i = 0; i < this.rooms.length; i++) {
            let temp = ''
            for (let j = 0; j < this.rooms[i].equipment.length; j++) {
              for (let k = 0; k < this.equip.length; k++) {
                if (this.rooms[i].equipment[j] === this.equip[k]._id) {
                  temp += this.equip[k].name
                  if (k < this.equip.length - 1) {
                    temp += ', '
                  }
                }
              }
            }
            // console.log(temp)
            this.rooms[i].equipment = temp
          }

          console.log(this.rooms)
        }.bind(this)
      )
    },
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
          this.rooms = response.data
          console.log(this.rooms)
          this.getFloor(response)
          for (let i = 0; i < this.rooms.length; i++) {
            api
              .get('http://localhost:3000/buildings/' + this.rooms[i].building)
              .then(
                function (response) {
                  this.rooms[i].building = response.data.name
                }.bind(this)
              )
          }
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
      if (
        this.filtered.building === '' &&
        this.filtered.floor === '' &&
        this.filtered.type === '' &&
        this.filtered.size === '' &&
        this.filtered.coderoom === ''
      ) {
        this.getฺRooms()
        this.getBuildings()
        this.getEquipment()
      }
      console.log(this.filtered)
      console.log(this.rooms)
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
      this.getBuildings()
      this.getEquipment()
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

b-col,
b-row {
  border: 2px solid black;
}
</style>
