<template>
  <div class="about">
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col cols="2" class="app-menu min-vh-100">
          <MenuBar />
        </b-col>
        <b-col>
          <b-container>
            <h1>Booking Room</h1>
            <h3>Under development</h3>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/HeaderBar.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MenuBar
  }
}
</script>
