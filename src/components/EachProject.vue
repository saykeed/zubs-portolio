<template>
    <div class="eachProject bg-slate-100 w-64 m-6 h-auto rounded-lg p-4 text-center hover:shadow-2xl">
        <div class=" group imgWrapper w-fit h-fit relative overflow-hidden rounded-2xl mx-auto">
            <img :src="project.img" alt="project-img" class="w-52 h-48 mx-auto rounded-lg object-cover object-center">
            <div class="options -translate-x-[100%] group-hover:translate-x-0 absolute top-[50%] -translate-y-[50%] left-0 flex items-center justify-center bg-[rgba(0,0,0,0.300)] h-full w-full transition-all duration-[300ms]">
                <a :href="project.github" target="_blank"
                   class="w-10 h-10 flex items-center justify-center mx-2 text-xl bg-[rgba(0,0,0,0.850)] rounded-full text-white"
                >
                    <i class="fa fa-github"></i>
                </a>
                <a :href="project.livelink" target="_blank"
                  class="w-10 h-10 flex items-center justify-center mx-2 text-xl bg-[rgba(0,0,0,0.850)] rounded-full text-white"
                >
                    <i class="material-icons">remove_red_eye</i>
                </a>
            </div>
        </div>
        <h3 class="font-bold text-xl my-2">{{project.title}}</h3>
        <p class="text-slate-400 text-sm">{{project.desc}}</p>
    </div>
    <!-- 

 v-for="project in projects" :key="project.title"
     -->
</template>

<script setup lang="ts">
    const props = defineProps<{
        project: {img:string, title:string, desc:string, livelink:string, github:string}
    }>()
  
</script>

<style scoped>

    
</style>
