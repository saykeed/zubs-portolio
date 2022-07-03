<template>
<transition :name="slidePath" mode="out-in">
    <div class="cards" v-if="index == slide">
        <p class="desc">{{card.desc}}</p>
        <div class="info">
            <img :src="card.img" :alt="card.name">
            <div class="nameAndRole">
                <p class="name">{{card.name}}</p>
                <p class="role">{{card.role}}</p>
            </div>
        </div>
    </div> 
</transition>
</template>

<script setup lang="ts">
    const props = defineProps({
        card: Object,
        slide: Number,
        index: Number,
        slidePath: String
    })
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

    div.cards{
        width: 250px;
        height: 200px;
        box-shadow: $appBoxShadow;
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;

        p.desc{
            font-size: 0.7rem;
            color: $fadeWhite;
        }

        div.info{
            display: flex;
            align-items: center;

            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 2.5rem;
                margin-right: 1rem;
                object-fit: cover;
                object-position: top center;
            }

            div.nameAndRole{
                p.name{
                    font-weight: 500;
                    font-size: 0.8rem;
                }

                p.role{
                    font-weight: 300;
                    font-size: 0.7rem;
                    color: $appRed;
                }
            }
        }
    }
   
    .next-enter-from{
        transform: translateX(100%);
        opacity: 0;
    }
    .next-enter-to{
        transform: translateX(0);
        opacity: 1;
    }
    .next-leave-from{
        transform: translateX(0);
        opacity: 1;
    }
    .next-leave-to{
        transform: translateX(-100%);
        opacity: 0;
    }
    .next-enter-active, .next-leave-active{
        transition: all 1s ease-in-out;
    }



    .prev-enter-from{
        transform: translateX(-100%);
        opacity: 0;
    }
    .prev-enter-to{
        transform: translateX(0%);
        opacity: 1;
    }
    .prev-leave-from{
        transform: translateX(0);
        opacity: 1;
    }
    .prev-leave-to{
        transform: translateX(100%);
        opacity: 0;
    }
    .prev-enter-active, .prev-leave-active{
        transition: all 1s ease-in-out;
    }
   @media screen and (min-width: 700px) {
        
    }

   
</style>
