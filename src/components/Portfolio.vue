<template>
    <div class="services relative py-14 bg-appBg">
        
        <h1 class="text-5xl w-[80%] max-w-[600px] mx-auto mb-16 font-bold">My <span class="text-green-700">Portfolio</span></h1>

        <div class="buttons flex items-center justify-center flex-wrap">
            <button 
              v-for="button in buttons" :key="button.keyword"
              class="bg-white py-1.5 px-4 m-2 rounded-lg font-semibold text-sm hover:bg-green-900 hover:text-white"
              :class="{'bg-green-900 text-white': button.keyword == filterKey}"
              @click="reArrange(button.keyword)"
            >
                {{button.title}}
            </button>
        </div>

        <div class="projectsBox flex flex-wrap items-center justify-center my-8">
                <EachProject v-for="project in filteredProject" :key="project.title" :project="project"/>
        </div>
        
        <SocialBtn/>
    </div>
</template>

<script setup lang="ts">
import SocialBtn from './SocialBtn.vue'
import EachProject from './EachProject.vue';
import { computed, ref } from 'vue';

    
    
    let filterKey = ref('all')
    const buttons = [
        {title: 'VUE JS', keyword: 'vue'},
        {title: 'NODE JS', keyword: 'node'},
        {title: 'LARAVEL', keyword: 'laravel'},
        {title: 'MONGO DB', keyword: 'mongo'},
        {title: 'MY SQL', keyword: 'sql'},
        {title: 'ALL', keyword: 'all'}
    ]

    let projects = [
        {title: 'Anonytexts', img: 'https://zubs.github.io/assets/img/screenshots/p_ss_1.png', desc: 'Anonytexts lets you message friends and family completely anonymously. Pull a prank with your friends or send your loved one a secret message', livelink: 'https://atexts.com/', github: 'https://github.com/zubs', lang: ['all', 'vue', 'node', 'mongo']},
        {title: 'Certlify', img: 'https://zubs.github.io/assets/img/screenshots/p_ss_7.jpeg', desc: 'Certlify lets you issue certificates to thousands of people in just a few steps.', livelink: 'https://certlify.com/', github: 'https://github.com/zubs', lang: ['all', 'node', 'mongo']},
        {title: 'Hameedonline', img: 'https://zubs.github.io/assets/img/screenshots/p_ss_7.jpeg', desc: 'Lorem ipsum dolor blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', livelink: 'https://hameedonline.com/', github: 'https://github.com/zubs', lang: ['all', 'vue', 'laravel']}
    ]

    // function    
    const reArrange = (key:string) => {
        filterKey.value = key
    }

    const filteredProject = computed(() => {
        return projects.filter((item) => item.lang.includes(filterKey.value))
    })



</script>

<style lang="scss">
    

</style>
