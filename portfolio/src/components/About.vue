<template>
    <div class="about ">
       
        <div class="text-center text-align-center mt-5" data-aos="fade-down"
     data-aos-easing="linear"
     >
        <h1 class="animated swing">ABOUT ME</h1>
        <p>HOPE TO KNOW YOU AFTER</p>
        <hr/>

        </div>
        <div data-aos="fade-left" data-aos-duration="1500">
        <div class="container-fluid mb-5">
            <div class="row justify-content-center " >
        <img src="../assets/photo.jpg" class="rounded-circle " style="width:200px; height:200px;" alt="">
       
       </div>

 <div class="row mt-4 justify-content-center"  >
     <div class="col-md-7 ">
         <h6  >WHO AM I ?</h6>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut repudiandae <br> labore
             officiis quo praesentium excepturi distinctio, 
             cumque numquam pariatur <br> nesciunt adipisci nihil corrupti recusandae? Itaque suscipit 
             molestiae maxime in. <br>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut repudiandae <br> labore
            officiis quo praesentium excepturi distinctio, 
             cumque numquam pariatur <br> nesciunt adipisci nihil corrupti recusandae? Itaque suscipit 
             molestiae maxime in.</p>
     </div>
     <div class="col-md-3 ">
         <h6>HUGO BOLLON</h6>
         <div>
        <p> <span>Email:</span>chil3ayba@gmail.com</p>
        <p> <span>Phone:</span>+123456789</p>
        <p> <span>City:</span>chambey,france</p>
        <p> <span>Languages:</span>french,english</p>
         </div>
         <div >
         <i class="fab fa-facebook-square"></i>
         <i class="fab fa-linkedin"></i>
         <i class="fab fa-instagram-square"></i>
         <i class="fab fa-github-square"></i>
         </div>
     </div>
     </div>
 </div> 

</div>
    </div>
</template>

<script>
export default {
   name : "about"
}
</script>

<style >

hr{
  width: 12%;
  border: 1px solid black;
}
i{
    margin-right: 5px;
    font-size: 2rem;
    color: #3c6e71;
}
@media only screen and (max-width: 767px){
    .col-md-7{
        text-align: center;
    }
    .col-md-3 {
        text-align: center;
    }
}
</style>