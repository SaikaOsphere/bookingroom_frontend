<template>
  <div>
    <b-row style="margin-bottom: 30px">
      <h1>เลือกเวลา</h1>
    </b-row>
    <b-row>
      <!-- <b-col>
        <b-row>
          <b-col cols="4">จำนวนคนที่รองรับ (คน)</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.capacity" disabled>
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">ชั้น</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.floor" disabled> </b-form-input>
          </b-col>
        </b-row>
      </b-col> -->
      <b-col cols="4">
        <b-row>
          <b-col cols="4">จำนวนคนที่รองรับ (คน)</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.capacity" disabled>
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">ชั้น</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.floor" disabled> </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="4">ตึก</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.building" disabled>
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-col>เวลาเริ่ม</b-col
            ><b-col>
              <b-form-datepicker
                id="example-datepicker"
                v-model="detailRoom.date"
                @input="addEvent()"
                class="mb-2"
              ></b-form-datepicker
            ></b-col>
          </b-col>
          <b-col>
            <b-col>เวลาเริ่ม</b-col>
            <b-col>
              <b-form-timepicker
                v-model="detailRoom.timeStart"
                @input="addEvent()"
                locale="en"
              ></b-form-timepicker>
            </b-col>
          </b-col>
          <b-col>
            <b-col>เวลาสิ้นสุด</b-col>
            <b-col>
              <b-form-timepicker
                v-model="detailRoom.timeEnd"
                @input="addEvent()"
                locale="en"
              ></b-form-timepicker>
            </b-col>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row
      ><b-col cols="10">
        <b-alert
          variant="danger"
          dismissible
          fade
          :show="alerted"
          @dismissed="alerted = false"
          >กรุณากรอกข้อมูลให้ครบ</b-alert
        > </b-col
      ><b-col
        ><b-button variant="danger" to="/booking">ยกเลิก</b-button>
        <b-button variant="primary" @click="sendToFormDetail()">ตกลง</b-button>
      </b-col></b-row
    >
    <b-row>
      <vue-cal
        :locale="th"
        active-view="week"
        :events="events"
        @ready="ready($event)"
        style="margin: 30px 0px 30px 0px"
      />
    </b-row>
  </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import th from '@/locale/th'
// import getEvents from '@/services/event'
import api from '@/services/api'

export default {
  data () {
    return {
      added: false,
      alerted: false,
      detailRoom: {
        // typeRoom: 'TestType',
        // sizeRoom: 0,
        capacity: 0,
        floor: 0,
        building: '',
        date: '',
        timeStart: '',
        timeEnd: ''
      },
      fields: [
        // 'ประเภทห้อง',
        // 'ขนาดห้อง',
        'จำนวนคนที่รองรับ',
        'ชั้น',
        'ตึก',
        'เวลา'
      ],
      items: [
        {
          isActive: true,
          ลำดับ: 1,
          // ประเภทห้อง: 'ห้องประชุม',
          // ขนาดห้อง: 'ใหญ่',
          จำนวนคนที่รองรับ: 200,
          ชั้น: 5,
          ตึก: 'ดูไบทาวเวอร์',
          เวลา: '00:00'
        }
      ],
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      title: '',
      content: '',
      class: '',
      events: [
        {
          start: '',
          end: '',
          title: ''
        }
      ]
    }
  },
  methods: {
    backToBooking () {
      this.$store.dispatch('bookingRoom/reset')
      this.$router.push({ path: '/booking' })
    },
    sendToFormDetail () {
      if (
        this.detailRoom.date === '' ||
        this.detailRoom.timeStart === '' ||
        this.detailRoom.timeEnd === ''
      ) {
        this.alerted = true
      } else {
        const dataTime = {
          date: this.detailRoom.date,
          timeStart: this.detailRoom.timeStart,
          timeEnd: this.detailRoom.timeEnd
        }
        this.$store.dispatch('bookingRoom/sendTime', dataTime)
        this.$router.push({ path: '/bookingRoomConfirm' })
      }
    },
    getBuilding () {
      api.get('http://localhost:3000/buildings/').then(
        function (response) {
          console.log('data')
          console.log(this.detailRoom.building)
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            if (this.detailRoom.building === response.data[i]._id) {
              this.detailRoom.building = response.data[i].name
              return
            }
          }
        }.bind(this)
      )
    },
    getRoom () {
      api.get('http://localhost:3000/rooms/' + this.$store.state.idRoom).then(
        function (response) {
          console.log(response)
          this.detailRoom.capacity = response.data.capacity
          this.detailRoom.floor = response.data.floor
          this.detailRoom.building = response.data.building
        }.bind(this)
      )
    },
    addEvent ($event) {
      if (
        this.detailRoom.timeStart !== '' &&
        this.detailRoom.timeEnd !== '' &&
        this.detailRoom.date !== ''
      ) {
        api.get('http://localhost:3000/users/' + this.getCurrentUser._id).then(
          function (response) {
            const event = {
              start: new Date(
                this.detailRoom.date + ' ' + this.detailRoom.timeStart
              ),
              end: new Date(
                this.detailRoom.date + ' ' + this.detailRoom.timeEnd
              ),
              title: response.data.username + '(กำลังจอง)'
            }
            if (!this.added) {
              this.events.push(event)
              this.added = true
            } else {
              this.events.pop()
              this.events.push(event)
            }
          }.bind(this)
        )
      }
    },
    ready (e) {
      api
        .get('http://localhost:3000/bookings')
        .then(
          function (response) {
            for (let i = 0; i < response.data.length; i++) {
              const trackedUser = response.data[i]

              api.get('http://localhost:3000/users/' + trackedUser.user).then(
                function (response) {
                  if (trackedUser.room === this.$store.state.idRoom) {
                    const newEvent = {
                      start: new Date(trackedUser.datetime_start),
                      end: new Date(trackedUser.datetime_end),
                      title: response.data.username
                    }
                    this.events.push(newEvent)
                  }
                }.bind(this)
              )
            }
          }.bind(this)
        )
        .bind(this)
    }
  },
  computed: {
    th () {
      return th
    },
    isLogin () {
      return this.$store.getters['auth/isLogin']
    },
    getCurrentUser () {
      return this.$store.state.auth.user
    }
  },
  components: {
    VueCal
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.push({ path: '/' })
    } else {
      if (this.$store.state.idRoom === undefined) {
        this.$router.push({ path: '/booking' })
      } else {
        this.getRoom()
        this.getBuilding()
      }
    }
  }
}
</script>
<style>
.vuecal__now-line {
  color: #06c;
}
.vuecal__event {
  background-color: rgba(66, 153, 253, 0.9);
  border: 1px solid rgb(0, 0, 0);
  color: #fff;
}
.vuecal__event.a {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.video_time {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
</style>
