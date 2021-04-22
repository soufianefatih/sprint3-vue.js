<template>
  <div class="Sign In">
    <section class="container-fluid">
      <section class="row justify-content-center">
         <section class="col-xs-9 col-md-7 col-lg-4">
          <form
            class="bg-light p-md-5 p-5"
            style="margin-top: 4rem; border-radius: 15px"
          >
            <h2 class="text-center">Sign In</h2>

            <div class="form-group">
              <label for="inputEmail">Email address</label>
              <input
                type="Email"
                class="form-control form-control-xl"
                id="inputEmail"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                class="form-control form-control-xl"
                id="inputPassword"
                placeholder=""
              />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Sign In
            </button>
            <br />
            <p class="forgot-password text-right">
              <router-link to="/help">Forgot password?</router-link>
            </p>

            <div class="container d-flex justify-content-center">
              <div class="a">
                <img alt="Vue logo" src="../assets/g.png" />
              </div>

              <div class="a">
                <img alt="Vue logo" src="../assets/fb.png" />
              </div>

              <div class="a">
                <img alt="Vue logo" src="../assets/twt.png" />
              </div>
            </div>
          </form>
        </section>
      </section>
    </section>
   <h1>{{ name }}</h1>
        <h1>{{ email }}</h1>
        <h1>{{ password }}</h1>
  </div>
</template>
<script>
export default {
    data: function() {
       return {
          name: this.$store.state.name,
          email: this.$store.state.email,
          password: this.$store.state.password,


        }
},

};
</script>

<style>
img {
  width: 20px;
  height: 18px;
}
.a {
  padding: 12px 20px 12px 20px;
  margin-right: 5px;
  background-color: #e4eaf5;
}
</style>
