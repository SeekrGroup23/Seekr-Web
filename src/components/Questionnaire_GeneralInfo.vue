<template>
  <v-container fluid>
    <v-layout column>
      <!-- Name First and Last Names -->
      <v-flex md12>
        <v-layout row wrap>
          <v-flex class="pr-5">
            <v-text-field
              v-model="firstName"
              color="primary"
              label="First Name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              v-model="lastName"
              color="primary"
              label="Last Name"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Name in Ful -->
      <v-flex>
        <v-text-field
          v-model="nameInFull"
          color="primary"
          label="Name in Full"
          required
        ></v-text-field>
      </v-flex>
      <!-- Date of Birth -->
      <v-flex>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="100"
          :nudge-bottom="-50"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date of Birth"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            min="1980-01-01"
            picker-date="1990-01-01"
            v-model="date"
            @input="menu2 = false"
            no-title
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <!-- Gender -->
      <v-flex>
        <v-layout row wrap>
          <v-flex shrink>
            <h5 class="subheading">Gender</h5>
          </v-flex>
          <v-flex grow>
            <v-radio-group
              v-model="radioGroup_Gender"
              row
              class="pa-0 ma-0 pt-2"
            >
              <v-radio label="Male" value="M"></v-radio>
              <v-radio label="Female" value="F"></v-radio>
              <v-radio label="Other" value="O"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pb-3">
        <v-divider></v-divider>
      </v-flex>

      <!-- Marital Status -->
      <v-flex>
        <v-layout row wrap>
          <v-flex shrink>
            <h5 class="subheading">Marital Status</h5>
          </v-flex>
          <v-flex grow>
            <v-radio-group
              v-model="maritalStatus"
              row
              class="pa-0 ma-0 pt-2"
              @change="changeState()"
            >
              <v-radio label="Single" value="S"></v-radio>
              <v-radio label="Currently Married" value="CM"></v-radio>
              <v-radio label="Living Together" value="LT"></v-radio>
              <v-radio label="Divorced / Seperated" value="DS"></v-radio>
              <v-radio label="Widowed" value="W"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pb-3">
        <v-divider></v-divider>
      </v-flex>

      <!-- Age at Marriage -->
      <v-flex>
        <v-text-field
          :disabled="ageAtMarriageState"
          color="primary"
          label="Age at Marriage"
          type="number"
        ></v-text-field>
      </v-flex>
      <!-- Religeon -->
      <v-flex> </v-flex>
      <!--  -->
    </v-layout>
  </v-container>
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { bus } from "../main";

export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, minLength: minLength(4) },
    lastName: { required, minLength: minLength(4) },
    nameInFull: { required, minLength: minLength(9) }
  },
  data: () => {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      radioGroup_MaritalStatus: "S",
      radioGroup_Gender: "F",

      // Data related to General Section
      firstName: "",
      lastName: "",
      nameInFull: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      ageAtMarriage: "",
      ageAtMarriageState: false
    };
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
    nameInFullErrors() {
      const errors = [];
      if (!this.$v.nameInFull.$dirty) return errors;
      !this.$v.nameInFull.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.nameInFull.required && errors.push("Last Name is required");
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.dob.$dirty) return errors;
      !this.$v.dob.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.dob.required && errors.push("Last Name is required");
      return errors;
    }
  },
  methods: {
    changeState() {
      console.log(":)" + this.maritalStatus);
      if (this.maritalStatus == "S") {
        this.ageAtMarriageState = true;
      } else {
        this.ageAtMarriageState = false;
      }
    },
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
    addGeneralInformation() {
      console.log("Gen Info Function :)");
      //Form Validation
      // this.$v.$touch();
      var test = true;
      if (test == true) {
        bus.$emit("runLoading_genInfo", "");

        console.log("I'm Here**********************");
        this.$http
          .post("/api/patient/general_info/add", {
            nic: this.$store.state.questionnaire.nic,
            nameInFull: this.nameInFull,
            dob: this.dob,
            gender: this.gender,
            maritalStatus: this.maritalStatus,
            ageAtMarriage: this.ageAtMarriage
          })
          .then(response => {
            console.log(response);

            // this.$store.state.questionnaire.firstName = this.firstName;
            // this.$store.state.questionnaire.lastName = this.lastName;
            bus.$emit("genInfo_ok");
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  created() {
    bus.$on("genInfoAndContClicked", () => {
      console.log("I'm Here");
      // this.firstName = data.firstName;
      // this.lastName = data.lastName;
      this.addGeneralInformation();

      // this.loadingReg = false;
    });

    this.firstName = this.$store.state.questionnaire.firstName;
    this.lastName = this.$store.state.questionnaire.lastName;
  }
};
</script>

<style scoped></style>
