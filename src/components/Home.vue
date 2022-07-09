<template>
    <div class="homeComp bg-appBg text-left text-slate-400 p-5 pt-12 relative">
        <div class="intro ml-5 mt-3 pt-5 " data-aos="fade-right">
            <div class="name m-4 mb-6 p-5 shadow-2xl rounded-lg w-64 flex items-center justify-between">
                <span class="text-4xl">👋</span>
                <div>
                    <p>Hi i am</p>
                    <h1 class="text-3xl text-black font-bold">Zubair Idris</h1>
                </div>
                
            </div>
            <div class="role m-4 mt-8 p-5 shadow-2xl rounded-lg w-48 text-sm">
                SOFTWARE ENGINEER <br/>
                FREELANCE & CONTRACT
            </div>
        </div>

        <div class="dp w-fit mx-auto mt-28">
            <img class="w-64 h-64 rounded-full" src="../assets/img/zubs.jpg" alt="">
        </div>

        <div class="mainStack w-8/12 max-w-lg h-64 md:h-44 mx-auto border-2 border-rose-600 relative " data-aos="zoom-in">
            <div class="w-24 h-24 rounded-full bg-white flex items-center justify-center absolute top-0 left-0">
                <img class="w-7/12  object-cover" src="../assets/img/laravel.png" alt="">
            </div>
            <div class="w-32 h-32 rounded-full bg-white flex items-center justify-center absolute top-0 right-0">
                <img class="w-8/12  object-cover" src="../assets/img/vue.png" alt="">
            </div>
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
                <img class="w-8/12  object-cover" src="../assets/img/other.png" alt="">
            </div>
        </div>

        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import SocialBtn from './SocialBtn.vue'
  
</script>

<style lang="scss">
// @import "./assets/scss/variable.scss";



</style>
