<template>
    <div class="contact">
        <p class="subtitle">CONTACT</p>
        <h1>Contact Me</h1>
        <div class="contactGrid">
            <div class="location item">
                <i class="material-icons">location_on</i>
                <p>Lagos, Nigeria</p>
            </div>
            <div class="tel item">
                <i class="material-icons">phone</i>
                <p>+234-7052053780</p>
            </div>
            <div class="email item">
                <i class="material-icons">email</i>
                <p>zubairidrisaweda@yahoo.com</p>
            </div>
            <div class="freelance item">
                <i class="material-icons">event_available</i>
                <p>Available for freelance</p>
            </div>
            <div class="form">
                <form>
                    <div class="input">
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter your phone"/>
                        <input type="text" placeholder="Enter your email"/>
                        <input type="text" placeholder="Enter your subject"/>
                    </div>
                    <textarea placeholder="Enter your message"></textarea>
                    <button>Send Message <i class="material-icons">send</i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";

    div.contact{
        color: #fff;
        text-align: left;

        p.subtitle{
            color: $appRed;
            font-size: 0.6rem;
        }
        
        h1{
            margin: 0.5rem 0;
        }

        div.contactGrid{
            display: grid;
            grid-gap: 1rem;

            div.item{
                box-shadow: $appBoxShadow;
                border-radius: 0.5rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                min-height: 100px;
            }

            div.form{
                box-shadow: $appBoxShadow;
                border-radius: 0.5rem;
                padding: 1rem;

                form{
                    input{
                        height: 30px;
                        border-radius: 5px;
                        width: 100%;
                        margin: 0.5rem auto;
                        border: none;
                        outline: none;
                        background: black;
                        padding: 0.5rem;
                        color: white;
                    }

                    textarea{
                        min-height: 150px;
                        border-radius: 5px;
                        width: 100%;
                        margin: 0.5rem auto;
                        border: none;
                        outline: none;
                        background: black;
                        padding: 0.5rem;
                        color: white;
                        resize: none;
                    }

                    button{
                        width: 180px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: black;
                        color: #fff;
                        border-radius: 5px;
                        margin: 0 auto;

                        i{
                            vertical-align: middle;
                            font-size: 1rem;
                            margin-left: 1rem;
                        }
                    }
                }
            }
        }
    }
   

   @media screen and (min-width: 600px) {
        div.contactGrid{
            grid-template-columns: 45% 45%;
            justify-content: center;
            
            div.form{
                grid-column: 1/3;

                form{
                    div.input{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        
                        input{
                            width: 48%;
                            margin: 0.5rem 0;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 800px) {
        div.contactGrid{
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: auto auto auto auto;
            justify-content: center;
            
            div.location{
                grid-column: 1/2;
            }
            div.tel{
                grid-column: 1/2;
            }
            div.email{
                grid-column: 1/2;
            }
            div.freelance{
                grid-column: 1/2;
            }
            div.form{
                grid-column: 2/4;
                grid-row: 1/5;
                
                textarea{
                    height: 300px;
                }
            }
        }
    }
</style>
