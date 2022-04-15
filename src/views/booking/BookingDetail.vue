<template>
  <div>
    <b-row>
      <!-- <b-col class="data">
        <b-col cols="4">รหัสผู้จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.idPerson" disabled>
          </b-form-input>
        </b-col>
      </b-col> -->
      <b-col class="data">
        <b-col cols="5">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.name" disabled> </b-form-input>
        </b-col>
      </b-col>
      <!-- <b-col class="data">
        <b-col cols="4">เบอร์โทร</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.phoneNumber" disabled>
          </b-form-input>
        </b-col>
      </b-col> -->
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
    <b-row>
      <b-col class="data">
        <b-col cols="4">จุดประสงค์</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.usefor"> </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">อุปกรณ์</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.accessory"> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="data">
      <b-col
        ><b-button variant="danger" to="/bookingRoomDetail">ยกเลิก</b-button>
        <confirm-dialog
          :product="selectedItem"
          ref="productForm"
          @save="saveProduct"
        ></confirm-dialog>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import confirmDialog from '@/components/BookingConfirmDialog.vue'
import api from '@/services/api'
export default {
  data () {
    return {
      bookingDetail: {
        id: 0,
        idPerson: '000000',
        name: 'AAAAA BBBBB',
        phoneNumber: '0111111111',
        room: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        usefor: '',
        accessory: [],
        status: '',
        result: ''
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
  components: {
    confirmDialog
  },
  mounted () {
    this.getRecentData()
    this.getRoom()
    this.getUser()
    // console.log(this.bookingDetail)
    // console.log(this.formSend)
    // this.test22()

    // const currentDateWithFormat = new Date('2010-03-20' + ' ' + this.formSend.datetime_start)
    // .toJSON()
    // .slice(0, 10)
    // .replace(/-/g, '/')
    // console.log('test time')
    // console.log(this.formSend.datetime_start)
    // console.log(currentDateWithFormat)
    this.sendToDB()
  },
  methods: {
    sendToDB () {
      this.formSend.datetime_reserve = new Date(Date.now())
      this.formSend.datetime_start = new Date(this.bookingDetail.date + ' ' + this.bookingDetail.timeStart)
      this.formSend.datetime_end = new Date(this.bookingDetail.date + ' ' + this.bookingDetail.timeEnd)
      this.formSend.room = this.$store.state.room
      this.formSend.user = this.$store.state.user
      // api.post('http://localhost:3000/bookings', this.formSend).then(
      //   function (response) {
      //     console.log(response)
      //   }
      // )
    },
    getUser () {
      api.get('http://localhost:3000/users/625900367ecf855fbf3fea12').then(
        function (response) {
          this.bookingDetail.name =
            response.data.name + ' ' + response.data.surname
          // console.log(response.data)
          this.$store.dispatch('bookingRoom/sendDataUser', response.data)
        }.bind(this)
      )
    },
    getRoom () {
      api.get('http://localhost:3000/rooms/' + this.$store.state.idRoom).then(
        function (response) {
          this.bookingDetail.room = response.data
          // console.log(response.data)
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
  }
}
</script>
<style>
.data {
  margin: 10px 10px 10px 10px;
}
</style>
