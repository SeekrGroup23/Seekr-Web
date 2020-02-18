import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";

import Home from "./views/Home/Home.vue";
import Login from "./views/Login.vue";
import PasswordReset from "./views/PasswordReset.vue";

import Register from "./views/Register.vue";
import GramaNiladhari from "./views/GramaNiladhari/GramaNiladhari.vue";
import GN_Dashboard from "./views/GramaNiladhari/Dashboard.vue";
import GN_Profile from "./views/GramaNiladhari/Profile.vue";
import GN_Patients from "./views/GramaNiladhari/Patients.vue";
import GN_ViewAllPatients from "./views/GramaNiladhari/ViewAllPatients.vue";

import User_Profile from "./views/User/Profile.vue";

import Questionnaire from "./views/Questionnaire/Questionnaire_A.vue";
import MedicalOfficer from "./views/MedicalOfficer/Doctor.vue";
import MO_Dashboard from "./views/MedicalOfficer/Dashboard.vue";
import MO_AddPatient from "./views/MedicalOfficer/AddPatient.vue";
import MO_ViewAllPatients from "./views/MedicalOfficer/ViewAllPatients.vue";
import MO_Profile from "./views/MedicalOfficer/Profile.vue";
import MO_Clinic from "./views/MedicalOfficer/Clinic.vue";

// import Admin from "./views/Admin/Admin.vue";
import Admin from "./views/Admin/Admin/Admin.vue";
// import ADD_Grama from "./views/Admin/GramaNiladhari/AddGrama.vue";
// import Edt_Grama from "./views/Admin/GramaNiladhari/EditGrama.vue";
// import Grama_Loc from "./views/Admin/GramaNiladhari/GramaLocations.vue";
// import Admin from "./views/Admin/Admin/Admin.vue";
import Admin_Dash from "./views/Admin/Admin/AdminDashboard.vue";
import Admin_view_Patients from "./views/Admin/Admin/ViewPatients.vue";
import Admin_view_Hospitals from "./views/Admin/Admin/ViewHospitalMap.vue";
import Summary_Charts from "./views/Admin/Admin/ViewCharts.vue";
import Summary_Report from "./views/Admin/Admin/SummaryReport.vue";
// import GramaNiladhari from "./views/GramaNiladhari/GramaNiladhari.vue";
// import GN_Dashboard from "./views/GramaNiladhari/Dashboard.vue";
// import GN_PatientLocation from "./views/GramaNiladhari/PatientLocations.vue";
// import DE_AddNew from "./views/Admin/DataEntry/AddNew.vue";
// import DE_View from "./views/Admin/DataEntry/View.vue";

// import Admin_Dashboard from "./views/Admin/Dashboard.vue";
import Admin_Patients_ViewAll from "./views/Admin/Patients/ViewAll.vue";
import Admin_Patients_AddNew from "./views/Admin/Patients/AddNew.vue";
import Admin_MO_AddNew from "./views/Admin/MedicalOfficers/AddNew.vue";
import Admin_MO_ViewAll from "./views/Admin/MedicalOfficers/ViewAll.vue";
import Admin_Hospital_ViewAll from "./views/Admin/Hospitals/ViewAll.vue";
import Admin_Hospital_AddNew from "./views/Admin/Hospitals/AddNew.vue";
import Admin_Hospital_ViewMap from "./views/Admin/Hospitals/ViewMap.vue";
import Admin_GN_AddNew from "./views/Admin/GramaNiladhari/AddNew.vue";
import Admin_GN_ViewAll from "./views/Admin/GramaNiladhari/ViewAll.vue";
import Admin_Donor_ViewAll from "./views/Admin/Donors/ViewAll.vue";
import Admin_Donor_AddNew from "./views/Admin/Donors/AddNew.vue";
import Admin_DataEntry_View from "./views/Admin/DataEntry/ViewAll.vue";
import Admin_DataEntry_AddNew from "./views/Admin/DataEntry/AddNew.vue";
import Admin_Admins_AddNew from "./views/Admin/DataEntry/AddNew.vue";
import Admin_Admins_View from "./views/Admin/DataEntry/ViewAll.vue";

import MO_ViewPatient from "./views/MedicalOfficer/ViewPatient.vue";

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
      path: "/password_reset/:id",
      name: "passwordReset",
      props: true,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PasswordReset,
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
          path: "view_all_patients",
          component: GN_ViewAllPatients,
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
          component: MO_Dashboard,
          meta: {
            requiresAuth: true
          }
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
        },
        {
          path: "clinic",
          component: MO_Clinic
        },
        {
          path: "patient/:id",
          component: MO_ViewPatient,
          props: true
        }
      ]
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          component: Admin_Dash,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "add_patient",
          component: MO_AddPatient,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "patients",
          component: MO_ViewAllPatients,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "profile",
          component: MO_Profile,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "patients/view",
          component: Admin_Patients_ViewAll,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "patients/add",
          component: Admin_Patients_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "medical_officer/view",
          component: Admin_MO_ViewAll,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "medical_officer/add",
          component: Admin_MO_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "hospitals/add",
          component: Admin_Hospital_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "hospitals/view",
          component: Admin_Hospital_ViewAll
        },
        {
          path: "hospitals/view_map",
          component: Admin_Hospital_ViewMap,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "grama_niladhari/view",
          component: Admin_GN_ViewAll,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "grama_niladhari/add",
          component: Admin_GN_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "donors/view",
          component: Admin_Donor_ViewAll,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "donors/add",
          component: Admin_Donor_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "data_entry/view",
          component: Admin_DataEntry_View,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "data_entry/add",
          component: Admin_DataEntry_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "admins/view",
          component: Admin_Admins_View,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "admins/add",
          component: Admin_Admins_AddNew,
          meta: {
            requiresAuth: true
          }
        },
        // -----------
        // {
        //   path: "grama_niladhari/add",
        //   component: ADD_Grama
        // },
        // {
        //   path: "grama_niladhari/view",
        //   component: Edt_Grama
        // },
        // {
        //   path: "grama_niladhari/gramaloc",
        //   component: Grama_Loc
        // },
        // {
        //   path: "data_entry/add",
        //   component: DE_AddNew
        // },
        // {
        //   path: "data_entry/view",
        //   component: DE_View
        // },
        {
          path: "patients/view",
          component: Admin_view_Patients,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "hospital/map",
          component: Admin_view_Hospitals,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "summary/charts",
          component: Summary_Charts,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "summary/report",
          component: Summary_Report,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "",
          component: Admin_Dash,
          meta: {
            requiresAuth: true
          }
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
