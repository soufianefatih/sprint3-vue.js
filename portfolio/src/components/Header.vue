 <template>

        
<div class="header d-flex flex-column justify-content-center  ">
     <h1 class="text-center text-white ">Soufiane Fatih</h1>
     <hr/>
     <h6 class="text-center text-white ">Full-Stack Developer</h6>
            
    </div>
</template>

<script>
export default {
   name : "header"
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
}
.header{
    background-image: url(../assets/bg.jpg);
    background-position: center; 
    background-size: cover;
    height: 100vh;
    /* width: 100%;  */
 }

hr {
  width: 22%;
  border: 1px solid rgb(230, 214, 214);
} 

</style>