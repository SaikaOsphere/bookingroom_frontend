<template>
  <div class="home">
    <NavBar />
    <b-container fluid>
      <!-- <b-row>
        <NavBar />
      </b-row> -->
      <b-row>
        <b-col cols="2" class="app-menu min-vh-100"><MenuBar /></b-col>
        <b-col cols="10">
          <b-container>
            <b-row>
              <b-col> </b-col>
            </b-row>
            <b-row class="text-justify">
              <b-col
                ><img alt="Vue logo" src="../assets/logo.png" />
                <HelloWorld msg="Welcome to Your Vue.js App" /><router-view
              /></b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/HeaderBar.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
    MenuBar
  }
}
</script>
