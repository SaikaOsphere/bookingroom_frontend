<template>
  <div>
    <h3>เพิ่มข้อมูลตึก</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="ชื่อห้อง : " label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="โปรดป้อนชื่อห้อง"
          v-model="form.name"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="ประเภทห้อง:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.typeroom"
          :options="typeroom"
          required
        >
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="ตึก:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.instutution"
          :options="instutution"
          required
        >
        </b-form-select>
      </b-form-group>
      <b-form-group id="input-group-4" label="ชั้นของห้อง:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.floor"
          :options="floor"
          required
        >
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="จำนวนคน : " label-for="input-5">
        <b-form-input
          id="input-5"
          type="text"
          placeholder="โปรดป้อนจำนวนคน"
          v-model="form.amountperson"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="รายการอุปกรณ์:"
        label-for="input-6"
      >
        <input type="checkbox" id="TV" value="TV" v-model="equipmentlist" />
        <label for="TV">TV</label>
        <input style="margin-left: 10px" type="checkbox" id="Projecter" value="Projecter" v-model="equipmentlist" />
        <label for="Projecter ">Projecter</label>
        <input style="margin-left: 10px" type="checkbox" id="Microphone" value="Microphone" v-model="equipmentlist" />
        <label for="Microphone">Microphone</label>
      </b-form-group>

      <b-form-group id="input-group-7" label="ชั้นของห้อง:" label-for="input-7">
        <b-form-select
          id="input-7"
          v-model="form.reviewer"
          :options="reviewer"
          required
        >
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary" class="float-xl-right" style="margin-left:10px">Submit</b-button>
      <b-button type="reset" variant="danger"  class="float-xl-right">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        typeroom: null,
        instutution: null,
        floor: null,
        amountperson: '',
        equipmentlist: null,
        reviewer: null
      },
      typeroom: [
        { text: 'Select One', value: null },
        'ห้องประชุมเล็ก',
        'ห้องประชุมกลาง',
        'ห้องประชุมใหญ่'
      ],
      instutution: [{ text: 'Select One', value: null }, 'Informatices', 'Computer Center', 'Science'],
      floor: [{ text: 'Select One', value: null }, '2', '3', '4'],
      equipmentlist: [],
      reviewer: [
        { text: 'Select One', value: null },
        'approver1',
        'approver2',
        'approver3',
        'approver4'
      ],
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
      this.form.name = ''
      this.form.typeroom = null
      this.form.instutution = null
      this.form.floor = null
      this.form.amountperson = ''
      this.form.equipmentlist = null
      this.form.reviewer = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style></style>
