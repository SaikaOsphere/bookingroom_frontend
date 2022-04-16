<template>
  <div>
    <h1>รายการคำร้อง</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับการอนุมัติ)="data">
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
        'ลำดับการอนุมัติ',
        {
          key: 'approve_status',
          label: 'สถานะ'
        },
        'การดำเนินการ'
      ],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getApproves () {
      api.get('http://localhost:3000/approves').then(
        function (response) {
          this.items = response.data
          console.log(this.items)
          console.log(this.getCurrentUser)
          this.items = this.items.filter((item) => item.approver._id === this.getCurrentUser && item.approve_status === null)
        }.bind(this)
      )
    },

    checkid (item) {
      console.log('item', item)
      this.$store.dispatch('checkid/sendid', item)
    }
  },
  mounted () {
    this.getApproves()
  },
  computed: {
    getCurrentUser () {
      return this.$store.state.auth.user._id
    }
  }
}
</script>
