<template>
  <div>
    <h1>จัดการผู้อนุมัติ</h1>
    <b-row>
        <b-col class="text-right">
          <ApproverForm
            :approver="selectedItem"
            :users="users"
            :institutions="institutions"
            ref="approverForm"
            @save="saveApprover"
          ></ApproverForm>
        </b-col>
      </b-row>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(รายการผู้อนุมัติ)="data">
        <ul>
          <li v-for="(item,index) in items[data.index].approveres " :key="index">{{item.username}}</li>
        </ul>
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
import ApproverForm from './ApproverForm'
export default {
  components: {
    ApproverForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'name', label: 'ชื่อลําดับผู้อนุมัติ' },
        // { key: 'approveres', label: 'รายการผู้อนุมัติ' },
        'รายการผู้อนุมัติ',
        { key: 'institution.name', label: 'หน่วยงาน' },
        'การดำเนินการ'
      ],
      items: [],
      users: [],
      institutions: [],
      selectedItem: null
    }
  },
  methods: {
    getApprovers () {
      api.get('http://localhost:3000/approveres').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    getInstitutions () {
      api.get('http://localhost:3000/institutions').then(
        function (response) {
          this.institutions = response.data
          console.log(this.institutions)
        }.bind(this)
      )
    },
    getUsers () {
      api.get('http://localhost:3000/users').then(
        function (response) {
          this.users = response.data
        }.bind(this)
      )
    },
    saveApprover (approver) {
      console.log('Submit', approver)
      if (approver._id === '') {
        api.post('http://localhost:3000/approveres', approver).then(
          function (response) {
            console.log(response)
            this.getApprovers()
          }.bind(this)
        ).catch(() => {
        })
      } else {
        api.put('http://localhost:3000/approveres/' + approver._id, approver).then(
          function (response) {
            console.log(response)
            this.getApprovers()
          }.bind(this))
      }
    },
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.ApproverForm.show()
      })
    },
    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบลำดับผู้พิจารณา ${item.name} จริงเปล่า ?`)) {
        api.delete('http://localhost:3000/approveres/' + item._id).then(
          function (response) {
            this.getApprovers()
          }.bind(this)
        )
      }
    }
  },
  mounted () {
    this.getApprovers()
  }
}
</script>
