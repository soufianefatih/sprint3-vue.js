import { createRouter, createWebHistory } from "vue-router";
import signup from "../views/Signup.vue";
import signin from "../views/Signin.vue";
import Help from "../views/help.vue";

const routes = [
  {
    path: "/",
    name: "Signup",
    component: signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component : signin,
  },
  {
    path:"/help",
    name:"/help",
    component : Help,

  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
