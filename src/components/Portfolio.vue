<template>
    <div class="services relative py-14 bg-appBg">
        <h1 class="text-5xl w-[80%] max-w-[600px] mx-auto mb-16 font-bold">My <span class="text-green-700">Portfolio</span></h1>

        <div class="buttons flex items-center justify-center flex-wrap">
            <button class="bg-white p-2 m-3 rounded-lg">ALL</button>
            <button>VUE JS</button>
            <button>NODE JS</button>
            <button>LARAVEL</button>
            <button>MONGO DB</button>
            <button>MY SQL</button>
        </div>
        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import SocialBtn from './SocialBtn.vue'
  
</script>

<style lang="scss">


</style>
