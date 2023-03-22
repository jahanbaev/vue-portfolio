<template>
  <div class="home">
    <HeaderSection/>
    <WorkMap/>
    <AboutMe/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderSection from '@/components/homeComponents/HeaderSection.vue';
import WorkMap from '@/components/homeComponents/WorkMap.vue';
import AboutMe from '@/components/homeComponents/AboutMe.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderSection,
    WorkMap,
    AboutMe
  }
})
</script>
