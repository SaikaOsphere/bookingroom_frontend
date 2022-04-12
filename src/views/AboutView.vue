<template>
  <div class="about">
    <NavBar />
    <b-row>
      <b-col cols="2" md="2">
        <MenuBar />
      </b-col>
      <b-col>
        <b-container>
          <h1>Booking Room</h1>
          <h3>Under development</h3>
        </b-container>
      </b-col>
    </b-row>
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
