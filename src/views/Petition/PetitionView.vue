<template>
  <div>
    <h1 style="color: black;">รายการคำร้อง</h1>
    <b-table :items="getFliterApprove" :fields="fields" striped responsive="sm">
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
    getCurrentUserId () {
      return this.$store.getters['auth/getIdCurrentUser']
    },
    getFliterApprove () {
      return this.items.filter((item) => item.approver._id === this.getCurrentUserId && item.approve_status === null)
    }
  }
}
</script>
