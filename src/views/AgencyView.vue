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
      fields: ['ไอดีหน่วยงาน', 'ชื่อหน่วยงาน', 'ห้องภายในหน่วยงาน', 'ดำเนินการ'],
      items: [
        {
          isActive: true,
          ไอดีหน่วยงาน: 40,
          ชื่อหน่วยงาน: 'Dickerson',
          ห้องภายในหน่วยงาน: 'Macdonald',
          ดำเนินการ: ''
        },
        {
          isActive: false,
          ไอดีหน่วยงาน: 21,
          ชื่อหน่วยงาน: 'Larsen',
          ห้องภายในหน่วยงาน: 'Shaw',
          ดำเนินการ: ''
        },
        {
          isActive: false,
          ไอดีหน่วยงาน: 89,
          ชื่อหน่วยงาน: 'Geneva',
          ห้องภายในหน่วยงาน: 'Wilson',
          ดำเนินการ: ''
        },
        {
          isActive: true,
          ไอดีหน่วยงาน: 38,
          ชื่อหน่วยงาน: 'Jami',
          ห้องภายในหน่วยงาน: 'Carney',
          ดำเนินการ: ''
        }
      ]
    }
  }
}
</script>
