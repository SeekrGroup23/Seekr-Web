import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem("access_token") || "",
    currentUser: {},
    userJWT: "",
    user: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      imageURL: "",
      role: ""
    }
  },
  mutations: {},
  actions: {},
  getters: {}
});
