<template>
  <div>
    <b-row style="margin-bottom: 30px">
      <h1>ประวัติการจอง</h1>
    </b-row>
    <b-row align-v="stretch">
      <b-table :items="filteringUser" :fields="fields">
        <template #cell(ลำดับ)="data">
          {{ data.index + 1 }}
        </template>

        <!-- <template #cell(วันที่ทำการจอง)="{ item }">
          {{ item.datetime_reserve.replace('T', ' ') }}
        </template> -->

        <!-- <template #cell(อุปกรณ์)="data">
          <ul>
            <li
              v-for="(item, index) in rooms[data.index].equipment"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </template> -->

        <template #cell(รายละเอียด)="{ item }">
          <b-button
            variant="primary"
            id="show-btn"
            @click="
              $bvModal.show('modal-detailbooking')
              showDetail(item)
            "
            >รายละเอียด</b-button
          >
        </template>
      </b-table>
    </b-row>
    <b-modal id="modal-detailbooking" ok-only>
      <template #modal-title> รายละเอียด </template>
      <b-row>
        <b-col class="data">
          <b-row>วันที่จอง</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.date_reserve" disabled>
            </b-form-input>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="data">
          <b-row>ชื่อผู้จอง</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.username" disabled>
            </b-form-input>
          </b-row>
        </b-col>
        <b-col class="data">
          <b-row>ห้อง</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.room" disabled> </b-form-input>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="data">
          <b-row>เวลาเริ่ม</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.date_start" disabled>
            </b-form-input>
          </b-row>
        </b-col>
        <b-col class="data">
          <b-row>เวลาสิ้นสุด</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.date_end" disabled>
            </b-form-input>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="data">
          <b-row>สถานะ</b-row>
          <b-row>
            <b-form-input v-model="bookingDetail.status" disabled>
            </b-form-input>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import api from '@/services/api'
export default {
  data () {
    return {
      fields: [
        'ลำดับ',
        {
          key: 'user.name',
          label: 'ชื่อผู้จอง'
        },
        {
          key: 'datetime_reserve',
          label: 'วันที่ทำการจอง'
        },
        {
          key: 'room.code',
          label: 'ห้อง'
        },
        {
          key: 'datetime_start',
          label: 'เวลาเริ่ม'
        },
        {
          key: 'datetime_end',
          label: 'เวลาสิ้นสุด'
        },
        {
          key: 'status',
          label: 'สถานะ'
        },
        // {
        //   key: 'institution',
        //   label: 'หน่วยงาน'
        // },
        'รายละเอียด'
      ],
      lists: [],
      bookingDetail: {
        username: '',
        date_reserve: '',
        room: '',
        date_start: '',
        date_end: '',
        status: ''
      }
    }
  },
  methods: {
    getฺBooking () {
      api.get('http://localhost:3000/bookings').then(
        function (response) {
          this.lists = response.data
          for (let i = 0; i < this.lists.length; i++) {
            api.get('http://localhost:3000/users/' + this.lists[i].user).then(
              function (response) {
                // console.log(response.data)
                this.lists[i].user = response.data
              }.bind(this)
            )

            api.get('http://localhost:3000/rooms/' + this.lists[i].room).then(
              function (response) {
                // console.log(response.data)
                this.lists[i].room = response.data
              }.bind(this)
            )
          }
          // this.items = this.filteringUser
          // console.log(this.lists)
        }.bind(this)
      )
    },
    showDetail (data) {
      // console.log(data)
      let statusc
      if (data.status === 0) {
        statusc = 'Pending'
      } else if (data.status === 1) {
        statusc = 'Approve'
      } else {
        statusc = 'Disapprove'
      }
      this.bookingDetail = {
        username: data.user.name + ' ' + data.user.surname,
        date_reserve: new Date(data.datetime_reserve).toLocaleString(),
        room: data.room.code,
        date_start: new Date(data.datetime_start).toLocaleString(),
        date_end: new Date(data.datetime_end).toLocaleString(),
        status: statusc
      }
    }
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.push({ path: '/' })
    } else {
      this.getฺBooking()
    }
  },
  computed: {
    filteringUser () {
      return this.lists.filter((item) => item.user._id === this.getCurrentUserId)
    },

    isLogin () {
      return this.$store.getters['auth/isLogin']
    },
    getCurrentUserId () {
      // console.log(this.$store.state.auth.user)
      return this.$store.getters['auth/getIdCurrentUser']
    }
  }
}
</script>
<style></style>
