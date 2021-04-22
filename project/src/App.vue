
<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/help">Help</router-link> -->
    <nav class="navbar navbar-light bg-light justify-content-around">
  <a class="navbar-brand text-primary ">Youcode Youssoufia</a>
  
  
  <form class="form-inline">
    <router-link to="/"> <button class="btn btn-outline-primary mr-2  " type="submit">Sign Up</button></router-link>
  <router-link to="/signin">  <button  class="btn btn-outline-primary" type="submit"> Sign In</button></router-link>
  </form>
  
</nav>


  </div>
  <router-view />
</template>

<style>
body{
  background-color: rgb(70, 70, 247)  !important;
}
</style>






