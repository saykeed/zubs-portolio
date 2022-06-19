<template>
    <div class="slider">
        <p class="subtitle">TESTMONIALS</p>
        <h1>WHAT CLIENTS SAY</h1>

        <div class="testimonialCards">
            
                <SliderCard
                    v-for="(card, index) in testimonials" :key="card.id"
                    :card="card"
                    :index="index"
                    :slide="currentSlide"
                    :slidePath="slidePath"
                /> 
           
        </div>
        <div class="buttons">
            <button @click="prev"><i class="material-icons">arrow_back</i></button>
            <button @click="next"><i class="material-icons">arrow_forward</i></button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import SliderCard from '../components/SliderCard.vue'

    const currentSlide = ref(1)
    const slidePath = ref('')
    const testimonials: {id: number, name:string, role:string, img:string, desc:string}[] = [
        {id: 1, name: 'Tola Owolabi', role: 'Software Developer', img: 'https://media-exp2.licdn.com/dms/image/C4E03AQHhh4LruOLctQ/profile-displayphoto-shrink_100_100/0/1603625276783?e=1660780800&v=beta&t=2SLMhkA2auwTAt9XgkKIR2f5MziNbrvb2GjS3qrg0rQ', desc: 'Zubair is enthusiastic about products, a positive influence to the team.'},
        {id: 2, name: 'Babatunde Koiki', role: 'Software Engineer', img: 'https://media-exp2.licdn.com/dms/image/C5603AQGVHpCMXZXTSA/profile-displayphoto-shrink_100_100/0/1639143765091?e=1660780800&v=beta&t=4yJYkBnsnX_ijg6NmdOhf8jElS17C6ZewTaQWdrcCyg', desc: 'Idris is a great software engineer and a colleague, he\'s proven himself as a great team member and also a great community builder.'},
        {id: 3, name: 'Akinboluwarin Akinwande', role: 'Backend Engineer', img: 'https://media-exp2.licdn.com/dms/image/C4D03AQEjQpyW6IotYw/profile-displayphoto-shrink_100_100/0/1584598607809?e=1660780800&v=beta&t=1o-CAcRW8u5wPCpPnQtf8C_RSxzPvDjiWnIyVrfqTRA', desc: 'Iworked with Zubair on a project, https://certlify.com, sometime in 2020. He knew how to as the right questions, which often made the team reevaluate already taken decisions. He is a passionate and fast learner, a person I can say would be an asset to whatever team he is on.'}
    ]

    const next = () => {
        slidePath.value = 'next'
        if(currentSlide.value >= testimonials.length -1) {
            currentSlide.value = 0
        } else {
            currentSlide.value++
        }
    }

    const prev = () => {
        slidePath.value = 'prev'
        if(currentSlide.value <= 0) {
            currentSlide.value = testimonials.length -1
        } else {
            currentSlide.value--
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.slider{
        color: #fff;
        text-align: left;

        p.subtitle{
            color: $appRed;
            font-size: 0.6rem;
        }
        
        h1{
            margin: 0.5rem 0;
        }

        div.testimonialCards{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            height: 300px;
        }

        div.buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;

            button{
                width: 70px;
                height: 30px;
                background: $appRed;
                color: white;
                border: none;
                margin: 0 0.5rem;
                border-radius: 0.2rem;
            }
        }
    }
   

   @media screen and (min-width: 700px) {
        
    }


</style>
