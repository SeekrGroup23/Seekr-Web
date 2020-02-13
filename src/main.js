import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios.create({
  // baseURL: "http://ec2-18-216-145-208.us-east-2.compute.amazonaws.com:5000"
  baseURL: "http://localhost:5000"
});

// this.$http.interceptors.response.use(undefined, function(err) {
//   return new Promise(() => {
//     if (err.status === 403 && err.config && !err.config.__isRetryRequest) {
//       this.$store.dispatch("logout");
//       console.log("Logout Dis");
//     }
//     throw err;
//   });
// });

// Adding Authorization Header to every request made to the server by Axios
// const token = store.state.userJWT;

const access_token = localStorage.getItem("access_token");

if (access_token) {
  console.log("In Main >> Setting AH");
  Vue.prototype.$http.defaults.headers.common["authorization"] =
    "Bearer " + access_token;
}

// For Event Bus -> https://blog.logrocket.com/using-event-bus-in-vue-js-to-pass-data-between-components/
export const bus = new Vue();

new Vue({
  router, //router : router
  store, //store : store
  render: h => h(App)
}).$mount("#app");
