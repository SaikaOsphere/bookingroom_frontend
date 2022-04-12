<template>
  <div id="app">
    <div class="bottom" v-if="dev">
      <div>Router For Dev</div>
      <div>
        <router-link to="/">Login</router-link> |
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      dev: true
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
