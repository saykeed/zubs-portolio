<template>
    <div class="menu">
        
        <div class="menuOptions">
            <p v-for="link in links" :key="link.text" @click="scrollTo(link.route)">{{link.text}}</p>
        </div>
        
        <button @click="closeMenu"><i class="material-icons">close</i></button>
        
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
    const emit = defineEmits(['scrollTo', 'closeMenu'])

    const scrollTo = (path: string) => {
        emit('scrollTo', path)
    }

    const closeMenu = () => {
        emit('closeMenu')
    }


</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.menu{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: transparent;
        backdrop-filter: blur(3px);
        z-index: 9999;

        div.menuOptions{
            background: white;
            width: 80%;
            max-width: 400px;
            margin: 5rem auto 0;
            border-radius: 1rem;
            overflow: hidden;

            p{
                text-align: left;
                padding: 1rem;
                border-bottom: 1px solid $appRed;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                color: $appRed;

                &:last-child{
                    border: none;
                }

                &:hover{
                    background: $appRed;
                    color: white;
                }
            }
        }

        button{
            position: absolute;
            top: 1rem;
            right: 1rem;
            background:white;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            color: $appRed;

            i{
                font-size: 1.3rem;
                font-weight: 600;
            }

            &:hover{
                background: $appRed;
                color: white;
            }
        }
        
    }
</style>
