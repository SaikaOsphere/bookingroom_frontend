<template>
  <div id="app">
    <b-container fluid style="padding: 0px 0px 0px 0px">
      <NavBar v-if="showHeader"
    /></b-container>
    <b-container fluid style="height: 100%; padding: 0px 0px 100px 0px;">
      <b-row>
        <div
          style="padding: 0px 0px 0px 0px; position: fixed; z-index: 1000;"
          v-if="showSidetab"
        >
          <div><MenuBar /></div
        ></div>
        <b-col style="padding: 0px 0px 0px 0px">
          <b-container>
            <b-row class="text-justify">
              <b-col><router-view /></b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="showRouter">
      <div class="bottom" v-if="dev">
        <div>Router For Dev</div>
        <a href="#"><div @click="toggleRouter()">Hide</div></a>
        <div>
          <b-button variant="outline-primary" @click="toggleHeader()"
            >Header</b-button
          >
          |
          <b-button variant="outline-primary" @click="toggleSidetab()"
            >Sidetab</b-button
          >
          | <router-link to="/">Login</router-link> |
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/booking">Booking</router-link> |
          <router-link to="/bookingRoomDetail">Booking Room Detail</router-link> |
          <router-link to="/instutution">Instutution</router-link> |
          <router-link to="/petition">Petition</router-link> |
          <router-link to="/manageRoom">RoomManagement</router-link> |
          <router-link to="/building">Building</router-link> |
          <router-link to="/bookingDetail">Booking Detail</router-link> |
          <router-link to="/bookingRoomConfirm">Booking Room Confirm</router-link> |
          <router-link to="/addBuilding">Add Building</router-link> |
          <router-link to="/editBuilding">Edit Building</router-link> |
          <router-link to="/deleteBuilding">Delete Building</router-link> |
          <router-link to="/addBuildingSuccess">Add Building Success</router-link>  |
          <router-link to="/editBuildingSuccess">Edit Building Success</router-link> |
          <router-link to="/deleteBuildingSuccess">Delete Building Success</router-link> |
          <router-link to="/approver">Approver</router-link> |
          <router-link to="/addRoom">AddRoomManagement</router-link> |
          <!-- <router-link to="/editInstututionSuccess">EditInstututionSuccess</router-link> | -->
          <!-- <router-link to="/editInstutution">EditInstutution</router-link> | -->
          <!-- <router-link to="/addInstutution">AddInstutution</router-link> |
          <router-link to="/editBuilding">Edit Building</router-link>
          <router-link to="/editInstututionSuccess">EditInstututionSuccess</router-link> |
          <router-link to="/editInstutution">EditInstutution</router-link> |
          <router-link to="/addInstutution">AddInstutution</router-link> |
        <router-link to="/addInstututionSuccess">AddInstututionSuccess</router-link> |
        <router-link to="/deleteInstutution">DeleteInstutution</router-link> |
        <router-link to="/deleteInstututionSuccess">DeleteInstututionSuccess</router-link> | -->
        </div>
      </div>
    </div>
    <div v-else>
      <a href="#"
        ><div @click="toggleRouter()" class="bottom-hidden">Show</div></a
      >
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/HeaderBar.vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
  data () {
    return {
      showRouter: true,
      dev: true,
      showHeader: true,
      showSidetab: true
    }
  },
  components: {
    NavBar,
    MenuBar
  },
  methods: {
    toggleRouter (event) {
      this.showRouter = !this.showRouter
    },
    toggleHeader (event) {
      this.showHeader = !this.showHeader
    },
    toggleSidetab (event) {
      this.showSidetab = !this.showSidetab
    }
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

.bottom-hidden {
  align-content: center;
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
