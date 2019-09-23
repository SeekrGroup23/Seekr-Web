<template>
  <v-app>
    <v-content>
      <v-container>
        <toolbar></toolbar>
        <v-layout justify-center>
          <v-flex xs12 sm6 md4 row>
            <v-card :height="alert ? '550' : '500'" class="mt-4 mt-0">
              <v-progress-linear
                v-show="isPending"
                :indeterminate="isPending"
              ></v-progress-linear>

              <v-card-title primary-title>
                <h2>Login</h2>
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
                <v-flex class="mx-1 px-1">
                  <v-btn
                    v-on:click="login"
                    class="btn-login mb-2"
                    Large
                    color="primary"
                    >Login</v-btn
                  >
                  <p class="mx-1 mt-3">Don't Have an Account?</p>

                  <v-btn v-on:click="toRegisterPage" class="btn-login" Large
                    >Register</v-btn
                  >
                </v-flex>
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
import toolbar from "../components/toolbar";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required }
  },
  components: {
    toolbar
  },

  data: () => ({
    email: "",
    password: "",
    isPending: false,
    cardHeight: 0,
    alert: false
  }),

  computed: {
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
        console.log("Error..");
      } else {
        console.log("Testing....");
        this.isPending = true;

        //Sending the HTTP request - POST to verify user credentials
        this.$http
          .post("/api/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // Debugging
            console.log(response);
            localStorage.setItem("token", response.token);

            // Debugging
            console.log(response.data.token);

            if (response.data.token == "invalid") {
              this.alert = true;
            } else {
              this.alert = false;
            }
            // Stop the Linear Progress Indicator
            this.isPending = false;

            if (response.data.token == "invalid") {
              alert("Invalid User");
            } else {
              //All the user roles should be identified and navigated to corresponding pages
              alert("Welcome Back User");

              // this.login.$router.push("/");
            }
          })
          .catch(function(error) {
            console.log(error);
          });

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
