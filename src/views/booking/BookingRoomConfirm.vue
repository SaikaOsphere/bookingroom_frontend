<template>
  <div>
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="4">รหัสผู้จอง</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.idPerson" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="4">ชื่อ-นามสกุล</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.name" disabled> </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">เบอร์โทร</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.phoneNumber" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="4">ห้องที่จอง</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.room" disabled> </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">วันที่จอง</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.dateBooking" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="4">เวลาเริ่ม</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.timeStart" disabled>
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">เวลาสิ้นสุด</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.timeEnd" disabled> </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="4">จุดประสงค์</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.usefor" disabled> </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">อุปกรณ์</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.accessory" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col><b-button variant="danger">ยกเลิก</b-button></b-col>
      <b-col><b-button variant="outline-primary">ตกลง</b-button></b-col>
    </b-row>
  </div>
</template>
<script>
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
  }
}
</script>
<style></style>
