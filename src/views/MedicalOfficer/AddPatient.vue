<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Add New Patient
        </h4>
      </v-flex>
    </v-layout>
    <v-layout
      row
      justify-space-between
      align-content-start
      class="py-4 px-2"
      wrap
    >
      <v-flex>
        <v-stepper v-model="e6" vertical>
          <!-- Personal Section -->
          <v-stepper-step :complete="e6 > 1" step="1">
            Personal Information
            <small>Patient's Personal Information</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid wrap>
                <v-layout column>
                  
                  <v-flex>
                    <v-layout row wrap class="py-0 my-0">
                      <v-flex class="">
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
                  <v-flex>
                    <v-text-field
                      v-model="nic"
                      color="primary"
                      label="NIC"
                      required
                    ></v-text-field>
                  </v-flex>
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

                  <v-flex class="py-1">
                    <v-layout row wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Gender</h5>
                      </v-flex>
                      <v-flex grow class="pl-3">
                        <v-radio-group
                          v-model="radioGroup_Gender"
                          row
                          class="pa-0 ma-0"
                        >
                          <v-radio label="Male" value="M"></v-radio>
                          <v-radio label="Female" value="F"></v-radio>
                          <v-radio label="Other" value="O"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-layout row wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Marital Status</h5>
                      </v-flex>
                      <v-flex grow class="ml-4">
                        <v-radio-group
                          v-model="maritalStatus"
                          row
                          class="pa-0 ma-0"
                          @change="changeState()"
                        >
                          <v-radio label="Single" value="S"></v-radio>
                          <v-radio
                            label="Currently Married"
                            value="CM"
                          ></v-radio>
                          <v-radio label="Living Together" value="LT"></v-radio>
                          <v-radio
                            label="Divorced / Seperated"
                            value="DS"
                          ></v-radio>
                          <v-radio label="Widowed" value="W"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-divider></v-divider>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <!-- State of the Patient Section -->
          <v-stepper-step :complete="e6 > 2" step="2"
            >State of the Patient
            <small>Patient's State Regarding CKDu/CKD</small></v-stepper-step
          >

          <v-stepper-content step="2">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex class="py-1">
                    <v-layout row wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Patient's State</h5>
                      </v-flex>
                      <v-flex grow class="ml-4">
                        <v-radio-group
                          v-model="patientState"
                          row
                          class="pa-0 ma-0"
                          @change="changeState()"
                        >
                          <v-radio label="Suspected CKDu" value="S"></v-radio>
                          <v-radio label="Verified CKDu" value="V"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex class="py-1">
                    <v-layout row wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Patient's Condition</h5>
                      </v-flex>
                      <v-flex grow class="ml-4">
                        <v-radio-group
                          v-model="patientCondition"
                          row
                          class="pa-0 ma-0"
                          @change="changeState()"
                        >
                          <v-radio label="Early Stage" value="E"></v-radio>
                          <v-radio label="Intermediate" value="I"></v-radio>
                          <v-radio label="Critical" value="C"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3"
            >Location & Address
            <small>Patient's Residential Address</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Permanent Address"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Temporary Address"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-select :items="gnDivs" label="Grama Niladhari Division">
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4"
            >Special Notes
            <small>Doctor's Special Notes Regarding Patient </small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-textarea
                      name="input-7-1"
                      label="Notes"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                      hint="Notes Regarding Patient"
                    ></v-textarea>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="5"
            >Contact Information
            <small>Patient's Contact Information </small>
          </v-stepper-step>
          <v-stepper-content step="5">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Telephone No *"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>

    <v-layout> </v-layout>
  </v-container>
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, minLength: minLength(4) },
    lastName: { required, minLength: minLength(4) }
  },
  data: () => {
    return {
      e6: 1,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      radioGroup_MaritalStatus: "S",
      radioGroup_Gender: "M",

      // Data related to General Section
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      patientState: "",
      patientCondition: "",
      gnDivs: ["Wethar-225"]
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
    }
  }
};
</script>

<style scoped></style>
