import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:5000"
});

// Adding Authorization Header to every request made to the server by Axios
const token = store.state.userJWT;
if (token != "") {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router, //router : router
  store, //store : store
  render: h => h(App)
}).$mount("#app");
