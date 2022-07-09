<template>
    <div 
      class="card p-5 mx-auto w-auto max-w-[400px] text-left bg-white rounded-3xl"
      v-show="card.id == showSlide"
    >
        <img :src="card.img" :alt="card.name" class="mx-auto mb-3 w-20 h-20 rounded-full">
        <div class="info">
            <p class="story text-slate-600">{{card.desc}}</p>
            <div class="testifier mt-5">
                <p class="name text-green-900 font-medium">{{card.name}}</p>
                <p class="role text-slate-400">{{card.role}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card: {img:string, name:string, desc:string, role:string, id:number}
  showSlide:number
}>()

</script>

<style lang="scss">


</style>
