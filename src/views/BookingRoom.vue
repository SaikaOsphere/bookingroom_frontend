<template>
  <div class="booking">
    <!-- <b-container> -->
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="4"> ตึก </b-col>
          <b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
        <b-row
          ><b-col cols="4">ชั้น</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col>
        <b-row
          ><b-col cols="4">ประเภท</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
        <b-row
          ><b-col cols="4">ขนาดห้อง</b-col
          ><b-col>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="test"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> </b-col
        ></b-row>
      </b-col>
      <b-col
        ><b-col cols="6">รหัสห้อง</b-col
        ><b-col>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="test"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group> </b-col
      ></b-col>
      <b-col><b-button variant="primary" type="submit">ค้นหา</b-button></b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-table :items="items" :fields="fields" striped responsive="sm">
        <template #cell(ดำเนินการ)>
          <b-button size="sm" class="mr-2">เเก้ไข</b-button>
          <b-button size="sm" class="mr-2">ลบ</b-button>
        </template>
      </b-table>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: '',
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
      fields: [
        'ลำดับ',
        'โค้ดห้อง',
        'อุปกรณ์',
        'ตึก',
        'จำนวนคนที่รองรับ (คน)',
        'ดำเนินการ'
      ],
      items: [
        {
          isActive: true,
          ลำดับ: 40,
          โค้ดห้อง: 'Dickerson',
          อุปกรณ์: 'Macdonald',
          ตึก: '',
          จำนวนคนที่รองรับ: 5,
          ดำเนินการ: ''
        }
      ]
    }
  }
}
</script>
<style>
.screen {
  padding-left: 10%;
  padding-right: 10%;
}

b-col,
b-row {
  border: 2px solid black;
}
</style>
