<template>
  <div>
    <h1>ตึก</h1>
        <b-button size="sm" class="mr-2" style="float:right;" to="/AddBuilding">เพิ่ม</b-button>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(การดำเนินการ)>
        <b-button size="sm" class="mr-2" to="/editBuilding">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" to="/deleteBuilding">ลบ</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['ลำดับ', 'ชื่อ', 'ตำแหน่งตึก', 'ห้อง', 'การดำเนินการ'],
      items: [
        {
          isActive: false,
          ลำดับ: 1,
          ชื่อ: 'วิทยาการสารสนเทศ',
          ตำแหน่งตึก: 'xx',
          ห้อง: 'IF-401',
          การดำเนินการ: ''
        },
        {
          isActive: false,
          ลำดับ: 2,
          ชื่อ: 'ศึกษาศาสตร์',
          ตำแหน่งตึก: 'xx',
          ห้อง: 'ED-402',
          การดำเนินการ: ''
        },
        {
          isActive: false,
          ลำดับ: 3,
          ชื่อ: 'วิศวกรรมศาสตร์',
          ตำแหน่งตึก: 'xx',
          ห้อง: 'EG-403',
          การดำเนินการ: ''
        },
        {
          isActive: false,
          ลำดับ: 4,
          ชื่อ: 'รัฐศาสตร์',
          ตำแหน่งตึก: 'xx',
          ห้อง: 'PC-404',
          การดำเนินการ: ''
        }
      ]
    }
  }
}
</script>
