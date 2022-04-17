<template>
  <body class="bg">
    <div id="app">
      <b-container
        fluid
        style="padding: 0px 0px 0px 0px; background-color: white"
      >
        <NavBar v-if="showHeader"
      /></b-container>
      <b-container fluid style="height: 100%; padding: 0px 0px 100px 0px">
        <b-row>
          <div v-if="isLogin">
            <div
              style="
                padding-top: 1.5%;
                margin-left: 1.5%;
                position: fixed;
                z-index: 1000;
              "
              v-if="showSidetab"
            >
              <b-button @click="toggleSidetab()" variant="warning"
                >ซ่อนแถบ</b-button
              >
              <div v-if="showSidetab"><MenuSideBar v-if="isLogin" /></div>
            </div>
            <div
              style="
                padding-top: 1.5%;
                margin-left: 5.2%;
                position: fixed;
                z-index: 1000;
              "
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
  </body>
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
  mounted () {
    if (!this.isLogin) {
      this.$router.push({ path: '/' })
      this.$store.dispatch('auth/logout')
    } else {
      this.$router.push({ paht: '/home' })
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
/* .bg {
  background: rgb(28,55,150);
  background: linear-gradient(299deg, rgba(28,55,150,1) 0%, rgba(152,129,158,1) 0%, rgba(214,179,218,1) 16%, rgba(237,183,183,1) 28%, rgba(232,202,202,1) 41%, rgba(210,191,174,0.5438550420168067) 57%, rgba(221,221,186,1) 82%, rgba(0,255,248,1) 100%);
  width: 100%;
  min-height: 100vh;
  position: relative;
  float: right;
} */

body {
  background: #1a1e23;
  margin: 0;
}

.bg {
  background: linear-gradient(
    299deg,
    rgba(28, 55, 150, 1) 0%,
    rgba(152, 129, 158, 1) 0%,
    rgba(214, 179, 218, 1) 16%,
    rgba(237, 183, 183, 1) 28%,
    rgba(232, 202, 202, 1) 41%,
    rgba(221, 221, 186, 1) 82%,
    rgba(0, 255, 248, 1) 100%
  );
  background-size: 400% 400%;
  width: 100%;
  min-height: 100vh;
  position: relative;
  float: right;
  -webkit-animation: gradient 15s ease infinite;
  animation: gradient 15s ease infinite;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
