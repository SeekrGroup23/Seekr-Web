import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import GramaNiladhari from "./views/GramaNiladhari/GramaNiladhari.vue";
import GN_Dashboard from "./views/GramaNiladhari/Dashboard.vue";
import GN_Profile from "./views/GramaNiladhari/Profile.vue";
import GN_Patients from "./views/GramaNiladhari/Patients.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/gramaniladhari/",
      children: [
        {
          path: "",
          component: GN_Dashboard
        },
        {
          path: "profile",
          component: GN_Profile
        },
        {
          path: "patients",
          component: GN_Patients
        }
      ],

      component: GramaNiladhari
    }
  ]
});
