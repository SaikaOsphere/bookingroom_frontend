<template>
  <div>
    <b-card
      style="max-width: 20rem"
      class="mb-2 center"
    >
        <b-card-text>
          <div style="text-align: justify">
            <b-form>
              <b-form-group
                id="input-group-1"
                label="ต้องการลบข้อมูลหรือไม่"
                label-for="input-1"
              >
              </b-form-group>
            </b-form>
            <b-form>
              <b-button type="submit" variant="danger" class="m-2">
                  ยกเลิก
              </b-button>
              <b-button type="submit" variant="primary" class="m-2" >
                  ยืนยัน
              </b-button>
            </b-form>
          </div>
        </b-card-text>

    </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
      }
    }
  }
}
</script>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 70px;
  padding-right: 50px;
  font-size: 20px;

}
</style>
