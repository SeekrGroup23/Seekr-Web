import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";
import Home from "./views/Home/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import GramaNiladhari from "./views/GramaNiladhari/GramaNiladhari.vue";
import GN_Dashboard from "./views/GramaNiladhari/Dashboard.vue";
import GN_Profile from "./views/GramaNiladhari/Profile.vue";
import GN_Patients from "./views/GramaNiladhari/Patients.vue";
import User_Profile from "./views/User/Profile.vue";
import Questionnaire from "./views/Questionnaire/Questionnaire_A.vue";
import MedicalOfficer from "./views/MedicalOfficer/Doctor.vue";
import MO_Dashboard from "./views/MedicalOfficer/Dashboard.vue";
import MO_AddPatient from "./views/MedicalOfficer/AddPatient.vue";
import MO_ViewAllPatients from "./views/MedicalOfficer/ViewAllPatients.vue";
import MO_Profile from "./views/MedicalOfficer/Profile.vue";
import Admin from "./views/Admin/Admin.vue";
import Admin_Dashboard from "./views/Admin/Dashboard.vue";

Vue.use(Router);

let router = new Router({
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
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Questionnaire
    },
    {
      path: "/gramaniladhari/",
      children: [
        {
          path: "",
          component: GN_Dashboard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "profile",
          component: GN_Profile,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "patients",
          component: GN_Patients,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "user_profile",
          component: User_Profile,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "questionnaire",
          component: Questionnaire,
          meta: {
            requiresAuth: true
          }
        }
      ],

      component: GramaNiladhari
    },
    {
      path: "/medicalofficer",
      component: MedicalOfficer,
      children: [
        {
          path: "",
          component: MO_Dashboard
        },
        {
          path: "add_patient",
          component: MO_AddPatient
        },
        {
          path: "patients",
          component: MO_ViewAllPatients
        },
        {
          path: "profile",
          component: MO_Profile
        }
      ]
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          component: Admin_Dashboard
        },
        {
          path: "add_patient",
          component: MO_AddPatient
        },
        {
          path: "patients",
          component: MO_ViewAllPatients
        },
        {
          path: "profile",
          component: MO_Profile
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(
    "I`m Inside the BeforeEachRout ######## IsLoggedIn : " +
      store.getters.isLoggedIn +
      " ######## to : " +
      to.fullPath
  );

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
