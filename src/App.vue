<template>
  <Navbar/>
  <Sidemenu/>
  <router-view/>
</template>

<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
  import Sidemenu from "./components/Sidemenu.vue";
  

  
</script>

<style lang="scss">
@import "./assets/scss/variable.scss";


  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
