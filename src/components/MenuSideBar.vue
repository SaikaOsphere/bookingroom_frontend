<template>
  <div>
    <div class="navsidebar">
      <b-nav vertical>
        <b-nav-item to="/" v-if="!isLogin">เข้าสู่ระบบ</b-nav-item>
        <b-nav-item to="/home">หนัาหลัก</b-nav-item>
        <!-- <b-nav-item to="/about">About</b-nav-item> -->
        <b-nav-item @click="booking()"> จองห้อง</b-nav-item>
        <!-- <b-icon
          :icon="showGroupBooking ? 'caret-down-fill' : 'caret-right-fill'"
        >
        </b-icon> -->

        <!-- <b-nav-item class="sub-menu" v-if="showGroupBooking" to="/booking">
        Booking
      </b-nav-item> -->
        <b-nav-item to="/building" v-if="!roleRestricted">จัดการตึก</b-nav-item>
        <b-nav-item to="/institution" v-if="!roleRestricted"
          >จัดการหน่วยงาน</b-nav-item
        >
        <b-nav-item to="/approver" v-if="!roleRestricted"
          >จัดการลำดับผู้อนุมัติ</b-nav-item
        >
        <b-nav-item to="/petition" v-if="!roleRestricted"
          >จัดการคำร้อง</b-nav-item
        >
        <b-nav-item to="/manageRoom" v-if="!roleRestricted"
          >จัดการห้อง</b-nav-item
        >
        <!-- <b-nav-item @click="showFormInput = !showFormInput"
        >Form input
        <b-icon
          :icon="showFormInput ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput1"
        >Form input 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput2"
        >Form input 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput3"
        >Form input 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput4"
        >Form input 4</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput5"
        >Form input 5</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput6"
        >Form input 6</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput7"
        >Form input 7</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput8"
        >Form input 8</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput9"
        >Form input 9</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput10"
        >Form input 10</b-nav-item
      >

      <b-nav-item @click="showForm = !showForm"
        >Form
        <b-icon
          :icon="showForm ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showForm" to="./form1"
        >Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form2"
        >Form 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form3"
        >Form 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form4"
        >Form 4</b-nav-item
      >
      <b-nav-item @click="showCRUDExample = !showCRUDExample"
        >CRUD Example
        <b-icon
          :icon="showCRUDExample ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./datatable1"
        >Data table 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./productform1"
        >Product Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./productTable"
        >Product Table</b-nav-item
      > -->
      </b-nav>
    </div>
  </div>
</template>
<script>
import api from '@/services/api'

export default {
  data () {
    return {
      showGroupBooking: false,
      showFormInput: false,
      showForm: false,
      showCRUDExample: false,
      roleRestricted: true
      // roleRestricted - true = user / false = admin
    }
  },
  methods: {
    roleCheck () {
      // console.log(this.$store.state.auth.user)
      api
        .get('http://localhost:3000/users/' + this.$store.state.auth.user._id)
        .then(
          function (response) {
            for (let i = 0; i < response.data.roles.length; i++) {
              if (
                response.data.roles[i] === 'LOCAL_ADMIN' ||
                response.data.roles[i] === 'ADMIN'
              ) {
                this.roleRestricted = false
              } else {
                this.roleRestricted = true
              }
            }
          }.bind(this)
        )
    },
    booking () {
      this.$store.dispatch('bookingRoom/reset')
      if (this.$route.name !== 'booking') {
        this.$router.push({ path: '/booking' })
      }
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    }
  },
  mounted () {
    this.roleCheck()
  }
}
</script>

<style scope>
.sub-menu {
  padding-left: 10pt;
  font-size: 14px;
}

.nav-link {
  color: black;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}

.navsidebar {
  /* border: 1px solid black; */
  font-size: 15pt;
  padding: 50px 25px 50px 25px;
  width: 100%;
  background-color: rgba(129, 129, 129, 0.199);
  border-radius: 25px;
  /* min-height: 100%; */
  height: 100%;
}
</style>
