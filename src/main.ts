import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueSmoothScroll from 'vue3-smooth-scroll';

const AOS = require('aos');
import 'aos/dist/aos.css';
AOS.init();

const rallax = require('rallax.js');
const target = document.querySelector('#app')
const parallax = rallax(target, { speed: 0.2,  mobilePx: false });
parallax.start();

window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

createApp(App).use(store).use(router).use(VueSmoothScroll).mount('#app')
