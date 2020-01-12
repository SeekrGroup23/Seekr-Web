import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Deem from "./views/Deem.vue";
import ADD_Grama from "./views/Admin/AddGrama.vue";
import Edt_Grama from "./views/Admin/EditGrama.vue";
import Grama_Loc from "./views/Admin/GramaLocations.vue";
import Admin from "./views/Admin/Admin.vue";
import Admin_Dash from "./views/Admin/AdminDashboard.vue";
import Test from "./views/Test.vue";

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
      path: "/test",
      component: Test
    },
    {
      path: "/admin/",
      children: [
        {
          path: "addgrama",
          component: ADD_Grama
        },
        {
          path: "editgrama",
          component: Edt_Grama
        },
        {
          path: "gramaloc",
          component: Grama_Loc
        },
        {
          path: "admindash",
          component: Admin_Dash
        }
      ],
      component: Admin
    }
  ]
});
