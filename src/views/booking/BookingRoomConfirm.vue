<template>
  <div>
    <b-row>
      <b-col class="data">
        <b-col cols="4">รหัสผู้จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.idPerson" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="5">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.name" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col class="data">
        <b-col cols="4">เบอร์โทร</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.phoneNumber" disabled>
          </b-form-input>
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
          <b-form-input v-model="bookingDetail.dateBooking" disabled>
          </b-form-input>
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
export default {
  data () {
    return {
      bookingDetail: {
        id: 0,
        idPerson: '000000',
        name: 'AAAAA BBBBB',
        phoneNumber: '0111111111',
        room: '',
        dateBooking: '',
        timeStart: '',
        timeEnd: '',
        usefor: '',
        accessory: [],
        status: '',
        result: ''
      }
    }
  },
  components: {
    confirmDialog
  },
  mounted () {},
  methods: {}
}
</script>
<style>
.data {
  margin: 10px 10px 10px 10px;
}
</style>
