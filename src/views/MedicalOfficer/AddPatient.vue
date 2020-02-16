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
                  <!-- 
                  
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

                  <v-divider></v-divider>

                   -->

                  <!-- First Name -->
                  <v-flex>
                    <v-layout row wrap class="py-0 my-0">
                      <v-flex class="">
                        <v-text-field
                          v-model="patientBasic.firstName"
                          color="primary"
                          label="First Name"
                          required
                          :error-messages="firstNameErrors"
                          @input="$v.patientBasic.firstName.$touch()"
                          @blur="$v.patientBasic.firstName.$touch()"
                        ></v-text-field>
                      </v-flex>
                      <!-- Last Name -->
                      <v-flex>
                        <v-text-field
                          v-model="patientBasic.lastName"
                          color="primary"
                          label="Last Name"
                          required
                          :error-messages="lastNameErrors"
                          @input="$v.patientBasic.lastName.$touch()"
                          @blur="$v.patientBasic.lastName.$touch()"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <!-- NIC -->
                  <v-flex>
                    <v-text-field
                      v-model="patientBasic.nic"
                      color="primary"
                      label="NIC"
                      required
                      :error-messages="nicErrors"
                      @input="$v.patientBasic.nic.$touch()"
                      @blur="$v.patientBasic.nic.$touch()"
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
                          v-model="patientBasic.dob"
                          label="Date of Birth"
                          readonly
                          v-on="on"
                          :error-messages="dobErrors"
                          @input="$v.patientBasic.dob.$touch()"
                          @blur="$v.patientBasic.dob.$touch()"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        min="1980-01-01"
                        picker-date=""
                        v-model="patientBasic.dob"
                        @input="menu2 = false"
                        no-title
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex>
                    <v-select
                      :items="bloodGroups"
                      label="Blood Group"
                      v-model="patientBasic.bloodGroup"
                      :error-messages="bloodGroupErrors"
                    >
                    </v-select>
                  </v-flex>

                  <v-flex class="py-1">
                    <v-layout row wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Gender</h5>
                      </v-flex>
                      <v-flex grow class="pl-3">
                        <v-radio-group
                          v-model="patientBasic.gender"
                          row
                          class="pa-0 ma-0"
                        >
                          <v-radio label="Male" value="Male"></v-radio>
                          <v-radio label="Female" value="Female"></v-radio>
                          <v-radio label="Other" value="Other"></v-radio>
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
                          v-model="patientBasic.maritalStatus"
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
            <v-btn
              color="primary"
              :loading="loading_1"
              :disabled="loading_1"
              @click="saveBasicInformation()"
              >Continue</v-btn
            >

            <!-- <v-btn flat>Cancel</v-btn> -->
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
                          v-model="patientStateAndCondition.state"
                          row
                          class="pa-0 ma-0"
                          @change="changeState()"
                        >
                          <v-radio
                            label="Suspected CKDu"
                            value="Suspected CKDu"
                          ></v-radio>
                          <v-radio
                            label="Verified CKDu"
                            value="Verified CKDu"
                          ></v-radio>
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
                          v-model="patientStateAndCondition.condition"
                          row
                          class="pa-0 ma-0"
                          @change="changeState()"
                        >
                          <v-radio
                            label="Early Stage"
                            value="Early Stage"
                          ></v-radio>
                          <v-radio
                            label="Intermediate"
                            value="Intermediate"
                          ></v-radio>
                          <v-radio label="Critical" value="Critical"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveStateAndCondition()"
              >Continue</v-btn
            >
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
                      v-model="patientLocationAndAddress.permAddress"
                      color="primary"
                      label="Permanent Address * "
                      :error-messages="permAddressErrors"
                      @input="$v.patientLocationAndAddress.permAdress.$touch()"
                      @blur="$v.patientLocationAndAddress.permAdress.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="patientLocationAndAddress.tempAddress"
                      color="primary"
                      label="Temporary Address (Optional)"
                    ></v-text-field>
                  </v-flex>
                  <v-divider></v-divider>
                  <v-flex>
                    <v-select
                      :items="provinces"
                      label="Province"
                      @change="getDistricts()"
                      v-model="patientLocationAndAddress.province"
                      :disabled="isDistrictDisabled"
                      :error-messages="provinceErrors"
                      @input="$v.patientLocationAndAddress.province.$touch()"
                      @blur="$v.patientLocationAndAddress.province.$touch()"
                    >
                    </v-select>
                  </v-flex>
                  <v-flex>
                    <v-select
                      :items="districts"
                      label="District"
                      v-model="patientLocationAndAddress.district"
                      @change="getDivisions()"
                      :disabled="isDivisionDisabled"
                      :error-messages="districtErrors"
                      @input="$v.patientLocationAndAddress.district.$touch()"
                      @blur="$v.patientLocationAndAddress.district.$touch()"
                    >
                    </v-select>
                  </v-flex>
                  <v-flex>
                    <v-select
                      :items="divisions"
                      label="Division"
                      @change="getGnDivision()"
                      v-model="patientLocationAndAddress.division"
                      :error-messages="divisionErrors"
                      @input="$v.patientLocationAndAddress.division.$touch()"
                      @blur="$v.patientLocationAndAddress.division.$touch()"
                    >
                    </v-select>
                  </v-flex>
                  <v-flex>
                    <v-select
                      :items="gnDivisions"
                      label="Grama Niladhari Division"
                      v-model="patientLocationAndAddress.gnDivision"
                      :error-messages="gnDivisionErrors"
                      @input="$v.patientLocationAndAddress.gnDivision.$touch()"
                      @blur="$v.patientLocationAndAddress.gnDivision.$touch()"
                    >
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveLocationAndAddress()"
              >Continue</v-btn
            >
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
                      v-model="patientSpecialNotes"
                      name="input-7-1"
                      label="Notes (Optional)"
                      hint="Notes Regarding Patient"
                    ></v-textarea>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveSpecialNotes()">Continue</v-btn>
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
                      v-model="patientContact.teleNum"
                      color="primary"
                      label="Telephone No"
                      :error-messages="teleNumErrors"
                      @input="$v.patientContact.teleNum.$touch()"
                      @blur="$v.patientContact.teleNum.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="patientContact.email"
                      color="primary"
                      label="Email (Optional)"
                      :error-messages="emailErrors"
                      @input="$v.patientContact.email.$touch()"
                      @blur="$v.patientContact.email.$touch()"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveContactDetails()"
              >Continue</v-btn
            >
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-stepper-content>

          <!-- Diseases History -->

          <v-stepper-step step="6"
            >Disease History
            <small>Patient's Diseases Information </small>
          </v-stepper-step>
          <v-stepper-content step="6">
            <v-card color="" class="mb-5">
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <h6 class="subheading font-weight-regular">
                      Non-Transmitted Diseases
                    </h6>
                    <v-layout wrap column justify-space-between>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="Diabetes"
                        value="Diabetes"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="High Blood Pressure"
                        value="High Blood Pressure"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="Low Blood Pressure"
                        value="Low Blood Pressure"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="Cancer"
                        value="Cancer"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="Cardiovascular Diseases (like heart attacks and stroke)"
                        value="Cardiovascular Diseases"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="patientDiseases.nonTransmitted"
                        label="Overweight/Obesity"
                        value="Overweight/Obesity"
                      ></v-checkbox>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout column class="pt-3">
                  <v-flex>
                    <h6 class="subheading font-weight-regular">
                      Other Diseases
                    </h6>
                    <v-layout wrap column justify-space-between> </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="savePatientsDiseases()"
              >Finish</v-btn
            >
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-snackbar
        v-model="snackbar"
        top
        right
        :color="snackbarColor"
        :timeout="snackbarTimeout"
      >
        {{ snackbarText }}</v-snackbar
      >
    </v-layout>
  </v-container>
</template>

<script>
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    patientBasic: {
      firstName: { required, minLength: minLength(4) },
      lastName: { required, minLength: minLength(4) },
      nic: { required },
      dob: { required },
      gender: { required },
      maritalStatus: { required },
      bloodGroup: { required }
    },
    patientContact: {
      teleNum: { required },
      email: { email }
    },
    patientLocationAndAddress: {
      permAddress: { required },
      district: { required },
      province: { required },
      division: { required },
      gnDivision: { required }
    }
  },
  data: () => {
    return {
      e6: 1,
      menu: false,
      menu2: false,
      loading_1: false,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "secondary",
      snackbarTimeout: 1000,
      provinces: [
        "Western",
        "Eastern",
        "Southern",
        "Northern",
        "Uva",
        "North-Central",
        "Sabaragamuwa",
        "Central",
        "North-Western",
        "All"
      ],
      districts: [],
      divisions: [],
      province: "",
      district: "",
      division: "",
      provinceDistrictMap: new Map(),
      districtDivisionMap: new Map(),
      divisionGnDivisionMap: new Map(),
      isDistrictDisabled: false,
      isDivisionDisabled: false,
      bloodGroups: ["AB+", "A+", "B+", "O+", "AB-", "A-", "B-", "O-"],

      // Data related to General Section
      patientBasic: {
        firstName: "",
        lastName: "",
        nic: "",
        dob: "",
        gender: "Male",
        maritalStatus: "S",
        bloodGroup: ""
      },
      patientStateAndCondition: {
        state: "Suspected CKDu",
        condition: "Early Stage"
      },
      patientLocationAndAddress: {
        permAddress: "",
        tempAddress: "",
        district: "",
        province: "",
        division: "",
        gnDivision: ""
      },
      patientSpecialNotes: "",
      patientContact: {
        teleNum: "",
        email: ""
      },
      patientDiseases: {
        nonTransmitted: [],
        otherDiseases: []
      },

      gnDivisions: [],
      docID: ""
    };
  },
  computed: {
    /**Form Validation and Error Handlin - begin */
    firstNameErrors() {
      console.log(this.$v.patientBasic.firstName.$dirty);
      const errors = [];
      if (!this.$v.patientBasic.firstName.$dirty) return errors;
      !this.$v.patientBasic.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.patientBasic.firstName.required &&
        errors.push("First Name is required");

      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.patientBasic.lastName.$dirty) return errors;
      !this.$v.patientBasic.lastName.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.patientBasic.lastName.required &&
        errors.push("Last Name is required");
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.patientBasic.dob.$dirty) return errors;
      !this.$v.patientBasic.dob.required &&
        errors.push("Date of Birth is required");
      return errors;
    },
    bloodGroupErrors() {
      const errors = [];
      if (!this.$v.patientBasic.bloodGroup.$dirty) return errors;
      !this.$v.patientBasic.bloodGroup.required &&
        errors.push("Blood Group is required");
      return errors;
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.patientBasic.nic.$dirty) return errors;
      !this.$v.patientBasic.nic.required && errors.push("NIC is required");
      if (!this.nicValidator(this.patientBasic.nic)) {
        errors.push("Invalid NIC");
      }
      return errors;
    },
    permAddressErrors() {
      const errors = [];
      if (!this.$v.patientLocationAndAddress.permAddress.$dirty) return errors;
      !this.$v.patientLocationAndAddress.permAddress.required &&
        errors.push("Permanent Address is required");
      return errors;
    },
    provinceErrors() {
      const errors = [];
      if (!this.$v.patientLocationAndAddress.province.$dirty) return errors;
      !this.$v.patientLocationAndAddress.province.required &&
        errors.push("Province is required");
      return errors;
    },
    districtErrors() {
      const errors = [];
      if (!this.$v.patientLocationAndAddress.district.$dirty) return errors;
      !this.$v.patientLocationAndAddress.district.required &&
        errors.push("District is required");
      return errors;
    },
    divisionErrors() {
      const errors = [];
      if (!this.$v.patientLocationAndAddress.division.$dirty) return errors;
      !this.$v.patientLocationAndAddress.division.required &&
        errors.push("Division is required");
      return errors;
    },
    gnDivisionErrors() {
      const errors = [];
      if (!this.$v.patientLocationAndAddress.gnDivision.$dirty) return errors;
      !this.$v.patientLocationAndAddress.gnDivision.required &&
        errors.push("Grama Niladhari Division is required");
      return errors;
    },
    teleNumErrors() {
      const errors = [];
      if (!this.$v.patientContact.teleNum.$dirty) return errors;
      !this.$v.patientContact.teleNum.required &&
        errors.push("Telephone Number is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.patientContact.email.$dirty) return errors;
      !this.$v.patientContact.email.email &&
        errors.push("Invalid Email Address");
      return errors;
    }
  },
  methods: {
    // To save Patient's Basic Information
    saveBasicInformation() {
      this.$v.patientBasic.$touch();
      if (!this.$v.patientBasic.$invalid) {
        this.loading_1 = true;
        this.$http
          .post("/api/patient/create", {
            firstName: this.patientBasic.firstName,
            lastName: this.patientBasic.lastName,
            dob: this.patientBasic.dob,
            nic: this.patientBasic.nic,
            createdBy: "",
            maritalStatus: this.patientBasic.maritalStatus,
            gender: this.patientBasic.gender,
            email: "",
            bloodGroup: this.patientBasic.bloodGroup,
            password: "Patient@123",
            lastModifiedBy: ""
          })
          .then(res => {
            if (res.data.message == "Success") {
              this.docID = res.data.docID;
              this.loading_1 = false;
              this.e6 = 2;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("Forma Validation Failed");
      }
    },
    saveStateAndCondition() {
      console.log(this.docID);
      this.$http
        .put("/api/patient/" + this.docID + "/state_condition", {
          state: this.patientStateAndCondition.state,
          condition: this.patientStateAndCondition.condition
        })
        .then(res => {
          if (res.data.message == "Success") {
            this.e6 = 3;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    savePatientsDiseases() {
      console.log(this.patientDiseases.nonTransmitted);
      this.$http
        .put("/api/patient/" + this.docID + "/diseases", {
          nonTransmittedDiseases: this.patientDiseases.nonTransmitted,
          otherDiseases: this.patientDiseases.otherDiseases
        })
        .then(res => {
          if (res.data.message == "Success") {
            // console.log("Success");
            this.snackbarTimeout = 2500;
            this.snackbarText = "Patient Added Successfully";
            this.snackbar = true;
            this.setAnalytics();
            this.resetFileds();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // To save Loaction and Address
    saveLocationAndAddress() {
      this.$v.patientLocationAndAddress.$touch();
      if (!this.$v.patientLocationAndAddress.$invalid) {
        this.$http
          .put("/api/patient/" + this.docID + "/location_address", {
            address_perm: this.patientLocationAndAddress.permAddress,
            address_temp: this.patientLocationAndAddress.tempAddress,
            gramaNiladhari_division: this.patientLocationAndAddress.gnDivision,
            province: this.patientLocationAndAddress.province,
            district: this.patientLocationAndAddress.district,
            division: this.patientLocationAndAddress.division
          })
          .then(res => {
            if (res.data.message == "Success") {
              this.e6 = 4;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    saveSpecialNotes() {
      console.log(this.patientSpecialNotes);
      if (this.patientSpecialNotes != "") {
        this.$http
          .put("/api/patient/" + this.docID + "/special_notes", {
            specialNotes: this.patientSpecialNotes
          })
          .then(res => {
            if (res.data.message == "Success") {
              this.e6 = 5;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.e6 = 5;
      }
    },
    saveContactDetails() {
      this.$v.patientContact.$touch();
      if (!this.$v.patientContact.$invalid) {
        this.$http
          .put("/api/patient/" + this.docID + "/contact_details", {
            contactTeleNum: this.patientContact.teleNum,
            contactEmail:
              this.patientContact.email == ""
                ? "null"
                : this.patientContact.email
          })
          .then(res => {
            if (res.data.message == "Success") {
              this.e6 = 6;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // When User Select the Province, the Districts within that Provice should be loaded to the v-select
    getDistricts() {
      this.districts = this.provinceDistrictMap.get(
        this.patientLocationAndAddress.province
      );
    },
    getDivisions() {
      this.divisions = this.districtDivisionMap.get(
        this.patientLocationAndAddress.district
      );
    },
    getGnDivision() {
      console.log(
        this.divisionGnDivisionMap.get(this.patientLocationAndAddress.division)
      );
      this.gnDivisions = this.divisionGnDivisionMap.get(
        this.patientLocationAndAddress.division
      );
    },
    changeState() {
      // console.log(":)" + this.patientBasic.maritalStatus);
      if (this.patientBasic.maritalStatus == "S") {
        this.ageAtMarriageState = true;
      } else {
        this.ageAtMarriageState = false;
      }
    },
    nicValidator(nic) {
      if (
        nic.length == 10 &&
        (nic.charAt(9) == "V" || nic.charAt(9) == "v") &&
        !isNaN(nic.substr(0, 8))
      ) {
        return true;
      } else if (nic.length == 12 && !isNaN(nic)) {
        return true;
      } else {
        return false;
      }
    },
    // TO Reset All Fileds
    resetFileds() {
      this.patientLocationAndAddress.permAddress = "";
      this.patientLocationAndAddress.tempAddress = "";
      this.patientLocationAndAddress.gnDivision = "";
      this.patientStateAndCondition.state = "";
      this.patientStateAndCondition.condition = "";
      this.patientBasic.firstName = "";
      this.patientBasic.lastName = "";
      this.patientBasic.dob = "";
      this.patientBasic.gender = "";
      this.patientBasic.maritalStatus = "";
      this.patientBasic.nic = "";
      this.patientSpecialNotes = "";
      this.patientDiseases.nonTransmitted = [];
      this.patientDiseases.otherDiseases = [];
      this.patientContact.teleNum = "";
      this.patientContact.email = "";

      this.e6 = 1;
    },
    // Get Location related metadata
    getMetaData() {
      // Load GN Divs From Database Based On Doctor's Hospital Location
      this.$http
        .get("/api/metadata/metadata_01")
        .then(res => {
          // Convert the Plain Object to a MAP Object
          this.provinceDistrictMap = new Map(
            Object.entries(res.data.province_district)
          );
          this.districtDivisionMap = new Map(
            Object.entries(res.data.district_division)
          );

          this.divisionGnDivisionMap = new Map(
            Object.entries(res.data.division_gndivision)
          );
          console.log(this.divisionGnDivisionMap);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // Analytics
    setAnalytics() {
      // Load GN Divs From Database Based On Doctor's Hospital Location
      this.$http
        .post("/api/analytics/patients/count", {
          patientID: this.docID
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getMetaData();
  }
};
</script>

<style scoped></style>
