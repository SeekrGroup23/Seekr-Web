<template>
  <v-app>
    <v-content>
      <v-container>
        <v-flex shrink>
          <v-toolbar app dense>
            <v-toolbar-side-icon
              class="hidden-md-and-up"
              @click.stop="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Seekr</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat small color="primary">Home</v-btn>
              <v-btn flat small>Data Analytics</v-btn>
              <v-btn flat small>Information Hub</v-btn>
              <v-btn flat small>Donations</v-btn>
              <v-btn flat small>About</v-btn>
              <v-btn flat small>Contact</v-btn>
            </v-toolbar-items>
            <v-btn
              color="primary"
              @click="$router.push('/login')"
              small
              class="hidden-md-and-down"
              >Register/Login</v-btn
            >
          </v-toolbar>

          <!-- Navigation Drawer - Only Visible in Screens Less than Md -->
          <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list class="pa-1">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
              <v-divider></v-divider>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Data Analytics</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon></v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Information Hub</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon></v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>About Seekr</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon></v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Contact Us</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Donations</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider></v-divider>

              <v-list-tile @click="$router.push('/login')">
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Login</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-flex>
        <v-layout justify-center>
          <v-flex xs12 sm6 md4 row>
            <v-card :height="alert ? '625' : '475'" class="mt-4 mt-0">
              <v-progress-linear
                v-show="isPending"
                :indeterminate="isPending"
              ></v-progress-linear>

              <v-card-title primary-title class="py-0">
                <v-layout column align-content-center class="py-0">
                  <v-img
                    :src="require('../assets/logo.png')"
                    width="200"
                    height="100"
                    aspect-ratio="1"
                    class="mx-auto"
                  ></v-img>
                  <v-divider></v-divider>
                  <h2 class="headline mx-auto py-2">Login</h2>
                </v-layout>
              </v-card-title>
              <v-card-text>
                <v-alert
                  class="mb-4"
                  :outline="true"
                  :value="alert"
                  color="error"
                  icon="warning"
                  style="height: 10px;"
                >
                  Invalid Email or Password!
                </v-alert>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="Email"
                  append-icon="email"
                  required
                  @input="
                    $v.email.$touch();
                    clearAlert();
                  "
                  @blur="$v.email.$touch()"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  label="Password"
                  append-icon="lock"
                  required
                  type="password"
                  @input="
                    $v.password.$touch();
                    clearAlert();
                  "
                  @blur="$v.password.$touch()"
                ></v-text-field>

                <span class="forg-pass mt-0"
                  ><a href="#">Forgot Password</a></span
                >
              </v-card-text>
              <v-card-actions>
                <v-container fluid class="pa-0 ma-0">
                  <v-layout row class="justify-end mx-2">
                    <v-btn
                      class="mb-2"
                      small
                      color=""
                      @click="$router.push('/')"
                      >Cancel</v-btn
                    >
                    <v-btn v-on:click="login" class="mb-2" small color="primary"
                      >Login</v-btn
                    >
                  </v-layout>
                  <v-divider class="my-3 mx-2"></v-divider>
                  <v-layout row class="px-2">
                    <v-layout row>
                      <v-flex grow>
                        <h5 class="subheading pt-1">Interested in Helping??</h5>
                      </v-flex>
                      <v-flex shrink>
                        <v-btn v-on:click="toRegisterPage" class="" small
                          >Register</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </v-container>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
// import toolbar from "../components/toolbar";
// import jwtDecode from "jwt-decode";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required }
  },
  components: {
    // toolbar
  },

  data: () => ({
    email: "",
    password: "",
    isPending: false,
    cardHeight: 0,
    alert: false,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    drawer: false
  }),

  computed: {
    // Drawer Control
    drawerControl: function() {
      if (this.$vuetify.breakpoint.mdA) {
        console.log("mdAndUp");
        return false;
      } else {
        console.log("lessThanMd");
        return true;
      }
    },
    /**Form Validation and Error Handlin - begin */
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
    /**Form Validation and Error Handlin - end */
  },

  methods: {
    clearAlert() {
      this.alert = false;
    },
    //Login Method -> Sends HTTP POST request to the server to verify the user
    login() {
      //Form Validation
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("Validation Error");
      } else {
        this.isPending = true;

        this.$store
          .dispatch("login", { email: this.email, password: this.password })
          .then(() => {
            switch (this.$store.state.user.role) {
              case "admin":
                break;

              case "Grama_Niladhari":
                this.$router.push("/gramaniladhari/");
                break;
              case "medical_officer":
                this.$router.push("/medicalofficer/");
                break;
              case "Admin":
                this.$router.push("/admin/");
                break;

              case "Donor":
                // this.$http
                //   .get(
                //     "/api/donor/isEmailVerified/" + this.$store.state.user.id
                //   )
                //   .then(res => {})
                //   .catch();
                // this.$router.push("/medicalofficer/");
                break;

              default:
                this.alert = true;
                this.isPending = false;
                break;
            }
          })
          .catch(err => console.log(err));
        /*------------------------------------------------------------------------------------- */
        // //Sending the HTTP request - POST to verify user credentials
        // this.$http
        //   .post("/api/user/login", {
        //     email: this.email,
        //     password: this.password
        //   })
        //   .then(response => {
        //     // Debugging
        //     console.log(response);
        //     localStorage.setItem("token", response.token);

        //     // Debugging
        //     console.log(response.data.token);

        //     if (response.data.token == "invalid") {
        //       this.alert = true;
        //     } else {
        //       this.alert = false;
        //     }
        //     // Stop the Linear Progress Indicator
        //     this.isPending = false;

        //     if (response.data.token == "invalid") {
        //       alert("Invalid User");
        //     } else {
        //       //All the user roles should be identified and navigated to corresponding pages

        //       //  Store the received JWT in the state variavle of Vuex Store "userJWT"
        //       this.$store.state.userJWT = response.data.token;
        //       console.log("JWT Saved" + this.$store.state.userJWT);
        //       // Decoding the Payload fro the userJWT
        //       const jwtPayload = jwtDecode(this.$store.state.userJWT);
        //       console.log(jwtPayload.user.id);
        //       this.$store.state.user.id = jwtPayload.user.id;
        //       this.$store.state.user.firstName = jwtPayload.user.firstName;
        //       this.$store.state.user.lastName = jwtPayload.user.lastName;
        //       this.$store.state.user.email = jwtPayload.user.email;
        //       // this.$store.state.user.imageURL = jwtPayload.user.imageURL;
        //       this.$store.state.user.role = jwtPayload.user.role;

        //       switch (this.$store.state.user.role) {
        //         case "admin":
        //           break;

        //         case "gramaNiladhari":
        //           console.log("Router GN");
        //           this.$router.push("/gramaniladhari/");
        //           break;
        //         case "user":
        //           break;

        //         default:
        //           break;
        //       }
        //     }
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });

        // this.isPending = false;
      }
    },
    //Navigate to User Registration Page
    toRegisterPage() {
      this.$router.push("/register");
      // console.log(localStorage.token);
    }
  }
};
</script>

<style scoped>
.btn-login {
  width: 100%;
}

.btn-login-cover {
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
}

.forg-pass {
  padding-left: 5px;
}

.forg-pass a {
  text-decoration: none;
  color: #455a64;
}

.loader {
  margin-bottom: -25px;
}
</style>
