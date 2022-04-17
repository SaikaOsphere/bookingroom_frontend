  <template>
  <div>
    <div class="navsidebar">
      <b-nav vertical>
        <b-nav-item to="/" v-if="!isLogin">เข้าสู่ระบบ</b-nav-item>
        <b-nav-item to="/home">หนัาหลัก</b-nav-item>
        <b-nav-item @click="booking()"> จองห้อง</b-nav-item>
        <b-nav-item to="/building" v-if="isLogin && isAdmin ">จัดการตึก</b-nav-item>
        <b-nav-item to="/institution" v-if="isLogin && isAdmin "
          >จัดการหน่วยงาน</b-nav-item
        >
        <b-nav-item to="/approver" v-if="isLogin && isLocalAdmin"
          >จัดการลำดับผู้อนุมัติ</b-nav-item
        >
        <b-nav-item to="/petition" v-if="isLogin && (isLocalAdmin || isAdmin)"
          >จัดการคำร้อง</b-nav-item
        >
        <b-nav-item to="/manageRoom" v-if="isLogin&&isLocalAdmin"
          >จัดการห้อง</b-nav-item
        >
        <b-nav-item to="/users" v-if="isLogin && isAdmin"
          >จัดการผู้ใช้</b-nav-item>
        <b-nav-item to="/toolD" v-if="isLogin && isLocalAdmin"
          >จัดการอุปกรณ์</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>
<script>
// import api from '@/services/api'

export default {
  data () {
    return {
      showGroupBooking: false,
      showFormInput: false,
      showForm: false,
      showCRUDExample: false
      // roleRestricted - true = user / false = admin
    }
  },
  methods: {
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
    },
    isAdmin () {
      return this.$store.getters['auth/isAdmin']
    },
    isLocalAdmin () {
      return this.$store.getters['auth/isLocalAdmin']
    }
  },
  mounted () {
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
