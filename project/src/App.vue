<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/help">Help</router-link> -->
    <nav class="navbar navbar-light bg-light justify-content-around">
  <a class="navbar-brand text-primary ">Youcode Youssoufia</a>
  <form class="form-inline">
     <button class="btn btn-outline-primary " type="submit"><router-link to="/">Sign Up</router-link></button>
    <button  class="btn btn-outline-primary" type="submit"><router-link to="/signin">Sign In</router-link> </button>
  </form>
</nav>
  </div>
  <router-view />
</template>




<style>
body {
  background-color: rgb(47, 47, 230);
}

</style>

