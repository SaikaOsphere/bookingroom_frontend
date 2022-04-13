<template>
  <div>
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="4">ประเภทห้อง</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.typeRoom" disabled>
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">ขนาดห้อง</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.sizeRoom" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
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
            <b-form-input v-model="detailRoom.floor" disabled>
            </b-form-input>
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
          <b-col cols="4">เวลา</b-col>
          <b-col>
            <b-form-input v-model="detailRoom.dateTime" disabled>
            </b-form-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detailRoom: {
        typeRoom: 'TestType',
        sizeRoom: 0,
        capacity: 0,
        floor: 0,
        building: '',
        dateTime: ''
      },
      fields: [
        'ประเภทห้อง',
        'ขนาดห้อง',
        'จำนวนคนที่รองรับ',
        'ชั้น',
        'ตึก',
        'เวลา'
      ],
      items: [
        {
          isActive: true,
          ลำดับ: 1,
          ประเภทห้อง: 'ห้องประชุม',
          ขนาดห้อง: 'ใหญ่',
          จำนวนคนที่รองรับ: 200,
          ชั้น: 5,
          ตึก: 'ดูไบทาวเวอร์',
          เวลา: '00:00'
        }
      ]
    }
  }
}
</script>
<style></style>
