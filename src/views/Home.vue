<template>
    <div class="home">
        <Homecomp/>
        <Services/>
        <Portfolio/>
        <Skills/>
        <Testimonial/>
        <Contact/>
    </div>
</template>

<script setup lang="ts">
  import Homecomp from '../components/Home.vue'
  import Services from '../components/Services.vue'
  import Portfolio from '../components/Portfolio.vue';
  import Skills from '../components/Skills.vue';
  import Testimonial from '../components/Testimonial.vue';
  import Contact from '../components/Contact.vue'
  
</script>

<style lang="scss">
// @import "./assets/scss/variable.scss";


</style>
