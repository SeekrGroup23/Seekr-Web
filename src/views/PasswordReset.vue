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
            <v-card :height="alert ? '550' : '400'" class="mt-4 mt-0">
              <v-progress-linear
                v-show="isPending"
                :indeterminate="isPending"
              ></v-progress-linear>

              <v-card-title primary-title>
                <h2>Password Reset Portal</h2>
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
                  Invalid Passwords
                </v-alert>
                <v-text-field
                  v-model="oldPW"
                  :error-messages="oldPWErrors"
                  label="Current Password"
                  append-icon="lock"
                  required
                  @input="
                    $v.oldPW.$touch();
                    clearAlert();
                  "
                  @blur="$v.oldPW.$touch()"
                ></v-text-field>

                <v-text-field
                  v-model="newPW"
                  :error-messages="newPWErrors"
                  label="Password"
                  append-icon="lock"
                  required
                  type="password"
                  @input="
                    $v.newPW.$touch();
                    clearAlert();
                  "
                  @blur="$v.newPW.$touch()"
                ></v-text-field>

                <v-text-field
                  v-model="reNewPW"
                  :error-messages="reNewPWErrors"
                  label="Re-Enter Password"
                  append-icon="lock"
                  required
                  type="password"
                  @input="
                    $v.reNewPW.$touch();
                    clearAlert();
                  "
                  @blur="$v.reNewPW.$touch()"
                ></v-text-field>
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
                    <v-btn
                      v-on:click="reset()"
                      class="mb-2"
                      small
                      color="primary"
                      >Reset Password</v-btn
                    >
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
import { required } from "vuelidate/lib/validators";
// import toolbar from "../components/toolbar";
// import jwtDecode from "jwt-decode";

export default {
  props: {
    id: { required: true }
  },
  mixins: [validationMixin],
  validations: {
    oldPW: { required },
    newPW: { required },
    reNewPW: { required }
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
    drawer: false,
    oldPW: "",
    newPW: "",
    reNewPW: ""
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

    oldPWErrors() {
      const errors = [];
      if (!this.$v.oldPW.$dirty) return errors;
      !this.$v.oldPW.required && errors.push("Password is required");
      return errors;
    },
    newPWErrors() {
      const errors = [];
      if (!this.$v.newPW.$dirty) return errors;
      !this.$v.newPW.required && errors.push("Password is required");
      return errors;
    },
    reNewPWErrors() {
      const errors = [];
      if (!this.$v.reNewPW.$dirty) return errors;
      !this.$v.reNewPW.required && errors.push("Password is required");
      return errors;
    }
    /**Form Validation and Error Handlin - end */
  },

  methods: {
    clearAlert() {
      this.alert = false;
    },
    //Login Method -> Sends HTTP POST request to the server to verify the user
    reset() {
      //Form Validation
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("Validation Error");
      } else {
        if (this.newPW == this.reNewPW) {
          this.isPending = true;

          this.$http
            .post("/api/user/password_reset", {
              userID: this.id,
              currentPassword: this.oldPW,
              newPassword: this.newPW
            })
            .then(res => {
              console.log(res.data);

              if (res.data.message == "Success") {
                console.log("Success");
              }
            })
            .catch();
        } else {
          this.alert = true;
        }

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
