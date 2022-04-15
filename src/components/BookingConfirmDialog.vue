<template>
  <div>
    <b-button @click="addNew" variant="primary">ตกลง</b-button>
    <b-modal
      id="modal-product"
      ref="modalProduct"
      title="ยืนยันการจอง"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
      style="width=500px"
    >
      <b-form @submit.prevent="submit" @reset.stop.prevent="reset" style="margin: 0px 20px 0px 20px">
        <b-row>
          <b-col class="data">
            <b-row>รหัสผู้จอง</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.idPerson" disabled>
              </b-form-input>
            </b-row>
          </b-col>
          <b-col class="data">
            <b-row>ชื่อ-นามสกุล</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.name" disabled>
              </b-form-input>
            </b-row>
          </b-col>
          <b-col class="data">
            <b-row>เบอร์โทร</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.phoneNumber" disabled>
              </b-form-input>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="data">
            <b-row>ห้องที่จอง</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.room" disabled>
              </b-form-input>
            </b-row>
          </b-col>
          <b-col class="data">
            <b-row>วันที่จอง</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.dateBooking" disabled>
              </b-form-input>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="data">
            <b-row>เวลาเริ่ม</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.timeStart" disabled>
              </b-form-input>
            </b-row>
          </b-col>
          <b-col class="data">
            <b-row>เวลาสิ้นสุด</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.timeEnd" disabled>
              </b-form-input>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="data">
            <b-row>จุดประสงค์</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.usefor"> </b-form-input>
            </b-row>
          </b-col>
          <b-col class="data">
            <b-row>อุปกรณ์</b-row>
            <b-row>
              <b-form-input v-model="bookingDetail.accessory"> </b-form-input>
            </b-row>
          </b-col>
        </b-row>
      </b-form>
      <!-- <b-card>
        <pre>
        {{ form }}
      </pre
        >
      </b-card> -->
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
      form: {
        id: '',
        name: '',
        price: 0
      },
      isAddNew: false,
      bookingDetail: {
        id: 0,
        idPerson: '000000',
        name: 'AAAAA BBBBB',
        phoneNumber: '0111111111',
        room: '',
        dateBooking: '',
        timeStart: '',
        timeEnd: '',
        usefor: '',
        accessory: [],
        status: '',
        result: ''
      }
    }
  },
  computed: {
    validateName () {
      return this.form.name.length >= 3
    },
    validatePrice () {
      return this.form.price !== '' && this.form.price >= 0
    },
    validateForm () {
      return this.validateName && this.validatePrice
    }
  },
  methods: {
    addNew () {
      this.isAddNew = true
      this.$nextTick(() => {
        this.show()
        this.isAddNew = false
      })
    },
    show () {
      this.$refs.modalProduct.show()
    },
    submit () {
      const product = JSON.parse(JSON.stringify(this.form))
      product.price = parseFloat(product.price)
      this.$emit('save', product)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        price: 0
      }
    },
    showModal (evt) {
      if (this.isAddNew) {
        this.reset()
      } else {
        this.form._id = this.product._id
        this.form.name = this.product.name
        this.form.price = this.product.price
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.validateForm) return
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-product')
      })
    }
  }
}
</script>
<style>
.data {
  margin: 10px 10px 10px 10px;
}
</style>
