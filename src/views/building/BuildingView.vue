<template>
  <div>
    <b-row>
        <b-col class="text-right">
          <BuildingForm
            :building="selectedItem"
            ref="buildingForm"
            @save="saveBuilding"
          ></BuildingForm>
        </b-col>
      </b-row>
    <h1>ตึก</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)>
        <b-button size="sm" class="mr-2"  >เเก้ไข</b-button>
        <b-button size="sm" class="mr-2" >ลบ</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import BuildingForm from './BuildingForm.vue'
export default {
  components: {
    BuildingForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'code', label: 'รหัส' },
        { key: 'name', label: 'ชื่อ' },
        { key: 'floor', label: 'ชั้น' },
        'การดำเนินการ'
      ],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getBuildings () {
      api.get('http://localhost:3000/buildings').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveBuilding (building) {
      console.log('Submit', building)
      if (building._id === '') {
        api.post('http://localhost:3000/buildings', building).then(
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
