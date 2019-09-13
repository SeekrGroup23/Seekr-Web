<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6 md4 row>
        <v-card height="500" class="mt-4 mt-0">
          <v-progress-linear :indeterminate="true" class=""></v-progress-linear>
          <v-card-title primary-title>
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              outline
              label="Email"
              append-icon="email"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              outline
              label="Password"
              append-icon="lock"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>

            <span class="forg-pass mt-0"><a href="#">Forgot Password</a></span>
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
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required }
  },

  data: () => ({
    email: "",
    password: ""
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
    //Form Validation
    submit() {
      this.$v.$touch();
    },
    //Login Method -> Sends HTTP POST request to the server to verify the user
    login() {
      this.$http
        .post("http://localhost:5000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
          // this.login.$router.push("/");
          localStorage.setItem("token", response.token);
        })
        .catch(function(error) {
          console.log(error);
        });
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
