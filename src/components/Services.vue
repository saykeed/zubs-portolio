<template>
    <div class="services">
        <p class="subtitle">MY SERVICES</p>
        <h1>WHAT I DO</h1>

        <div class="servicesCards">
            <div class="cards"
              v-for="card in cards" :key="card.icon"
            >
                <i class="material-icons">{{card.icon}}</i>
                <h3>{{card.title}}</h3>
                <p>{{card.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const cards: {icon:string, title:string, desc:string}[] = [
        {icon: 'computer', title: 'Frontend Development', desc: 'By leveraging on my proficient knowledge of HTML, CSS, and modern JavaScript, I can build intuitive frontend interfaces with amazing user experiences.'},
        {icon: 'computer', title: 'Backend Engineering', desc: 'With a solid grasp of Python and NodeJs I\'m able to work the backend logic of any application like magic and turn ordinary webpages into web apps.'},
        {icon: 'computer', title: 'API Development', desc: 'Need to make an app with a web-based server? My knowledge of RESTful APIs development is sufficient enough to make that happen.'},
        {icon: 'computer', title: 'Frontend and Backend Optimzation', desc: 'Nobody likes it slow... So, let\'s add a programming equavalent of NO2 gas into your frontend or backend logic and make it go fast... 🛫🛫🛫'},
        {icon: 'computer', title: 'Database Management', desc: 'From Relational to Object-based, I\'ve got a quite intermediate knowledge of databases and I can help you manage them.'},
        {icon: 'computer', title: 'Plugins and Extensions Development', desc: 'Hmmm... I smell exotic. I guess you\'re looking to make your app a little more sophisticating, right? Well, you\'re in for a treat cos I\'ve got the juice to make that happen.'}
    ]
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

    div.services{
        text-align: left;
        color: #fff;

        p.subtitle{
            color: $appRed;
            font-size: 0.6rem;
        }
        
        h1{
            margin: 0.5rem 0;
        }

        div.servicesCards{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;

            div.cards{
                width: 100%;
                max-width: 250px;
                height: 250px;
                box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.356), -2px -2px 1px rgba(0, 0, 0, 0.356);
                border-radius: 0.5rem;
                padding: 1rem;
                margin: 1rem;

                i{
                    font-size: 3rem;
                    color: $appRed;
                }

                h3{
                    margin: 0.5rem 0;
                }

                p{
                    font-size: 0.8rem;
                    color: $fadeWhite;
                }
            }
        }
    }
   

   @media screen and (min-width: 700px) {
        
    }
</style>
