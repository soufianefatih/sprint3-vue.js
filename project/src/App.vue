
<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/help">Help</router-link> -->
    <nav class="navbar navbar-light bg-light justify-content-around">
  <a class="navbar-brand text-primary ">Youcode Youssoufia</a>
  
  
  <form class="form-inline">
    <router-link to="/"> <button class="btn btn-outline-primary  " type="submit">Sign Up</button></router-link>
  <router-link to="/signin">  <button  class="btn btn-outline-primary" type="submit"> Sign In</button></router-link>
  </form>
  
</nav>
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
     <router-link to="/signin"> <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button></router-link> 
    </form>
  </div>
</nav> -->

  </div>
  <router-view />
</template>

<style>
body{
  background-color: blue; 
}
</style>






