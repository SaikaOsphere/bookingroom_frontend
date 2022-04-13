<template>
  <div class="booking">
    <b-card>
      <b-row>
        <b-col>
          <b-row>
            <b-col cols="2"> ผู้อนุมัติคนที่ 1 </b-col>
            <b-col>
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="test"
                  :options="filterBuilding"
                  required
                ></b-form-select>
              </b-form-group> </b-col
          ></b-row>
          <b-row
            ><b-col cols="2">ผู้อนุมัติคนที่ 2</b-col
            ><b-col>
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="test"
                  :options="filterBuilding"
                  required
                ></b-form-select>
              </b-form-group> </b-col
          ></b-row>
          <b-button
            type="submit"
            variant="primary"
            class="float-xl-right"
            style="margin-left: 10px"
            to="/editApproverSuccess"
            >ยืนยัน</b-button
          >
          <b-button type="reset" variant="danger" class="float-xl-right" to="/approver"
            >ยกเลิก</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {}
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
