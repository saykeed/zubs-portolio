<template>
    <div class="home">
        <div class="dp">
            <img src="../assets/img/zubs.jpg" alt="">
        </div>
        <div class="content">
            <p class="hello">Hello <span>I'm</span></p>
            <h1>Zubair Idris<br/>Aweda</h1>
            <h3>Software Engineer</h3>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimus fugit, odit veritatis minima velit consequuntur dolorum placeat, incidunt ipsum deserunt atque impedit quo. Cupiditate eaque id a.</p>
            <div class="social">
                <p>FIND ME ON</p>
                <div class="handle">
                    <router-link
                    v-for="link in socialLinks" :key="link.icon"
                    :to="link.route"
                    >
                        <i :class="link.icon"></i>
                    </router-link>
                </div>
            </div>
            <div class="records">
                <div>
                    <h2>3+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div>
                    <h2>15+</h2>
                    <p>GLOBAL WORKING CLIENT</p>
                </div>
                <div>
                    <h2>30+</h2>
                    <p>AWARD WIN</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const socialLinks: {icon:string, route:string}[] = [
        {icon: 'fa fa-twitter', route: '/'},
        {icon: 'fa fa-github', route: '/'},
        {icon: 'fa fa-linkedin', route: '/'}
    ]
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

   div.home{
       margin-top: 2rem;
       
       div.dp{

           img{
               width: 150px;
               height: 150px;
               object-fit: cover;
               object-position: top center;
               border-radius: 150px;
           }
       }

       div.content{
           color: #fff;
           text-align: left;

           p.hello{
               font-size: 1.2rem;

               span{
                   color: $appRed;
               }
           }

           h1{
               margin: 0.7rem 0;
               line-height: 30px;
           }

           p.desc{
               color: $fadeWhite;
               font-size: 0.7rem;
               margin: 0.5rem 0 1.5rem;
           }

           div.social{
               p{
                   font-size: 0.8rem;
               }
               
               div.handle{
                   display: flex;
                   align-items: center;
                   margin: 1rem 0;

                   router-link{
                       display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 2rem;
                        width: 2rem;
                        background: black;
                        margin-right: 0.5rem;
                        border-radius: 0.4rem;
                   }
               }
           }

            div.records{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-top: 2rem;
                
                div{
                    p{
                        font-size: 0.7rem;
                        color: $fadeWhite;
                    }
                }
            }
       }
   }

   @media screen and (min-width: 700px) {
        div.home{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row-reverse;

            div.dp{
                width: 300px;

                img{
                    width: 200px;
                    height: 200px;
                    border-radius: 200px;
                }
            }
            
            div.content{
                width: calc(100% - 300px);
                
            }
        }
    }
</style>
