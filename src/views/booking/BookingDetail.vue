<template>
  <div>
    <b-row style="margin-bottom: 30px">
      <h1>รายละเอียดเพิ่มเติม</h1>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="5">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.name" disabled> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">ห้องที่จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.room" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">วันที่จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.date" disabled> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">เวลาเริ่ม</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.timeStart" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">เวลาสิ้นสุด</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.timeEnd" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="data">
      <b-col
        ><b-button variant="danger" to="/bookingRoomDetail">ยกเลิก</b-button>

        <b-button
          variant="primary"
          id="show-btn"
          @click="$bvModal.show('modal-confirmbooking')"
          >ยืนยัน</b-button
        >

        <b-modal id="modal-confirmbooking" @ok="saveBooking">
          <template #modal-title> ยืนยันการจองห้อง </template>
          <b-row>
            <b-col class="data">
              <b-row>ชื่อ-นามสกุล</b-row>
              <b-row>
                <b-form-input v-model="bookingDetail.name" disabled>
                </b-form-input>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="data">
              <b-row>ห้องที่จอง</b-row>
              <b-row>
                <b-form-input v-model="bookingDetail.room" disabled>
                </b-form-input>
              </b-row>
            </b-col>
            <b-col class="data">
              <b-row>วันที่จอง</b-row>
              <b-row>
                <b-form-input v-model="bookingDetail.date" disabled>
                </b-form-input>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="data">
              <b-row>เวลาเริ่ม</b-row>
              <b-row>
                <b-form-input v-model="bookingDetail.timeStart" disabled>
                </b-form-input>
              </b-row>
            </b-col>
            <b-col class="data">
              <b-row>เวลาสิ้นสุด</b-row>
              <b-row>
                <b-form-input v-model="bookingDetail.timeEnd" disabled>
                </b-form-input>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from '@/services/api'
export default {
  data () {
    return {
      bookingDetail: {
        name: '',
        room: '',
        date: '',
        timeStart: '',
        timeEnd: ''
      },
      formSend: {
        user: {},
        datetime_reserve: '',
        room: {},
        datetime_start: '',
        datetime_end: ''
      }
    }
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.push({ path: '/' })
    } else {
      if (
        this.$store.state.datetime === undefined ||
        this.$store.state.idRoom === undefined
      ) {
        this.$router.push({ path: '/booking' })
      } else {
        this.getRecentData()
        this.getRoom()
        this.getUser()
        this.sendToDB()
      }
    }
  },
  methods: {
    saveBooking (evt) {
      evt.preventDefault()

      api.post('http://localhost:3000/bookings', this.formSend).then(
        function (response) {
          console.log('booking', response)
          // if (response.status === 201) {
          //   alert('จองสำเร็จ')
          //   this.$router.push({ path: '/home' })
          //   this.$nextTick(() => {
          //     this.$bvModal.hide('modal-confirmbooking')
          //   })
          // }
        }
        // .bind(this))
        // .catch((e) => {
        //   alert('จองไม่สำเร็จ')
        // }
      )
      this.$router.push({ path: '/home' })
      this.$nextTick(() => {
        this.$bvModal.hide('modal-confirmbooking')
      })
    },
    sendToDB () {
      this.formSend.datetime_reserve = new Date(Date.now())
      this.formSend.datetime_start = new Date(
        this.bookingDetail.date + ' ' + this.bookingDetail.timeStart
      )
      this.formSend.datetime_end = new Date(
        this.bookingDetail.date + ' ' + this.bookingDetail.timeEnd
      )
    },
    getUser () {
      api.get('http://localhost:3000/users/' + this.getCurrentUser._id).then(
        function (response) {
          this.bookingDetail.name =
            response.data.name + ' ' + response.data.surname
          this.formSend.user = response.data
          this.$store.dispatch('bookingRoom/sendDataUser', response.data)
        }.bind(this)
      )
    },
    getRoom () {
      api.get('http://localhost:3000/rooms/' + this.$store.state.idRoom).then(
        function (response) {
          this.bookingDetail.room = response.data.code
          this.formSend.room = response.data
          this.$store.dispatch('bookingRoom/sendDataRoom', response.data)
        }.bind(this)
      )
    },
    getRecentData () {
      this.bookingDetail.date = this.$store.state.datetime.date
      this.bookingDetail.timeStart = this.$store.state.datetime.timeStart
      this.bookingDetail.timeEnd = this.$store.state.datetime.timeEnd
      // this.formSend.datetime_start = this.$store.state.datetime.timeStart
      // this.formSend.datetime_end = this.$store.state.datetime.timeEnd
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    },
    getCurrentUser () {
      return this.$store.state.auth.user
    },
    getData () {
      return this.$store.state.form
    }
  }
}
</script>
<style>
.data {
  margin: 10px 10px 10px 10px;
}
</style>
