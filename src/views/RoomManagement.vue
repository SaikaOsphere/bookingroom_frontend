<template>
  <div>
    <b-button size="sm" class="mr-2" style="float:right;">เพิ่ม</b-button>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ดำเนินการ)>
        <b-button size="sm" class="mr-2">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2">ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['ชื่อห้อง', 'ประเภทห้อง', 'ตึก', 'ชั้น', 'จำนวนคนที่รองรับ', 'รายการอุปกรณ์', 'ลำดับผู้พิจารณา', 'ดำเนินการ'],
      items: [
        {
          isActive: true,
          ชื่อห้อง: 'IF-3C01',
          ประเภทห้อง: 'ห้องประชุมเล็ก',
          ตึก: 'คณะวิทยาการสารสนเทศ',
          ชั้น: '3',
          จำนวนคนที่รองรับ: '100',
          รายการอุปกรณ์: 'Microphone,Projecter,TV',
          ลำดับผู้พิจารณา: 'approver1',
          ดำเนินการ: ''
        },
        {
          isActive: false,
          ชื่อห้อง: 'IF-3C01',
          ประเภทห้อง: 'ห้องประชุมเล็ก',
          ตึก: 'คณะวิทยาการสารสนเทศ',
          ชั้น: '3',
          จำนวนคนที่รองรับ: '150',
          รายการอุปกรณ์: 'Microphone,Projecter,TV',
          ลำดับผู้พิจารณา: 'approver1',
          ดำเนินการ: ''
        },
        {
          isActive: true,
          ชื่อห้อง: 'SC-4C01',
          ประเภทห้อง: 'ห้องประชุมใหญ่',
          ตึก: 'คณะวิทยาศาสตร์',
          ชั้น: '4',
          จำนวนคนที่รองรับ: '200',
          รายการอุปกรณ์: 'Microphone,Projecter,TV',
          ลำดับผู้พิจารณา: 'approver3',
          ดำเนินการ: ''
        },
        {
          isActive: false,
          ชื่อห้อง: 'SC-4C02',
          ประเภทห้อง: 'ห้องประชุมเล็ก',
          ตึก: 'คณะวิทยาศาสตร์',
          ชั้น: '4',
          จำนวนคนที่รองรับ: '100',
          รายการอุปกรณ์: 'Microphone,Projecter,TV',
          ลำดับผู้พิจารณา: 'approver4',
          ดำเนินการ: ''
        }
      ]
    }
  }
}
</script>
