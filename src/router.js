import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin/Admin.vue";
import AD_Dashboard from "./views/Admin/Dashboard.vue";
import AD_profile from "./views/Admin/Profile.vue";
import ADM_Grama from "./views/Admin/Grama.vue";

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
      path: "/admin/",
      children: [
        {
          path: "dashboard",
          component: AD_Dashboard
        },
        {
          path: "profile",
          component: AD_profile
        },
        {
          path: "grama",
          component: ADM_Grama
        }
      ],
      component: Admin
    }
  ]
});
