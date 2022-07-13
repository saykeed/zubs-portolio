<template>
    <transition name="menu">
    <div class="sidemenu bg-white fixed bottom-0 right-0 w-[80%] h-screen z-50 py-8 px-5 text-left"
        v-if="sidebarStatus"
    >
        <i class="material-icons absolute top-2 right-2 text-3xl text-green-900 cursor-pointer"
            @click="hideSidebar"
        >
            close
        </i>

        <router-link
          v-for="link in links" :key="link.text"
          :to="link.route"
          class="block py-3 my-2 text-slate-400 font-medium uppercase hover:text-green-800"
        >
            {{link.text}}
        </router-link>
    </div> 
    </transition>
</template>

<script setup lang="ts">
import { useSidebar } from '../composables/core/SidebarController';

    const { sidebarStatus, closeSidebar } = useSidebar()
    const links = [
        {text: 'Home', route: '/'},
        {text: 'About', route: '/'},
        {text: 'Work', route: '/'},
        {text: 'Skills', route: '/'},
        {text: 'Testimonial', route: '/'},
        {text: 'Contact', route: '/'},
    ]


    // function
    const hideSidebar = () => {
        closeSidebar()
    }
  
</script>

<style lang="scss" scoped>

    .menu-enter-from{
        transform: translateX(150px);
        opacity: 0;
    }
    .menu-leave-to{
        transform: translateX(150px);
        opacity: 0;
    }
    .menu-enter-active, .menu-leave-active{
        transition: all 0.5s ease-in-out;
    }
</style>
