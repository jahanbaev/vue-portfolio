<template>
    <div class="pre-loader" v-if="!loaded">
        <h1>loading...</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return{
            loaded: false
        }
    },
    mounted(){
        this.closePreLoader()
    },
    methods:{
        closePreLoader(){
            setTimeout(()=>{
                this.loaded = true;
            },1000)
        }
    }
})
</script>

<style>
.pre-loader {
    width: 100%;
    height: 100vh;
    z-index: 99999999999;
    position: fixed;
    background: var(--dark-black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>