<template>
  <div class="Sign In">
    <section class="container-fluid  ">
    <section class="row justify-content-center  ">
    <section class="col-12 col-md-4 col-lg-4 ">
    <form class="bg-light p-md-5 p-5 " style="margin-top:4rem ; border-radius:20px" >
      <h2 class="text-center">Sign In</h2>
    
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="Email" class="form-control form-control-lg" id="inputEmail" placeholder="">
    </div>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="">
    </div>
   
    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
    <br>
     <p class="forgot-password text-right">
               
               <router-link to="/help">Forgot password?</router-link>
            </p>
                      
                      
           <div class="container d-flex justify-content-center">
                  <div class=" a">
                    <img alt="Vue logo" src="../assets/g.png" >
                    </div>
                   
                   <div class=" a"> 
                      <img alt="Vue logo" src="../assets/fb.png" >
                      </div>
      
                  <div class=" a">
                      <img alt="Vue logo" src="../assets/twt.png" >
                        </div>  
                   
                   </div>

           

</form>
   </section>
   </section>
   </section>
  </div>
</template>

<style>

  img{
    width: 20px;
    height: 18px;  
  }
  .a{
    padding: 12px 20px 12px 20px;
    margin-right: 5px;
    background-color: #e4eaf5;
  }

</style>
