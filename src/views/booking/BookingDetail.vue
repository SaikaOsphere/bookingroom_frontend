<template>
  <div>
    <b-row>
      <b-col>
        <b-col cols="4">ลำดับ</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.id" disabled> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col cols="4">รหัสผู้จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.idPerson" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">ชื่อ-นามสกุล</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.name" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">เบอร์โทร</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.phoneNumber" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col cols="4">ห้องที่จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.room" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">วันที่จอง</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.dateBooking" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col cols="4">เวลาเริ่ม</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.timeStart" disabled>
          </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">เวลาสิ้นสุด</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.timeEnd" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col cols="4">จุดประสงค์</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.usefor" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">อุปกรณ์</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.accessory" disabled>
          </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col cols="4">สถานะ</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.status" disabled> </b-form-input>
        </b-col>
      </b-col>
      <b-col>
        <b-col cols="4">ผลลัพธ์</b-col>
        <b-col>
          <b-form-input v-model="bookingDetail.result" disabled> </b-form-input>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="align-items: end;"
        ><b-button variant="outline-primary"
          >ตกลง</b-button
        ></b-col
      >
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
        room: 'A542',
        dateBooking: '12-12-2022',
        timeStart: '19:00',
        timeEnd: '23:00',
        usefor: 'Teaching',
        accessory: ['Projector', 'remote'],
        status: 'Pending',
        result: 'Waiting to Pending'
      }
    }
  }
}
</script>
<style></style>
