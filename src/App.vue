<template>
  <div class="wrapper">
    <Navbar class="bigNav" @scrollTo="scrollToSection"/>
    <SmallNavbar class="smallNav" @openMenu="toggleMenu"/>
    <transition name="menu">
    <Menu v-if="menuStatus" @scrollTo="closeMenuAndScrollToSection" @closeMenu="toggleMenu"/>
    </transition>


    <Home id="home"/>
    <hr/>
    <Services id="services"/>
    <hr/>
    <Resume id="resume"/>
    <hr/>
    <Slider id="testimony"/>
    <hr/>
    <Contact id="contact"/>
    <hr/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Navbar from './components/Navbar.vue'
  import SmallNavbar from './components/SmallNavbar.vue'
  import Home from './components/Home.vue'
  import Services from './components/Services.vue'
  import Resume from './components/Resume.vue'
  import Slider from './components/Slider.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import Menu from './components/Menu.vue'
  
  const menuStatus = ref<boolean>(false)
  const scrollToSection = (path: string) => {
      let x = document.querySelector(path)
      x?.scrollIntoView({behavior: 'smooth',block: "start", inline: "nearest"})
  }

  const closeMenuAndScrollToSection = (path: string) => {
    menuStatus.value = false
    scrollToSection(path)
  }

  const toggleMenu = () =>{
    menuStatus.value = !menuStatus.value;
  }
  
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
      margin: 70px auto 0;
      padding: 2rem 0;

      .bigNav{
        display: none;
      }

      hr{
        border: 1px solid black;
        margin: 2rem auto;
      }

      #home, #services, #resume, #testimony, #contact{
        scroll-margin-top: 5rem;
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

    .menu-enter-from{
        opacity: 0;
        transform: translateY(-400px);
    }

    .menu-leave-to{
        transform: translateY(400px);
        opacity: 0;
    }
    
    .menu-enter-active, .menu-leave-active{
        transition: all 0.4s ease-in-out;
    }

</style>
