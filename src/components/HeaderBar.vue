<template>
  <div>
    <b-navbar class="bar pl-5 pr-5" >
      <!-- <b-nav-item @click="showCRUDExample = !showCRUDExample"
        >CRUD Example
        <b-icon
          :icon="showCRUDExample ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item> -->
      <b-img
        v-bind="logo"
        src="@/assets/buu.png"
        rounded
        alt="Rounded image"
        class="logo"
      ></b-img>
      <b-navbar-brand href="https://www.buu.ac.th/"
        >มหาวิทยาลัยบูรพา</b-navbar-brand
      >

      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form> -->
        <b-avatar size="72px" v-if="isLogin"></b-avatar>
        <b-nav-item-dropdown right v-if="isLogin" class="mt-3 ">
          <!-- Using 'button-content' slot -->
          <template #button-content >
            <em class="ml-2">{{ getCurrentUser }} </em>
          </template>
          <b-dropdown-item href="#" >Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import router from '@/router'
export default {
  data () {
    return {
      logo: { width: 60, height: 60 }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.currentUser = ''
      router.push('/')
    }
  },
  mounted () {},
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    },
    getCurrentUser () {
      return this.$store.state.auth.user.username
    }
  }
}
</script>
<style>
.logo {
  margin-right: 20px;
}

.bar {
  width: 100%;
  max-width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: rgba(214,181,86, 0.3);
}
</style>
