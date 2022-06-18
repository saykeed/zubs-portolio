<template>
    <div class="smallNavbar">
        <h1><span>Z</span>UBS</h1>
        <i class="material-icons">menu</i>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.smallNavbar{
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;

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
