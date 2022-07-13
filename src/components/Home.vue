<template>
    <div class="homeComp bg-appBg text-slate-400 p-5 pt-24 w-full relative lg:flex lg:items-start lg:justify-start">
        <div class="intro ml-5 pt-5 text-left">
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

        <div class="dp w-fit mx-auto my-14">
            <img class="w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full" src="../assets/img/zubs.jpg" alt="">
        </div>

        <div class="mainStack w-11/12 max-w-[500px] h-64 md:h-44 mx-auto relative lg:h-[450px] lg:w-[200px]">
            <div class="w-24 h-24 rounded-full bg-white flex items-center justify-center absolute top-0 left-0 md:left-[100%] md:-translate-x-[100%] lg:left-0 lg:translate-x-0 lg:top-[100%] lg:-translate-y-[100%]">
                <img class="w-7/12  object-cover" src="../assets/img/laravel.png" alt="">
            </div>
            <div class="w-32 h-32 rounded-full bg-white flex items-center justify-center absolute top-0 right-0 md:right-[50%] md:translate-x-[50%] md:top-[100%] md:-translate-y-[100%] lg:top-[50%] lg:-translate-y-[50%] lg:right-0 lg:translate-x-0">
                <img class="w-8/12  object-cover" src="../assets/img/vue.png" alt="">
            </div>
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:top-0">
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
