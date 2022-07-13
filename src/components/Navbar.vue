<template>
    <div class="navbar fixed w-full h-20 border backdrop-blur-md flex items-center justify-between px-4 text-white z-50">
        <h1 class="text-6xl text-slate-900 font-black">Z</h1>
        <div class="links hidden md:flex">
            <a
              class="group p-2 mx-2 text-slate-600 flex flex-col items-center"
              v-for="link in links" :key="link.text"
              :href="link.route"
            >
                <span class="w-1 h-1 rounded-full bg-green-900 invisible group-hover:visible"></span>
                <p class="group-hover:text-green-900">{{link.text}}</p>
            </a>
        </div>
        <i class="material-icons text-white text-md md:hidden bg-green-800 flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
            @click="showSidebar"
        >
            menu
        </i>
    </div>
</template>

<script setup lang="ts">
import { useSidebar } from '../composables/core/SidebarController';

    const { openSidebar } = useSidebar()
    const links = [
        {text: 'Home', route: '#home'},
        {text: 'About', route: '#about'},
        {text: 'Work', route: '#work'},
        {text: 'Skills', route: '#skills'},
        {text: 'Testimonial', route: '#testimonial'},
        {text: 'Contact', route: '#contact'},
    ]


    // functions
    const showSidebar = () => {
        openSidebar()
    }
  
</script>

<style lang="scss">
// @import "./assets/scss/variable.scss";


</style>
