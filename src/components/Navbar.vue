<template>
    <div class="navbar">
        <h1><span>Z</span>UBS</h1>
        <div class="links">
            <router-link v-for="link in links" :key="link.text" to="/">{{link.text}}</router-link>
        </div>
        <button>Download CV</button>
    </div>
</template>

<script setup lang="ts">
    const links:{route: string, text: string}[] = [
        {route: '/', text: 'HOME'},
        {route: '/', text: 'SERVICES'},
        {route: '/', text: 'PORTFOLIO'},
        {route: '/', text: 'RESUME'},
        {route: '/', text: 'CONTACT'}
    ]
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.navbar{
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

        div.links{
            display: flex;
            align-items: center;

            router-link{
                font-size: 0.8rem;
                color: $fadeWhite;
                display: block;
                margin: 0 1rem;
                cursor: pointer;
                font-weight: 500;

                &:hover{
                    color: white;
                }
            }
        }

        button{
            background: $appRed;
            color: white;
            border: none;
            width: 120px;
            height: 30px;
            border-radius: 1rem;

        }
    }

    
</style>
