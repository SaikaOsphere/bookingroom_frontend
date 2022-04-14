<template>
  <div>
    <b-row>
        <b-col class="text-right">
          <ApproverForm
            :approver="selectedItem"
            ref="approverForm"
            @save="saveApprover"
          ></ApproverForm>
        </b-col>
      </b-row>

    <h1>จัดการผู้อนุมัติ</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)>
        <b-button size="sm" class="mr-2">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2">ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import ApproverForm from './ApproverForm.vue'
export default {
  components: {
    ApproverForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'name', label: 'ชื่อลําดับผู้อนุมัติ' },
        { key: 'approveres', label: 'ผู้อนุมัติ' },
        { key: 'institution', lebel: 'หน่วยงาน' },
        'การดำเนินการ'
      ],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getApprovers () {
      api.get('http://localhost:3000/approvers').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveApprover (approver) {
      console.log('Submit', approver)
      if (approver._id === '') {
        api.post('http://localhost:3000/approvers', approver).then(
          function (response) {
            this.getBuildings()
          }.bind(this)
        ).catch(() => {
        })
      }
    }
  },
  mounted () {
    this.getBuildings()
  }
}
</script>
