<template>
  <div id="app">
    <!-- <div class="container-fluid"> -->
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skils></Skils>
      <Myproject></Myproject>
      <Footer></Footer>
    <!-- </div> -->
    
    
  </div>
</template>



<script>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Header from "./components/Header.vue";
import Myproject from './components/Myproject.vue';
import Skils from './components/Skils.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    About,
    Experience,
    Myproject,
    Skils,
    Footer
  }
};
</script>
<style scoped>

</style>
