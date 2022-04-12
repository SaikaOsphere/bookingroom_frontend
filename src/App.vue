<template>
  <div id="app">
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col cols="2" class="app-menu min-vh-100"><MenuBar /></b-col>
        <b-col cols="10">
          <b-container>
            <b-row class="text-justify">
              <b-col><router-view /></b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottom" v-if="dev">
      <div>Router For Dev</div>
      <div>
        <router-link to="/">Login</router-link> |
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/booking">Booking</router-link> |
        <router-link to="/bookingDetail">Booking Detail</router-link> |
        <router-link to="/agency">Agency</router-link> |
        <router-link to="/petition">Petition</router-link> |
        <router-link to="/manageRoom">RoomManagement</router-link> |
        <router-link to="/building">Building</router-link> |
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/HeaderBar.vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
  data () {
    return {
      dev: true
    }
  },
  components: {
    NavBar,
    MenuBar
  }
}
</script>

<style>
.bottom {
  border: black;
  border-radius: 1px;
  align-content: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  bottom: 0%;
  z-index: 1000;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  left: 50%;
  transform: translate(-50%, 0%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
