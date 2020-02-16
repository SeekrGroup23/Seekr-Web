import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Deem from "./views/Deem.vue";
import ADD_Grama from "./views/Admin/GramaNiladhari/AddGrama.vue";
import Edt_Grama from "./views/Admin/GramaNiladhari/EditGrama.vue";
import Grama_Loc from "./views/Admin/GramaNiladhari/GramaLocations.vue";
import Admin from "./views/Admin/Admin/Admin.vue";
import Admin_Dash from "./views/Admin/Admin/AdminDashboard.vue";
import Admin_view_Patients from "./views/Admin/Admin/ViewPatients.vue";
import Admin_view_Hospitals from "./views/Admin/Admin/ViewHospitalMap.vue";
import Summary_Charts from "./views/Admin/Admin/ViewCharts.vue";
import Summary_Report from "./views/Admin/Admin/SummaryReport.vue";
import GramaNiladhari from "./views/GramaNiladhari/GramaNiladhari.vue";
import GN_Dashboard from "./views/GramaNiladhari/Dashboard.vue";
import GN_PatientLocation from "./views/GramaNiladhari/PatientLocations.vue";
import DE_AddNew from "./views/Admin/DataEntry/AddNew.vue";
import DE_View from "./views/Admin/DataEntry/View.vue";
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
          path: "grama_niladhari/add",
          component: ADD_Grama
        },
        {
          path: "grama_niladhari/view",
          component: Edt_Grama
        },
        {
          path: "grama_niladhari/gramaloc",
          component: Grama_Loc
        },
        {
          path: "data_entry/add",
          component: DE_AddNew
        },
        {
          path: "data_entry/view",
          component: DE_View
        },
        {
          path: "patients/view",
          component: Admin_view_Patients
        },
        {
          path: "hospital/map",
          component: Admin_view_Hospitals
        },
        {
          path: "summary/charts",
          component: Summary_Charts
        },
        {
          path: "summary/report",
          component: Summary_Report
        },
        {
          path: "",
          component: Admin_Dash
        }
      ],
      component: Admin
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
          path: "patientlocation",
          component: GN_PatientLocation
        }
      ],
      component: GramaNiladhari
    }
  ]
});
