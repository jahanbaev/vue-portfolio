<template>
  <div>
    <pre-loader/>
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import PreLoader from './components/PreLoader.vue';
export default {
  components: {
    NavBar,
    PreLoader
  }
}
</script>

<style>
@import url("styles/main.css");
@import url("styles/scrollBar.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
