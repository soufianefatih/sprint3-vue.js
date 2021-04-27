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
<<<<<<< HEAD
import Footer from './components/Footer.vue';
=======
>>>>>>> dd0c3c65b90bb7d22e380033cd488d72862d9ac8

export default {
  name: "App",
  components: {
    Header,
    About,
    Experience,
    Myproject,
    Skils,
<<<<<<< HEAD
    Footer
=======
>>>>>>> dd0c3c65b90bb7d22e380033cd488d72862d9ac8
  }
};
</script>
<style scoped>

</style>
