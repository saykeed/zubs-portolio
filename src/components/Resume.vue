<template>
    <div class="resume">
        <p class="subtitle">YEARS OF EXPERIENCE</p>
        <h1>MY RESUME</h1>

        <div class="resumeCards">
            <div class="jobs">
                <h3>Work Experience</h3>
                <div class="cards"
                    v-for="card in jobs" :key="card.company"
                >
                    <h3>{{card.company}}</h3>
                    <p class="role">{{card.role}}</p>
                    <p class="desc">{{card.desc}}</p>
                </div>
            </div>
            <div class="education">
                <h3>Education</h3>
                <div class="cards">
                    <h3>University of Lagos</h3>
                    <p class="role">Bsc. in Computer Engineering</p>
                    <p class="desc">2019 - till present</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const jobs: {company:string, role:string, desc:string}[] = [
        {company: 'AstraPay', role: 'software Engineer', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimu.'},
        {company: 'AstraPay', role: 'software Engineer', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimu.'},
        {company: 'AstraPay', role: 'software Engineer', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimu.'}
    ]
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

    div.resume{
        color: #fff;
        text-align: left;

        p.subtitle{
            color: $appRed;
            font-size: 0.6rem;
        }
        
        h1{
            margin: 0.5rem 0;
        }

        div.resumeCards{
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-around;
            margin-bottom: 2rem;

            div.jobs{
                width: 100%;
                max-width: 300px;

                div.cards{
                    width: 100%;
                    max-width: 250px;
                    height: 150px;
                    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.356), -2px -2px 1px rgba(0, 0, 0, 0.356);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    margin: 1rem auto;

                    p.role{
                        font-size: 0.8rem;
                        color: $appRed;
                        margin: 0.1rem 0 0.5rem;
                    }

                    p.desc{
                        font-size: 0.8rem;
                        color: $fadeWhite;
                    }
                }
            }

            div.education{
                width: 100%;
                max-width: 300px;

                div.cards{
                    width: 100%;
                    max-width: 250px;
                    height: 150px;
                    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.356), -2px -2px 1px rgba(0, 0, 0, 0.356);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    margin: 1rem auto;

                    p.role{
                        font-size: 0.8rem;
                        color: $appRed;
                        margin: 0.1rem 0 0.5rem;
                    }

                    p.desc{
                        font-size: 0.8rem;
                        color: $fadeWhite;
                    }
                }
            }
        }
    }
   

   @media screen and (min-width: 700px) {
        
    }
</style>
