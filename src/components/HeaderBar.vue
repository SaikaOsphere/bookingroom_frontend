<template>
  <div>
    <b-navbar class="bar">
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
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ currentUser }}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: 'Dev',
      userRole: 'Admin',
      currentUser: '',
      logo: { width: 60, height: 60 }
    }
  },
  mounted () {
    this.currentUser = this.userName + '\n' + this.userRole
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
}
</style>
