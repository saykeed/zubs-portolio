<template>
    <div class="footer">
        <h1><span>Z</span>UBS</h1>
        <div class="handle">
            <router-link
            v-for="link in socialLinks" :key="link.icon"
            :to="link.route"
            >
                <i :class="link.icon"></i>
            </router-link>
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

    div.footer{
        color: #fff;
        text-align: center;
        height: 100px;

        h1{
            span{
                color: $appRed;
            }
        }

        div.handle{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem auto 0;

            router-link{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2rem;
                width: 2rem;
                background: black;
                margin-right: 0.5rem;
                border-radius: 0.4rem;
                cursor: pointer;
            }
        }
        
    }
   

   

    @media screen and (min-width: 800px) {
        
    }
</style>
