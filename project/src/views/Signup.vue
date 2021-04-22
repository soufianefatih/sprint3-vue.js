<template>
  <div class="Sign Up">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-xs-9 col-md-7 col-lg-4">
          <form
            class="bg-light p-md-5 p-5" @submit.prevent="signup"
            style="margin-top: 4rem; border-radius: 15px"
          >
            <h2 class="text-center">Sign Up</h2>
            <div class="form-group">
              <label for="inputEmail">Full Name</label>
              <input
                v-model="name"
                type="texte"
                class="form-control form-control-lg"
                id="inputname"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="inputEmail">Email ddress</label>
              <input
                v-model="email"
                type="Email"
                class="form-control form-control-lg"
                id="inputEmail"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control form-control-lg"
                id="inputPassword"
                placeholder=""
              />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block ">
              Sign Up
            </button>
            <br />
            <p class="forgot-password text-right">
              Already registered
              <router-link to="/signin">Sign In?</router-link>
            </p>
          </form>
        </section>
      </section>
    </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
export default {
  name: "Sign",
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updatename", value);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateemail", value);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(value) {
        this.$store.commit("updatepassword", value);
      }
    }
  },
  
};
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
</script>
