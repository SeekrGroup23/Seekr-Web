import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:5000"
  //baseURL: "10.22.165.109:5000"
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBZTL2CCcBEYZrR3B6oeMqu7RGwMNwHKmU",
    libraries: ["places", "visualization"]
  }
})

const token = store.state.userJWT;
if (token != "") {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
