<template>
  <div>
     <h1 style="color: black;">จัดการหน่วยงาน</h1>
     <b-row>
        <b-col class="text-right">
          <InstitutionForm
            :institution="selectedItem"
            ref="institutionForm"
            @save="saveInstitution"
          ></InstitutionForm>
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
import InstitutionForm from './InstitutionForm'
export default {
  components: {
    InstitutionForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'name', label: 'ชื่อ' },
        // { key: 'rooms', label: 'ห้อง' },
        'การดำเนินการ'
      ],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getInstitutions () {
      api.get('http://localhost:3000/institutions').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveInstitution (institution) {
      // console.log('Submit', institution)
      if (institution._id === '') {
        api.post('http://localhost:3000/institutions', institution).then(
          function (response) {
            this.getInstitutions()
          }.bind(this)
        ).catch(() => {
        })
      } else {
        api.put('http://localhost:3000/institutions/' + institution._id, institution).then(
          function (response) {
            this.getInstitutions()
          }.bind(this))
      }
    },
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.institutionForm.show()
      })
    },
    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบคณะชื่อ ${item.name} จริงเปล่า ?`)) {
        api.delete('http://localhost:3000/institutions/' + item._id).then(
          function (response) {
            this.getInstitutions()
          }.bind(this)
        )
      }
    }
  },
  mounted () {
    this.getInstitutions()
  }
}
</script>
