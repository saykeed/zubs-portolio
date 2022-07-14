<template>
    <div class="services relative py-14 px-8">
        <h1 class="text-5xl w-[80%] max-w-[600px] mx-auto mb-16 font-bold">Skills & Experience</h1>

        <div class="stackAndExperience md:flex md:items-start justify-between w-full max-w-[900px] md:mx-auto">
            <div class="stack flex flex-wrap items-center justify-center md:w-[47%]">
                <div class="eachStack flex flex-col items-center w-fit m-3"
                    v-for="stack in stacks" :key="stack.text"
                >
                    <div class="stackImgBox w-20 h-20 rounded-full bg-slate-300 flex items-center justify-center">
                        <img class="w-8/12 object-cover object-center" :src="getImageUrl(`${stack.img}`)" :alt="stack.text"/>
                    </div>
                    <p>{{stack.text}}</p>
                </div>
            </div>

            <!-- <button data-tooltip-target="tooltip-default" type="button" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Default tooltip
            </button>
            <div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Tooltip content
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> -->

            <div class="experienceSection p-3 md:w-[47%]">
                <div
                    v-for="job in experiences" :key="job.duration"
                    :data-tooltip-target="job.id"
                    class="eachExperience text-left flex items-start justify-between mb-8 max-w-[400px] cursor-pointer"
                >
                    <p class="text-green-800 font-semibold w-[45%]">{{job.duration}}</p>
                    <div class="info text-left w-[50%]">
                        <p class="role font-bold">{{job.role}}</p>
                        <p class="company text-slate-400">{{job.company}}</p>
                    </div>
                </div>
                <div 
                  v-for="job in experiences" :key="job.duration"
                  :id="job.id" role="tooltip" 
                  class="inline-block absolute invisible max-w-[300px] z-20 p-3 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-xl opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    {{job.tooltip}}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
            

        <SocialBtn/>
    </div>

    
</template>

<script setup lang="ts">
import SocialBtn from './SocialBtn.vue'
  
    const stacks = [
        {img: 'nodejs.png', text: 'NodeJs'},
        {img: 'aws.jpg', text: 'AWS'},
        {img: 'git.png', text: 'Git'},
        {img: 'javascript.png', text: 'Javascript'},
        {img: 'php.png', text: 'Php'},
        {img: 'html.png', text: 'HTML'},
        {img: 'laravel.png', text: 'Laravel'},
        {img: 'css.png', text: 'Css'},
        {img: 'sass.png', text: 'Sass'},
        {img: 'tailwind.png', text: 'Tailwindcss'},
        {img: 'react.png', text: 'React'},
        {img: 'vue.png', text: 'VueJs'}
        
    ]

    const experiences = [
        {company: 'CodeTouch Technologies', role: 'Web Developer', duration: 'Dec 2019 - Nov 2020', id: 'codetouch', tooltip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati saepe ducimu.'},
        {company: 'CitonHub', role: 'Junior Backend Engineer', duration: 'Nov 2020 - Jan 2021', id: 'citonhub', tooltip: 'I Maintained and updated application core features. Also, Worked closely with the senior developer to implement core application features and functionalities in Laravel and VueJS'},
        {company: 'HumongouS.io', role: 'Software Engineer', duration: 'Mar 2021 - Jun 2021' , id: 'humongous', tooltip: '- Performed software testing to uncover bugs and troubleshoot issues prior to application launch. Authored code ﬁxes and enhancements for inclusion in future code releases and patches. Debugged and modiﬁed software components both on the frontend and backend using Typescript. Reviewed and approved code written by other engineer'},
        {company: 'AYU Digital Ltd', role: 'Software Engineer', duration: 'Jan 2022 - May 2022' , id: 'ayu', tooltip: 'I created and managed notification services. These notifications ranged from email notifications with Mailgun, to push notifications with Firebase, and SMS notifications with Twilio. I handled user authentication and verification with mobile numbers using Twilio\'s APIs. I implemented a unique data export algorithm that collects related data from tables, formats them into CSV or JSON, and sends them to the users. I implemented a user import feature that enables site administrators to upload CSV files containing user data to the platform. I integrated Stripe to facilitate payment..'},
        {company: 'Stax', role: 'Software Engineer', duration: 'May 2022 - Present' , id: 'stax', tooltip: 'Skills: React.js · TypeScript · PHP · Laravel · Node.js'}
    ]

    const getImageUrl = (path:string) => {
        return new URL(`../assets/img/stack/${path}`, import.meta.url).href
    }

</script>

<style lang="scss">


</style>
