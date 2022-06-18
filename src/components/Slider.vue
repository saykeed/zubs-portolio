<template>
    <div class="slider">
        <p class="subtitle">TESTMONIALS</p>
        <h1>WHAT CLIENTS SAY</h1>

        <div class="testimonialCards">
            <div class="cards"
              v-for="card in testimonials" :key="card.desc"
            >
                <p class="desc">{{card.desc}}</p>
                <div class="info">
                    <img :src="card.img" :alt="card.name">
                    <div class="nameAndRole">
                        <p class="name">{{card.name}}</p>
                        <p class="role">{{card.role}}</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
    const testimonials: {name:string, role:string, img:string, desc:string}[] = [
        {name: 'Tola Owolabi', role: 'Software Developer', img: 'https://media-exp2.licdn.com/dms/image/C4E03AQHhh4LruOLctQ/profile-displayphoto-shrink_100_100/0/1603625276783?e=1660780800&v=beta&t=2SLMhkA2auwTAt9XgkKIR2f5MziNbrvb2GjS3qrg0rQ', desc: 'Zubair is enthusiastic about products, a positive influence to the team.'},
        {name: 'Babatunde Koiki', role: 'Software Engineer', img: 'https://media-exp2.licdn.com/dms/image/C5603AQGVHpCMXZXTSA/profile-displayphoto-shrink_100_100/0/1639143765091?e=1660780800&v=beta&t=4yJYkBnsnX_ijg6NmdOhf8jElS17C6ZewTaQWdrcCyg', desc: 'Idris is a great software engineer and a colleague, he\'s proven himself as a great team member and also a great community builder.'},
        {name: 'Akinboluwarin Akinwande', role: 'Backend Engineer', img: 'https://media-exp2.licdn.com/dms/image/C4D03AQEjQpyW6IotYw/profile-displayphoto-shrink_100_100/0/1584598607809?e=1660780800&v=beta&t=1o-CAcRW8u5wPCpPnQtf8C_RSxzPvDjiWnIyVrfqTRA', desc: 'Iworked with Zubair on a project, https://certlify.com, sometime in 2020. He knew how to as the right questions, which often made the team reevaluate already taken decisions. He is a passionate and fast learner, a person I can say would be an asset to whatever team he is on.'}
    ]
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
            overflow-x: scroll;
            

            div.cards{
                width: 250px;
                height: 200px;
                box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.356), -2px -2px 1px rgba(0, 0, 0, 0.356);
                border-radius: 0.5rem;
                padding: 1rem;
                margin: 1rem;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

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
        }
    }
   

   @media screen and (min-width: 700px) {
        
    }
</style>
