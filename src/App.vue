<template>
  <Navbar/>
  <router-view/>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  // import AOS from "aos";
  import Navbar from './components/Navbar.vue';
  

  // onMounted(() => {
  //     AOS.init({
  //       duration: 700,
  //       easing: 'ease', 
  //       once: false,
  //       mirror: true,
  //     });
  // })
</script>

<style lang="scss">
@import "./assets/scss/variable.scss";


  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
