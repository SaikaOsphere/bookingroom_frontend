<template>
  <div>
     <b-row>
        <b-col class="text-right">
          <InstitutionForm
            :institution="selectedItem"
            ref="institutionForm"
            @save="saveInstitution"
          ></InstitutionForm>
        </b-col>
      </b-row>
    <h1>จัดการหน่วยงาน</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
       <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)>
        <b-button size="sm" class="mr-2" >เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" >ลบ</b-button>
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
        { key: 'room', label: 'ห้อง' },
        'การดำเนินการ'
      ],
      items: []
    }
  },
  methods: {
    getInstitutions () {
      api.get('/institutions').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveInstitution (institution) {
      console.log('Submit', institution)
      if (institution._id === '') {
        api.post('http://localhost:3000/institutions', institution).then(
          function (response) {
            this.getInstitutions()
          }.bind(this)
        ).catch(() => {
        })
      }
    }
  },
  mounted () {
    this.getInstitutions()
  }
}
</script>
