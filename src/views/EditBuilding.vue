<template>
  <div>
    <h1>เพิ่มข้อมูลตึก</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="ชื่อหน่วยงาน:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="โปรดป้อนชื่อหน่วยงาน"
          v-model="form.name"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="ตำแหน่งตึก:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="โปรดป้อนตำแหน่งตึก"
          v-model="form.position"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="ห้องภายในตึก:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.rooms"
          :options="rooms"
          required
        ></b-form-select>
      </b-form-group>
        <b-button type="submit" variant="primary" >Submit</b-button>
       <b-button type="reset" variant="danger"  style="margin-left:10px">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        position: '',
        rooms: null
      },
      rooms: [
        { text: 'Select One', value: null },
        'IF-401',
        'IF-403',
        'IF-402',
        'IF-404'
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
      this.form.position = ''
      this.form.rooms = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style></style>
