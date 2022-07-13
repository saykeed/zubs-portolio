<template>
    <div class="contact relative py-14 px-8 md:px-20 bg-appBg">
        
        <h1 class="mx-auto mb-5 text-5xl font-bold ">Let's Discuss Your Business</h1>
        
        <div class="calendly-inline-widget" data-url="https://calendly.com/saykeed" style="min-width:320px;height:630px;"></div>

        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SocialBtn from './SocialBtn.vue'

onMounted(() => {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
})
 
</script>

<style lang="scss">


</style>
