<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-layout row>
          <v-flex>
            <v-text-field
              v-model="firstName"
              :error-messages="firstNameErrors"
              label="First Name"
              required
              @input="$v.firstName.$touch()"
              @blur="$v.firstName.$touch()"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              v-model="lastName"
              :error-messages="lastNameErrors"
              label="Last Name"
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex>
          <v-text-field
            v-model="nic"
            :error-messages="nicErrors"
            label="National Identity Card No."
            required
            @input="$v.nic.$touch()"
            @blur="$v.nic.$touch()"
          ></v-text-field>
        </v-flex>

        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Email"
          required
          @input="
            $v.email.$touch();
            clearIsEmailAvailable();
          "
          @blur="
            $v.email.$touch();
            checkEmailAvailable();
          "
        ></v-text-field>

        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          required
          :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
          :type="passwordShow ? 'text' : 'password'"
          hint="At least 8 characters"
          counter
          @click:append="passwordShow = !passwordShow"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { bus } from "../main";

export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, minLength: minLength(4) },
    lastName: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    nic: { required, minLength: minLength(8) }
  },
  data: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordShow: false,
      nic: ""
    };
  },
  created() {
    bus.$on("regAndContClicked", data => {
      console.log(data);
      this.registerPatient();
    });
  },
  computed: {
    /**Form Validation and Error Handlin - begin */
    firstNameErrors() {
      console.log(this.$v.firstName.$dirty);
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
      !this.$v.lastName.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.lastName.required && errors.push("Last Name is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) {
        return errors;
      } else {
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required");
        !this.isEmailAvailable &&
          errors.push("This Email has already been taken!");
        return errors;
      }
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must have at least 8 characters");

      return errors;
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.nic.$dirty) return errors;
      !this.$v.nic.required && errors.push("NIC is Required");
      !this.$v.nic.minLength && errors.push("NIC must have 10 characters");
      return errors;
    }
  },
  methods: {
    //Form Validation
    submit() {
      this.$v.$touch();
    },
    //This Function is used for check whether the entered Email is already in the database
    checkEmailAvailable() {
      if (this.email != "") {
        this.$http
          .get("/api/checkEmailAvailable", {
            params: {
              email: this.email
            }
          })
          .then(response => {
            // console.log(response.data.matchFound);
            if (response.data.matchFound == true) {
              this.isEmailAvailable = false;
            } else {
              this.isEmailAvailable = true;
            }

            // this.login.$router.push("/");
            // localStorage.setItem("token", response.token);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // To clear the Error of unavailability of the Email
    clearIsEmailAvailable() {
      this.isEmailAvailable = true;
    },
    //Perform registration on User
    registerPatient() {
      console.log("Register Patient Function :)");
      //Form Validation
      this.$v.$touch();
      if (!this.$v.$invalid) {
        bus.$emit("runLoading_reg");

        console.log("I'm Here**********************");
        this.$http
          .post("/api/patient/register", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            isPatient: true,
            nic: this.nic
          })
          .then(response => {
            console.log(response);
            let params = { firstName: this.firstName, lastName: this.lastName };
            bus.$emit("reg_ok", params);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style scoped></style>
