<template>
    <div class="smallNavbar">
        <h1><span>Z</span>UBS</h1>
        <i class="material-icons" @click="openMenu">menu</i>
    </div>
</template>

<script setup lang="ts">
    const emit = defineEmits(['openMenu'])
    const openMenu = () => {
        emit('openMenu')
    }
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.smallNavbar{
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: $appBackground;
        padding: 0 3%;
        z-index: 999;

        h1{
            span{
                color: $appRed;
            }
        }

        i{
            cursor: pointer;
        }
    }
</style>
