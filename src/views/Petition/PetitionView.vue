<template>
  <div>
    <h1>รายการคำร้อง</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(หมายเลขการจอง)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)="data">
        <b-button size="sm" class="mr-2"  @click="checkid(data.item)">ดูรายละเอียด</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  data () {
    return {
      fields: [
        'หมายเลขการจอง',
        {
          key: 'approver.name',
          label: 'ชื่อผู้อนุมัติ'
        },
        {
          key: 'approve_date',
          label: 'วันที่จอง'
        },
        {
          key: 'approve_status',
          label: 'สถาณะ'
        },
        'การดำเนินการ'
      ],
      items: [],
      users: [],
      approvers: [],
      selectedItem: null
    }
  },
  methods: {
    getapproves () {
      api.get('http://localhost:3000/approves').then(
        function (response) {
          // console.log(response.data)
          this.items = response.data
        }.bind(this)
      )
    },
    getuser () {
      api.get('http://localhost:3000/users').then(
        function (response) {
          // console.log(response.data)
          this.users = response.data
        }.bind(this)
      )
    },
    getapprovers () {
      api.get('http://localhost:3000/approveres').then(
        function (response) {
          // console.log(response.data)
          this.approvers = response.data
        }.bind(this)
      )
    },
    checkid (item) {
      console.log('item', item)
      this.$store.dispatch('checkid/sendid', item)
    }
  },
  mounted () {
    this.getapproves()
  }
}
</script>
