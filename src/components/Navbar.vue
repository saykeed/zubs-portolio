<template>
    <div class="navbar fixed w-full h-16 backdrop-blur-md flex items-center justify-between px-4 text-white">
        <h1 class="text-4xl text-green-800 font-black">Z</h1>
        <div class="links hidden md:block">
            <router-link
             class="p-2 mx-2"
             v-for="link in links" :key="link.text"
             :to="link.route">{{link.text}}</router-link>
        </div>
        <i class="material-icons text-white text-md md:hidden bg-green-800 flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">menu</i>
    </div>
</template>

<script setup lang="ts">
  const links = [
      {text: 'Home', route: '/'},
      {text: 'About', route: '/'},
      {text: 'Work', route: '/'},
      {text: 'Skills', route: '/'},
      {text: 'Testimonial', route: '/'},
      {text: 'Contact', route: '/'},
  ]
  
</script>

<style lang="scss">
// @import "./assets/scss/variable.scss";


</style>
