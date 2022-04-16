<template>
  <div id="app">
    <b-container fluid style="padding: 0px 0px 0px 0px">
      <NavBar v-if="showHeader"
    /></b-container>
    <div class=""></div>
    <b-container fluid style="height: 100%; padding: 0px 0px 100px 0px">
      <b-row>
        <div v-if="isLogin">
          <div
            style="padding: 0px 0px 0px 0px; position: fixed; z-index: 1000"
            v-if="showSidetab"
          >
            <b-button @click="toggleSidetab()" variant="warning"
              >ซ่อนแถบ</b-button
            >
            <div v-if="showSidetab"><MenuSideBar v-if="isLogin" /></div>
          </div>
          <div
            style="padding: 0px 0px 0px 80px; position: fixed; z-index: 1000"
            v-else
          >
            <b-button @click="toggleSidetab()" variant="warning"
              >แสดงแถบ</b-button
            >
          </div>
        </div>
        <!-- <router-view style="padding: 0px 10% 0px 10%" /> -->
        <b-col style="padding: 50px 0px 0px 0px">
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
        <a href="#"><div @click="toggleRouter()">Hide</div></a>
        <b-button variant="outline-primary" @click="toggleHeader()"
          >Header</b-button
        >
        |
        <b-button variant="outline-primary" @click="toggleSidetab()"
          >Sidetab</b-button
        >
        <AllRouter />
      </div>
    </div>
    <div v-else>
      <a href="#"
        ><div @click="toggleRouter()" class="bottom-hidden" v-if="dev">
          Show
        </div></a
      >
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/HeaderBar.vue'
import MenuSideBar from '@/components/MenuSideBar.vue'
import AllRouter from '@/components/AllRouter.vue'

export default {
  data () {
    return {
      showRouter: false,
      dev: false,
      showHeader: true,
      showSidetab: true
    }
  },
  components: {
    NavBar,
    MenuSideBar,
    AllRouter
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
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
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
