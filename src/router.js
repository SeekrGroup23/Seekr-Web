import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Deem from "./views/Deem.vue";
import ADD_Grama from "./views/Admin/AddGrama.vue";
import Edt_Grama from "./views/Admin/EditGrama.vue";
import Admin from "./views/Admin/Admin.vue";
import Admin_Dash from "./views/Admin/AdminDashboard.vue";

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/deem",
      component: Deem
    },
    {
      path: "/admin/",
      component: Admin
    },
    {
      path: "/addgrama",
      component: ADD_Grama
    },
    {
      path: "/editgrama",
      component: Edt_Grama
    },
    {
      path: "/admindash",
      component: Admin_Dash
    }
  ]
});
