<template>
  <div>
    <h1>จัดการผู้อนุมัติ</h1>
    <b-button size="sm" class="mr-2" style="float:right;" to="/addApprover">เพิ่ม</b-button>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(การดำเนินการ)>
        <b-button size="sm" class="mr-2" to="/editApprover">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" to="/deleteApprover">ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['ไอดีลำดับ', 'ผู้อนุมัติคนที่1', 'ผู้อนุมัติคนที่2', 'การดำเนินการ'],
      items: [
        {
          isActive: true,
          ไอดีลำดับ: 40,
          ผู้อนุมัติคนที่1: 'Dickerson',
          ผู้อนุมัติคนที่2: 'Macdonald',
          การดำเนินการ: ''
        },
        {
          isActive: false,
          ไอดีลำดับ: 21,
          ผู้อนุมัติคนที่1: 'Larsen',
          ผู้อนุมัติคนที่2: 'Shaw',
          การดำเนินการ: ''
        },
        {
          isActive: false,
          ไอดีลำดับ: 89,
          ผู้อนุมัติคนที่1: 'Geneva',
          ผู้อนุมัติคนที่2: 'Wilson',
          การดำเนินการ: ''
        },
        {
          isActive: true,
          ไอดีลำดับ: 38,
          ผู้อนุมัติคนที่1: 'Jami',
          ผู้อนุมัติคนที่2: 'Carney',
          การดำเนินการ: ''
        }
      ]
    }
  }
}
</script>
