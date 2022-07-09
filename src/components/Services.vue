<template>
    <div class="services relative py-14">
        <h1 class="text-5xl w-[80%] max-w-[600px] mx-auto mb-16 font-bold">I know That <span class="text-green-700">Good Apps</span> Means <span class="text-green-700">Good Business</span></h1>

        <div class="samples flex flex-wrap items-start justify-center">
            <div class="eachSample w-56 p-2 my-3 mx-4 md:mx-6 text-left hover:scale-[1.1] transition-all"
              v-for="sample in samples"
            >
                <img :src="sample.image" alt="" class="w-full h-44 rounded-3xl object-cover">
                <p class="font-bold text-lg">{{sample.title}}</p>
                <p class="text-slate-400">{{sample.desc}}</p>
            </div>
        </div>
        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import SocialBtn from './SocialBtn.vue'

    const samples = [
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/560cd6c6d0f292a1983a77acbd7d0504b8476f33-1600x1200.png', title: 'E commerce Application Development', desc: 'Development and design of eCommerce web store for retailers and vendors alike.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/1623127d3ade8ae2d71e2565edc03d12e9713a2e-1600x1200.png', title: 'Fintech Application Developer', desc: 'implementation of secured payment APIs for fintech startups and businesses with payment integration in mind.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png', title: 'Agriculture Application Developer', desc: 'Development of Applications for the agricultural industry.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/5751846f155b4c18cd78bae2eb8e60f916ec7c5d-1600x1200.jpg', title: 'Food Vendor / Resturant Application Developer', desc: 'I build web application for restaurants and food vendors..'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/fe19afe31bb1afbed226d0cad45684ed7ae2a45d-1600x1200.png', title: 'Real Estate Application Developer', desc: 'I build web applications for real estate companies and for realtors.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/81cb6de2a40105330bf07a6dfe6c6eaa643d8d95-1600x1200.png', title: 'E-learning', desc: 'Development, designing and building of flexible, accessible and engaging online learning platforms for all ages. While also focusing on being cost effective.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/569d79b65be285e6914ffeebf6dd292a817935a3-1345x628.png', title: 'Entertainment Business Application Developer', desc: 'Development of Applications for the entertainment industry.'},
        {image: 'https://cdn.sanity.io/images/og7gp9q6/production/b65def403cd8667535508d4680f39fec1df6f87d-588x293.jpg', title: 'API Development', desc: 'Development of fast and secured back end APIs.'}
    ]
  
</script>

<style lang="scss">


</style>
