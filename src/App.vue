<template>
  <div class="wrapper">
    <Navbar class="bigNav"/>
    <SmallNavbar class="smallNav"/>
    <Home/>
    <hr/>
    <Services/>
    <hr/>
    <Resume/>
    <hr/>
    <Slider/>
    <hr/>
    <Contact/>
    <hr/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import SmallNavbar from './components/SmallNavbar.vue'
  import Home from './components/Home.vue'
  import Services from './components/Services.vue'
  import Resume from './components/Resume.vue'
  import Slider from './components/Slider.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  
</script>

<style lang="scss">
@import "./assets/scss/variable.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: $appBackground;

    div.wrapper{
      width: 90%;
      max-width: 900px;
      margin: 0 auto;

      .bigNav{
        display: none;
      }

      hr{
        border: 1px solid black;
        margin: 2rem auto;
      }
    }
  }

  @media screen and (min-width: 700px) {
      .bigNav{
        display: flex !important;
      }
      .smallNav{
        display: none !important;
      }
  }


</style>
