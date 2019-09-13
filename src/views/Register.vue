<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6 md4 row>
        <v-card height="700" class="mt-2 mt-0">
          <!-- Progress Bar -->
          <v-progress-linear :indeterminate="true" class=""></v-progress-linear>

          <v-card-title primary-title>
            <h2>Register</h2>
          </v-card-title>

          <v-card-text>
            <v-tabs v-model="active" color="#F5F5F5" slider-color="" fixed-tabs>
              <v-tab v-for="n in 2" :key="n" ripple>
                {{ regArray[n - 1] }}</v-tab
              >

              <v-tab-item :key="1" active-class>
                <v-layout class="reg-container" column>
                  <v-text-field
                    v-model="firstName"
                    :error-messages="firstNameErrors"
                    outline
                    label="First Name"
                    append-icon="account_circle"
                    required
                    @input="$v.firstName.$touch()"
                    @blur="$v.firstName.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model="lastName"
                    :error-messages="lastNameErrors"
                    outline
                    label="Last Name"
                    append-icon="account_circle"
                    required
                    @input="$v.lastName.$touch()"
                    @blur="$v.lastName.$touch()"
                  ></v-text-field>

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
                    required
                    :append-icon="
                      passwordShow ? 'visibility' : 'visibility_off'
                    "
                    :type="passwordShow ? 'text' : 'password'"
                    hint="At least 8 characters"
                    counter
                    @click:append="passwordShow = !passwordShow"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>

                  <!-- <v-text-field
                    v-model="paswordConfirmation"
                    :error-messages="passwordConfirmationErrors"
                    outline
                    label="Password Confirmation"
                    append-icon="lock"
                    required
                    @input="$v.passwordConfirmation.$touch()"
                    @blur="$v.passwordConfirmation.$touch()"
                  ></v-text-field> -->
                </v-layout>
              </v-tab-item>

              <v-tab-item :key="2">
                <v-layout column>
                  <v-radio-group
                    v-model="donorTypeRadios"
                    :mandatory="false"
                    row
                  >
                    <v-radio label="Individual" value="individual"></v-radio>
                    <v-radio
                      label="Organization"
                      value="organization"
                    ></v-radio>
                  </v-radio-group>

                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    outline
                    :label="
                      donorTypeRadios == 'individual'
                        ? 'First Name & Last Name'
                        : 'Organizarion/Company Name'
                    "
                    :append-icon="
                      donorTypeRadios == 'individual'
                        ? 'account_circle'
                        : 'home'
                    "
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    outline
                    :label="
                      donorTypeRadios == 'individual'
                        ? 'Email'
                        : 'Organizarion/Company Email'
                    "
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
                    required
                    :append-icon="
                      passwordShow ? 'visibility' : 'visibility_off'
                    "
                    :type="passwordShow ? 'text' : 'password'"
                    hint="At least 8 characters"
                    counter
                    @click:append="passwordShow = !passwordShow"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>
                </v-layout>
              </v-tab-item>
            </v-tabs>
          </v-card-text>

          <v-card-actions>
            <v-flex class="mx-1 px-1">
              <v-btn
                v-on:click="login"
                class="btn-login mb-2"
                Large
                color="primary"
                >Register</v-btn
              >
              <p class="mx-1 mt-3">Already Have an Account?</p>

              <v-btn v-on:click="toLoginPage" class="btn-login" Large
                >Login</v-btn
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
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, minLength: minLength(4) },
    lastName: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    name: { required, minLength: minLength(4) }
  },

  data() {
    return {
      regArray: ["User", "Donor"],

      passwordShow: false,
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      donorTypeRadios: "individual"
    };
  },
  computed: {
    /**Form Validation and Error Handlin - begin */
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.firstName.required && errors.push("First Name is required");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.minLength && errors.push("Last Name is required");
      !this.$v.lastName.required && errors.push("Last Name is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must contain at least 4 characters");
      !this.$v.email.required && errors.push("Name is required");
      return errors;
    },
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
    toLoginPage() {
      this.$router.push("/login");
      // console.log(localStorage.token);
    }
  }
};
</script>

<style scoped>
.reg-container {
  padding-top: 25px;
}

.btn-login {
  width: 100%;
}

.btn-login-cover {
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
}
</style>
