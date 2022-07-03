<template>
    <div class="navbar">
        <h1><span>Z</span>UBS</h1>
        <div class="links">
            <p v-for="link in links" :key="link.text" @click="scrollTo(link.route)">{{link.text}}</p>
        </div>
        <button>Download CV</button>
    </div>
</template>

<script setup lang="ts">
    const links:{route: string, text: string}[] = [
        {route: '#home', text: 'HOME'},
        {route: '#services', text: 'SERVICES'},
        {route: '#resume', text: 'RESUME'},
        {route: '#testimony', text: 'TESTIMONIALS'},
        {route: '#contact', text: 'CONTACT'}
    ]
    const emit = defineEmits(['scrollTo'])

    const scrollTo = (path: string) => {
        emit('scrollTo', path)
    }
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.navbar{
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

        div.links{
            display: flex;
            align-items: center;

            p{
                font-size: 0.8rem;
                color: $fadeWhite;
                display: block;
                margin: 0 0.7rem;
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
