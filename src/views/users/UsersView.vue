<template>
  <div>
     <h1 style="color: black;">จัดการผู้ใช้</h1>

     <b-row>
        <b-col class="text-right">
          <userForm
            :user="selectedItem"
            :institutions="institutions"
            ref="userForm"
            @save="saveUser"
          ></userForm>
        </b-col>
      </b-row>
    <b-table :items="items" :fields="fields" striped responsive="sm">
       <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)="data">
        <b-button size="sm" class="mr-2" variant="warning"   @click = "edit(data.item)">เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" variant="danger" @click = "deleteItem(data.item)" >ลบ</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import userForm from './UserForm'
export default {
  components: {
    userForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'username', label: 'ชื่อผู้ใช้' },
        // { key: 'password', label: 'รหัสผ่าน' },
        { key: 'name', label: 'ชื่อจริง' },
        { key: 'surname', label: 'นามสกุล' },
        { key: 'roles', label: 'ตำแหน่ง' },
        { key: 'institution.name', label: 'หน่วยงานที่รับผิดชอบ' },
        'การดำเนินการ'
      ],
      items: [],
      institutions: [],
      selectedItem: null
    }
  },
  methods: {
    getUsers () {
      api.get('http://localhost:3000/users').then(
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
    saveUser (user) {
      // console.log('Submit', user)
      if (user._id === '') {
        api.post('http://localhost:3000/users', user).then(
          function (response) {
            this.getUsers()
          }.bind(this)
        ).catch(() => {
        })
      } else {
        api.put('http://localhost:3000/users/' + user._id, user).then(
          function (response) {
            this.getUsers()
          }.bind(this))
      }
    },
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.userForm.show()
      })
    },
    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบคณะชื่อ ${item.name} จริงเปล่า ?`)) {
        api.delete('http://localhost:3000/users/' + item._id).then(
          function (response) {
            this.getUsers()
          }.bind(this)
        )
      }
    }
  },
  mounted () {
    this.getUsers()
    this.getInstitutions()
  }
}
</script>
