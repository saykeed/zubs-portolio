<template>
    <div class="testimonial relative py-14 px-8 bg-appBg">
        <TestimonyCard
          v-for="card in testimonials" :key="card.id"
          :card="card"
          :showSlide="showSlide"
        />

        <div class="slideController w-full max-w-[150px] flex items-center justify-between mx-auto mt-10">
            <button class="flex items-center justify-center w-12 h-12 bg-white rounded-full" @click="prev">
                <i class="material-icons">chevron_left</i>
            </button>
            <button class="flex items-center justify-center w-12 h-12 bg-white rounded-full" @click="next">
                <i class="material-icons">chevron_right</i>
            </button>
        </div>

        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SocialBtn from './SocialBtn.vue'
import TestimonyCard from './TestimonyCard.vue';
  
  const showSlide = ref(1)
  const testimonials = [
    {id: 1, name: 'Tola Owolabi', role: 'Software Developer', img: 'https://media-exp2.licdn.com/dms/image/C4E03AQHhh4LruOLctQ/profile-displayphoto-shrink_100_100/0/1603625276783?e=1660780800&v=beta&t=2SLMhkA2auwTAt9XgkKIR2f5MziNbrvb2GjS3qrg0rQ', desc: 'Zubair is enthusiastic about products, a positive influence to the team.'},
    {id: 2, name: 'Babatunde Koiki', role: 'Software Engineer', img: 'https://media-exp2.licdn.com/dms/image/C5603AQGVHpCMXZXTSA/profile-displayphoto-shrink_100_100/0/1639143765091?e=1660780800&v=beta&t=4yJYkBnsnX_ijg6NmdOhf8jElS17C6ZewTaQWdrcCyg', desc: 'Idris is a great software engineer and a colleague, he\'s proven himself as a great team member and also a great community builder.'},
    {id: 3, name: 'Akinboluwarin Akinwande', role: 'Backend Engineer', img: 'https://media-exp2.licdn.com/dms/image/C4D03AQEjQpyW6IotYw/profile-displayphoto-shrink_100_100/0/1584598607809?e=1660780800&v=beta&t=1o-CAcRW8u5wPCpPnQtf8C_RSxzPvDjiWnIyVrfqTRA', desc: 'Iworked with Zubair on a project, https://certlify.com, sometime in 2020. He knew how to as the right questions, which often made the team reevaluate already taken decisions. He is a passionate and fast learner, a person I can say would be an asset to whatever team he is on.'}
 ]

 const next = () => {
    if(showSlide.value >= testimonials.length) {
        showSlide.value = 1
    } else {
        showSlide.value++
    }
 }

 const prev = () => {
    if(showSlide.value <= 1) {
        showSlide.value = testimonials.length
    } else {
        showSlide.value--
    }
 }
</script>

<style lang="scss">


</style>
