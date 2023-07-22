<template>
  <div class="app">
    <RouterView/>
  </div>
  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue';
export default {
  name: "App",
    components: {
    }, 
    
}
</script>

<style >
</style>
