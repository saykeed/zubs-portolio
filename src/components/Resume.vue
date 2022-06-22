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
                    <p class="duration">{{card.duration}}</p>
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
    const jobs: {company:string, role:string, duration:string, desc:string}[] = [
        {company: 'CodeTouch Technologies', role: 'Web Developer', duration: 'Dec 2019 - Nov 2020', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimu.'},
        {company: 'CitonHub', role: 'Junior Backend Engineer', duration: 'Nov 2020 - Jan 2021', desc: 'I Maintained and updated application core features. Also, Worked closely with the senior developer to implement core application features and functionalities in Laravel and VueJS'},
        {company: 'HumongouS.io', role: 'Software Engineer', duration: 'Mar 2021 - Jun 2021', desc: '- Performed software testing to uncover bugs and troubleshoot issues prior to application launch. Authored code ﬁxes and enhancements for inclusion in future code releases and patches. Debugged and modiﬁed software components both on the frontend and backend using Typescript. Reviewed and approved code written by other engineer'},
        {company: 'AYU Digital Ltd', role: 'Software Engineer', duration: 'Jan 2022 - May 2022', desc: ' I created and managed notification services. These notifications ranged from email notifications with Mailgun, to push notifications with Firebase, and SMS notifications with Twilio. I handled user authentication and verification with mobile numbers using Twilio\'s APIs. I implemented a unique data export algorithm that collects related data from tables, formats them into CSV or JSON, and sends them to the users. I implemented a user import feature that enables site administrators to upload CSV files containing user data to the platform. I integrated Stripe to facilitate payment..'},
        {company: 'Stax', role: 'Software Engineer', duration: 'May 2022 - Present', desc: 'Skills: React.js · TypeScript · PHP · Laravel · Node.js'}
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
                    box-shadow: $appBoxShadow;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    margin: 1rem auto;

                    p.role{
                        font-size: 0.8rem;
                        color: $appRed;
                    }

                    p.duration{
                        font-size: 0.8rem;
                        color: white;
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
