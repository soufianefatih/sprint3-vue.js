<template>
  <div id="app">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skils></Skils>
      <Myproject></Myproject>
      <Footer></Footer>
    
    
    
  </div>
</template>



<script>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Header from "./components/Header.vue";
import Myproject from './components/Myproject.vue';
import Skils from './components/Skils.vue';

export default {
  name: "App",
  components: {
    Header,
    About,
    Experience,
    Myproject,
    Skils,
  }
};
</script>
