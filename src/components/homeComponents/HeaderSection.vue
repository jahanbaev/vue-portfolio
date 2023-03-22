<template>
    <div data-scene   data-speed="1.2" class="header" :style="'scale: ' + scale">
        <div class="container section">
            <div class="flex">
                <div class="sphere-shadow"></div>
                <h1 class="title">Hi, I'm <br> web <br> {{ '</dev>' }} </h1>
                <h1 class="title-shadow">Hi, I'm <br> web <br> {{ '</dev>' }} </h1>
                <img src="@/assets/images/sphere_home.png"
                    class="sphere centered"
                    alt=""
                >
                <div class="subtitle-frame">
                    <h1 class="subtitle">
                        <section class="subtitle_scroll">Scroll</section> <br>
                        <section class="subtitle_down">down</section>
                        <section class="subtitle_and"> and</section> <br>
                        <section class="subtitle_explore"> explore</section> <br>
                        about 
                        <section class="subtitle_me">{{ '</me>' }}</section></h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return {
            scale: 1
        }
    },
    mounted(){
        window.onscroll = () =>{
            this.scale = 1 - window.scrollY / 1500;
        }
    }
})
</script>

<style>
.header {
    padding-top: 0px;
    background: var(--dark-black);
}

.header .container .flex {
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 928px;
    overflow: hidden;
    position: relative;
}
.header .title,
.header .title-shadow {
    font-size: 136px;
    color: var(--white);
}
.header .title-shadow{
    transform: translateX(-100%);
    z-index: 3;
    margin-right: -574px;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
}
.header .sphere {
    width: 560px;
    object-fit: contain;
    z-index: 2;
    animation-name: sphere-anim;
    animation-duration:2s;
    animation-delay: 1000ms;
}
.header .sphere-shadow {
    position: absolute;
    width: 460px;
    height: 80px;
    border-radius: 50%;
    background: #8840fa;
    opacity: 0.3;
    bottom: 10px;
    filter: blur(30px);
}
.header .subtitle-frame {
    padding-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header .subtitle {
    color: var(--white);
    font-size: 42px;
}

.header .subtitle section {
    display: inline-block;
}
.header .subtitle_scroll {
    font-size: 82px;
    color: transparent;
    background-image: linear-gradient(126deg, #ffffff 16.67%, #222326 16.67%, #222326 50%, #ffffff 50%, #ffffff 66.67%, #222326 66.67%, #222326 100%);
    background-size: 7.42px 10.21px;
    -webkit-background-clip: text;
	background-clip: text;
}
.header .subtitle_down {
    font-size: 56px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
}
.header .subtitle_and {
    margin-left: 6px;
}
.header .subtitle_explore {
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
}
.header .subtitle_me {
    font-size: 34px;
    font-weight: 400;
    opacity: 0.8;
}

@media screen and (max-width: 1200px) {
    .header .title,
    .header .title-shadow {
        font-size: 110px;
    }
    .header .title-shadow {
        margin-right: -504px;
    }
    .header .sphere {
        width: 480px;
    }
}

@media screen and (max-width: 980px) {
    .header .title,
    .header .title-shadow {
        font-size: 96px;
    }
    .header .title-shadow {
        margin-right: -404px;
    }
    .header .sphere {
        width: 400px;
    }
    .header .subtitle_scroll {
        font-size: 72px;
    }
    .header .subtitle_down {
        font-size: 46px;
    }
    .header .subtitle_and {
        margin-left: 6px;
    }
    .header .subtitle_explore {
        font-size: 54px;
    }
    .header .subtitle_me {
        font-size: 24px;
    }
}

@media screen and (max-width: 880px) {
    .header .title,
    .header .title-shadow {
        font-size: 96px;
    }
    .header .title-shadow {
        margin-right: -300px;
    }
    .header .subtitle {
        display: none;
    }
}

@media screen and (max-width: 880px) {
    .header .container .flex {
        padding-left: 50px;
    }
    .header .title,
    .header .title-shadow {
        font-size: 96px;
    }
    .header .title-shadow {
        margin-right: -400px;
    }
    .header .sphere {
        width: 500px;
    }
}

@media screen and (max-width: 600px) {
    .header .container .flex {
        padding-left: 250px;
    }
    .header .title,
    .header .title-shadow {
        font-size: 96px;
    }
    .header .title-shadow {
        margin-right: -500px;
    }
}

@media screen and (max-width: 410px) {
    .header .container .flex {
        padding-left: 300px;
    }
    .header .title,
    .header .title-shadow {
        font-size: 96px;
    }
    .header .title-shadow {
        margin-right: -540px;
    }
}

@keyframes sphere-anim {
  0%   { transform: translate(-100%);}
  65%  {transform: translate(10%);}
  100% {transform: translate(0%);}
}
</style>