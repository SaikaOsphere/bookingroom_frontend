<template>
  <div>
    <h1>รายละเอียดการจอง</h1>
    <b-row>
      <!-- <b-col class="data">
        <b-col cols="5">หมายเลขการจอง</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.id" disabled> </b-form-input>
        </b-col>
      </b-col> -->
      <b-col class="data">
        <b-col cols="5">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.name" disabled> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">ห้องที่จอง</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.room" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">วันที่จอง</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.date" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data">
        <b-col cols="4">เวลาเริ่ม</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.timeStart" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">เวลาสิ้นสุด</b-col>
        <b-col>
          <b-form-input v-model="Petitiondetail.timeEnd" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row >
       <p> </p>
    </b-row >
    <b-row >
      <b-col
        ><b-button class="button" variant="danger" to="/petition">ย้อนกลับ</b-button>
        <b-button variant="danger" to="/petition">ไม่อนุญาติ</b-button>
        <b-button class="button1" variant="info" to="/petition">อนุญาติ</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from '@/services/api'
export default {
  data () {
    return {
      Petitiondetail: {
        _id: '',
        name: 'AAAAA BBBBB',
        room: {},
        date: '',
        timeStart: '',
        timeEnd: ''
      }
    }
  },
  components: {},
  mounted () {
    this.getRecentData()
    this.getbookings()
    this.getRoom()
    this.getUser()
  },
  methods: {
    getbookings () {
      api.get('http://localhost:3000/bookings').then(
        function (response) {
          console.log(response.data)
          this.Petitiondetail._id = response.data._id
          this.Petitiondetail.name = response.data.user
          this.Petitiondetail.room = response.data.room
          this.Petitiondetail.date = response.data.datetime_reserve
          this.Petitiondetail.timeStart = response.data.datetime_start
          this.Petitiondetail.timeEnd = response.data.datetime_end
        }.bind(this)
      )
    }//,
    // getRecentData () {
    //   this.Petitiondetail.date = this.$store.state.datetime.date
    //   this.Petitiondetail.timeStart = this.$store.state.datetime.timeStart
    //   this.Petitiondetail.timeEnd = this.$store.state.datetime.timeEnd
    // }
  },
  computed: {
    getCurrentUser () {
      return this.$store.state.auth.user
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
