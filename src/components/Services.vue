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
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'},
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'},
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'},
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'},
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'},
        {icon: 'computer', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo.'}
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
