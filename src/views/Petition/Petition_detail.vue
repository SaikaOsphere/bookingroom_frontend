<template>
  <div>
    <h1>รายละเอียดการจอง</h1>
    <b-row>
      <!-- <b-col class="data">
        <b-col cols="5">หมายเลขการจอง</b-col>
        <b-col>
          <b-form-input v-model="bookings.id" disabled> </b-form-input>
        </b-col>
      </b-col> -->
      <b-col class="data">
        <b-col cols="5">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="name" disabled>  </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">ห้องที่จอง</b-col>
        <b-col>
          <b-form-input v-model="booking.room.code" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">วันที่จอง</b-col>
        <b-col>
          <b-form-input v-model="datetime_reserve" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">เวลาเริ่ม</b-col>
        <b-col>
          <b-form-input v-model="datetime_start" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">เวลาสิ้นสุด</b-col>
        <b-col>
          <b-form-input v-model="datetime_end" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row >
       <p> </p>
    </b-row >
    <b-row >
      <b-col
        ><b-button class="button" variant="danger"  @click="resetStore() ">ย้อนกลับ</b-button>
        <b-button variant="info" @click="approvno(items.approve_status)">ไม่อนุญาติ</b-button>
        <b-button class="button1" variant="info"  @click="approv(items.approve_status)">อนุญาติ</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from '@/services/api'
export default {
  data () {
    return {
      booking: '',
      name: '',
      datetime_reserve: '',
      datetime_start: '',
      datetime_end: ''
    }
  },
  mounted () {
    this.getBooking()
  },
  methods: {
    getBooking () {
      api.get('http://localhost:3000/bookings/approve/' + this.getBookingId).then(
        function (response) {
          console.log('bookings:', response.data)
          this.booking = response.data
          this.name = this.booking.user.name + ' ' + this.booking.user.surname
          this.datetime_reserve = new Date(this.booking.datetime_reserve).toLocaleString()
          this.datetime_start = new Date(this.booking.datetime_start).toLocaleString()
          this.datetime_end = new Date(this.booking.datetime_end).toLocaleString()
        }.bind(this)
      )
    },
    resetStore () {
      this.$store.dispatch('checkid/reset')
    }
  },
  computed: {
    getBookingId () {
      return this.$store.getters['checkid/getBookingId']
    }
  }
}
</script>
<style>
.data {
  margin: 10px 10px 10px 10px;
}
.button {
  margin-right: 850px;
}
.button1 {
  margin-left: 5px;
  background-color: rgb(91, 218, 91);
}
</style>
