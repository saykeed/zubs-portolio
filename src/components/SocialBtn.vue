<template>
    <div class="socialBtn absolute bottom-4 left-4 flex-col items-center hidden md:flex">
        <a 
         class="group w-10 h-10 rounded-full flex items-center justify-center bg-white my-1 hover:bg-green-900"
         v-for="link in links"
         :key="link.icon"
         :href="link.route">
            <i :class="link.icon" class="group-hover:text-white"></i>
        </a>
    </div>
</template>

<script setup lang="ts">
  
    const links = [
        {icon: 'fa fa-twitter', route: '/'},
        {icon: 'fa fa-whatsapp', route: '/'},
        {icon: 'fa fa-instagram', route: '/'},
        {icon: 'fa fa-linkedin', route: '/'}
    ]
</script>

<style lang="scss">

</style>
