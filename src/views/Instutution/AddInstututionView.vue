<template>
  <div>
    <h1>เพิ่มข้อมูลหน่วยงาน</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="ชื่อหน่วยงาน :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-table
        :items="items"
        :fields="fields"
        :select-mode="selectMode"
        responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
      >
        <!-- Example scoped slot for select state illustrative purposes -->
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>

      </b-table>

      <b-button type="submit"  style="float:right;">เพิ่ม</b-button>
      <b-button type="reset"  style="float:right;">ลบ</b-button> <br><br><br>
      <b-button type="submit" variant="primary" style="float:right;" to="/addInstututionSuccess">ยืนยัน</b-button>
      <b-button type="reset" variant="danger" style="float:right;" to="/instutution">ยกเลิก</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modes: ['single'],
      selectMode: 'single',
      items: [
        {
          ห้องภายในหน่วยงาน: 'IF-01'
        },
        {
          ห้องภายในหน่วยงาน: 'IF-02'
        },
        {
          ห้องภายในหน่วยงาน: 'IF-03'
        }
      ],
      form: {
        name: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
