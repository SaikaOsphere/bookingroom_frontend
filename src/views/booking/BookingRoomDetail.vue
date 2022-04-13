<template>
  <div>
    <b-row>
      <b-col>
        <b-row> typeRoom</b-row>
        <b-row> sizeRoom</b-row>
      </b-col>
      <b-col>
        <b-row>capacity </b-row>
        <b-row> floor </b-row>
      </b-col>
      <b-col>
        <b-row>building </b-row>
        <b-row> dateTime </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeRoom: '',
      sizeRoom: 0,
      capacity: 0,
      floor: 0,
      building: '',
      dateTime: ''
    }
  }
}
</script>
<style></style>
