<template>
    <nav class="navbar"
        :class="[{'responsive' : !navCollapsed},{}]"
        id="myNavbar">
        <div class="container">
            <router-link to="/">JS</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/about">About</router-link>
            <div class="icon-mobile icon " to.stop="javascript:void(0);" @click="navabarCollapse()">
                &#9776;
            </div>
        </div>
    </nav>
</template>

<script lang="ts">

interface InavBar {
    navCollapsed: boolean;
    scrolled: boolean;
}

import { defineComponent } from "vue";

export default defineComponent({
  data() : InavBar {
    return {
        navCollapsed: true,
        scrolled: false
    }
  },
  methods:{
    navabarCollapse(){
        this.navCollapsed = !this.navCollapsed;
    }
  }
});
</script>

<style>
.navbar {
    overflow: hidden;
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
.navbar a,
.navbar .icon {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    font-size: 20px;
    text-decoration: none;
}
.navbar .icon {
    margin-left: auto;
    float: right;
}
@media screen and (max-width: 600px) {
    .navbar a:not(:first-child) {display: none;}
    .navbar .icon {
      float: right;
      display: block;
    }
    
    .navbar.responsive {
        position:relative;
    }
    .navbar.responsive .icon {
      position:absolute;
      right:0;
      top:0;
    }
    .navbar.responsive a {
      float:none;
      display:block;
      text-align:left;
    }
}
</style>
