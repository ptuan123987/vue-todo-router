<template>
  <div class="">
    <VueNavigation/>
    <p>Tôi là tuấn</p>
  </div>
</template>
<script>
import VueNavigation from './components/VueNavigation.vue';

  export default {
    components: { VueNavigation }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
