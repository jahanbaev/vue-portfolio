<template>
    <div  data-scene  data-speed="1.8" class="container">
        <h1 class="container-title"
            data-aos="fade-up"
        >
            History road
        </h1>
        <div class="banner flex">
            <div v-for="card in history"
                :key="card.time"    
                class="frame">
                <h2>
                    {{card.name}}
                </h2>
                <p>
                    {{card.time}}
                </p>
            </div>
            <img class="banner-sphere" src="@/assets/spheres/spehere_banner.png" alt="">
            
        </div>
        <img src="@/assets/spheres/SuperToroid-White-Glossy.png"
        class="decor left-top"
        data-aos="fade-up"
        alt="">
        <img src="@/assets/spheres/RoundCube-Black-Matte.png"
        class="decor right-bottom"
        data-aos="fade-up"
        alt="">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return {
            history: [{
                name: "Freelance",
                description: "",
                time: "2019-2020"
            },
            {
                name: "DecimalChain",
                description: "",
                time: "2021-2022"
            },
            {
                name: "Kiber-one",
                description: "",
                time: "2022-2023"
            }]
        }
    }
})
</script>

<style>
.banner {
    width: 100%;
    height: 230px;
    position: relative;
    z-index: 1;
    background: rgba(33, 34, 38, 0.059);
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 0px #ffffff60;
}
.banner::after,
.banner::before {
    content: "";
    display: block;
    width: 50%;
    height: 140px;
    position: absolute;
    left: -50px;
    bottom: -50px;
    border-radius: 50%;
    background: #2affdc;
    opacity: 0.5;
    filter: blur(40px);
    transform: rotate(10deg);
}

.banner::before {
    width: 50%;
    height: 140px;
    position: absolute;
    left: 150px;
    bottom: -20px;
    background: #952aff;
    opacity: 0.5;
    filter: blur(40px);
    transform: rotate(20deg);
}
.banner .frame {
    color: rgba(33, 34, 38, 0.718);
    margin-left: 20px;
    margin-top: 5px;
}

.banner .frame:not(:first-child) {
    margin-left: 100px;
}

.banner .frame::after {
    content: "";
    display: block;
    width: calc(100% + 40px);
    height: 2px;
    background: rgba(33, 34, 38, 0.718);
    transform: translate(0px, -50px);
}

.banner .banner-sphere {
    width: 350px;
    height: 350px;
    margin-left: auto;
    transform: translateX(56px);
}
.left-top {
    width: 200px;
    top: -10px;
    left: -100px;
}
.right-bottom {
    width: 200px;
    bottom: -100px;
    right: -120px;
    z-index: 2;
    filter: blur(5px);
}
</style>