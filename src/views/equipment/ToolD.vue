<template>
  <div>
    <h1 style="color: black;">การจัดการอุปกรณ์</h1>

    <b-row>
      <b-col class="text-right">
        <ToolForm
          :equipment="selectedItem"
          ref="toolForm"
          @save="saveTool"
        ></ToolForm>
      </b-col>
    </b-row>

    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(ลำดับ)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(การดำเนินการ)="data">
        <b-button size="sm" class="mr-2" variant="warning" @click="edit(data.item)"
          >เเก้ไข</b-button
        >
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click="deleteItem(data.item)"
          >ลบ</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import api from '../../services/api'
import ToolForm from './ToolsForm.vue'
export default {
  components: {
    ToolForm
  },
  data () {
    return {
      fields: [
        'ลำดับ',
        { key: 'name', label: 'ชื่อ' },
        'การดำเนินการ'
      ],
      items: [],
      selectedItem: null
    }
  },
  methods: {
    getTools () {
      api.get('http://localhost:3000/equipments').then(
        function (response) {
          this.items = response.data
        }.bind(this)
      )
    },
    saveTool (equipment) {
      if (equipment._id === '') {
        api
          .post('http://localhost:3000/equipments', equipment)
          .then(
            function (response) {
              this.getTools()
            }.bind(this)
          )
          .catch(() => {})
      } else {
        api
          .put('http://localhost:3000/equipments/' + equipment._id, equipment)
          .then(
            function (response) {
              this.getTools()
            }.bind(this)
          )
      }
    },
    /* ------------------------ edit ------------------------ */
    edit (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      // !- ทำ nextTick เพราะ state ยังไม่ได้ถูก load ทำให้error ต้องใช้ nextTick
      this.$nextTick(() => {
        this.$refs.toolForm.show()
      })
    } /* ----------------------- delete ----------------------- */,

    deleteItem (item) {
      // console.log(item)
      if (confirm(`ต้องการลบตึกชื่อ ${item.name} จริงหรือเปล่า ?`)) {
        api.delete('http://localhost:3000/equipments/' + item._id).then(
          function (response) {
            this.getTools()
          }.bind(this)
        )
      }
    }
  },
  mounted () {
    this.getTools()
  }
}
</script>
<style>

</style>
