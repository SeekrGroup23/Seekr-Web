<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Add New Data Entry Officer
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
            <small>Data Entry Officer's Personal Information</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid wrap>
                <v-layout column>
                  <v-flex class="">
                    <v-select
                      v-model="dataEntryBasic.title"
                      color="primary"
                      label="Title"
                      :items="titles"
                      required
                      :error-messages="titleErrors"
                      @blur="$v.dataEntryBasic.title.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex>
                    <v-layout row wrap class="py-0 my-0">
                      <v-flex class="">
                        <v-text-field
                          v-model="dataEntryBasic.firstName"
                          color="primary"
                          label="First Name"
                          required
                          :error-messages="firstNameErrors"
                          @blur="$v.dataEntryBasic.firstName.$touch()"
                        ></v-text-field>
                      </v-flex>
                      <!-- Last Name -->
                      <v-flex>
                        <v-text-field
                          v-model="dataEntryBasic.lastName"
                          color="primary"
                          label="Last Name"
                          required
                          :error-messages="lastNameErrors"
                          @blur="$v.dataEntryBasic.lastName.$touch()"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="dataEntryBasic.email"
                      color="primary"
                      label="Email"
                      required
                      :error-messages="emailErrors"
                      @blur="$v.dataEntryBasic.email.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <!-- NIC -->
                  <v-flex>
                    <v-text-field
                      v-model="dataEntryBasic.nic"
                      color="primary"
                      label="NIC"
                      required
                      :error-messages="nicErrors"
                      @blur="$v.dataEntryBasic.nic.$touch()"
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
                          v-model="dataEntryBasic.dob"
                          label="Date of Birth"
                          readonly
                          v-on="on"
                          :error-messages="dobErrors"
                          @blur="$v.dataEntryBasic.dob.$touch()"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        min="1980-01-01"
                        picker-date="1990-01-01"
                        v-model="dataEntryBasic.dob"
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
                          v-model="dataEntryBasic.gender"
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

          <!-- Professional Section -->
          <v-stepper-step :complete="e6 > 2" step="2"
            >Professional Information
            <small
              >Data Entry Officer's Professional Information</small
            ></v-stepper-step
          >

          <v-stepper-content step="2">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid>
                <v-layout column>
                  <v-flex class="py-1">
                    <v-text-field
                      label="Registration No."
                      v-model="dataEntryProfessional.regNo"
                      :error-messages="regNoErrors"
                      @blur="$v.dataEntryProfessional.regNo.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="Province"
                      :items="provinces"
                      @change="getDistricts()"
                      v-model="dataEntryProfessional.province"
                      :error-messages="provinceErrors"
                      @blur="$v.dataEntryProfessional.province.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="District"
                      @change="getDivisions()"
                      :items="districts"
                      v-model="dataEntryProfessional.district"
                      :error-messages="districtErrors"
                      @blur="$v.dataEntryProfessional.district.$touch()"
                    ></v-select>
                  </v-flex>

                  <v-flex class="py-1">
                    <v-select
                      label="Division"
                      v-model="dataEntryProfessional.division"
                      :error-messages="divisionErrors"
                      @change="getGnDivisions()"
                      :items="divisions"
                      @blur="$v.dataEntryProfessional.division.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="Grama Niladhari Division"
                      v-model="dataEntryProfessional.gnDivision"
                      :error-messages="gnDivisionErrors"
                      :items="gnDivisions"
                      @blur="$v.dataEntryProfessional.gnDivision.$touch()"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveProfessionalInforamtion()"
              >Continue</v-btn
            >
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-stepper-content>

          <!-- Contact Details Section -->
          <v-stepper-step :complete="e6 > 3" step="3"
            >Contact Details
            <small>Data Entry Officer's Contact Details</small>
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      label="Official Email*"
                      v-model="dataEntryContact.officialEmail"
                      :error-messages="officialEmailErrors"
                      @blur="$v.dataEntryContact.officialEmail.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Permenant Address*"
                      v-model="dataEntryContact.permAddress"
                      :error-messages="permAddressErros"
                      @blur="$v.dataEntryContact.permAddress.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Temporary Address"
                      v-model="dataEntryContact.tempAddress"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Official Telephone Number*"
                      v-model="dataEntryContact.officialTeleNum"
                      :error-messages="officialTeleNumErrors"
                      @blur="$v.dataEntryContact.officialTeleNum.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Personal Telephone Number"
                      v-model="dataEntryContact.personalTeleNum"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveContactInfo()">Continue</v-btn>
            <!-- <v-btn flat>Cancel</v-btn> -->
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
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
  alphaNum,
  numeric
} from "vuelidate/lib/validators";
// const nicValidator = function(nic) {
//   console.log(nic);
//   if (
//     nic.length == 10 &&
//     (nic.charAt(9) == "V" || nic.charAt(9) == "v") &&
//     !isNaN(nic.substr(0, 8))
//   ) {
//     return true;
//   } else if (nic.length == 12 && !isNaN(nic)) {
//     return true;
//   } else {
//     return false;
//   }
// };
export default {
  mixins: [validationMixin],
  validations: {
    dataEntryBasic: {
      firstName: { required, minLength: minLength(4), alpha },
      lastName: { required, minLength: minLength(4), alpha },
      nic: { required, alphaNum },
      dob: { required },
      gender: { required, alpha },
      email: { required, email },
      title: { required }
    },
    dataEntryProfessional: {
      regNo: { required, alphaNum },
      division: { required },
      province: { required },
      district: { required },
      gnDivision: { required }
    },
    dataEntryContact: {
      permAddress: { required },
      tempAddress: {},
      officialTeleNum: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      personalTeleNum: {},
      officialEmail: { required, email }
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
      snackbarTimeout: 2000,
      selectedFile: null,
      titles: ["Mr.", "Mrs.", "Ms."],
      // Control Stepper Card Attributes
      stepperColor: "",
      isStepperDark: false,
      // Data related to General Section
      dataEntryBasic: {
        firstName: "",
        lastName: "",
        email: "",
        nic: "",
        dob: new Date().toISOString().substr(0, 10),
        gender: "Male"
      },
      dataEntryProfessional: {
        regNo: "",
        gnDivision: "",
        division: "",
        province: "",
        district: "",
        officeLocation: ""
      },
      dataEntryContact: {
        permAddress: "",
        tempAddress: "",
        officialTeleNum: "",
        personalTeleNum: "",
        officialEmail: ""
      },
      gnDivision: "",
      medicalOfficerWorkPlace: {},
      hospitals: [],
      hospital: "",
      hospitalData: null,
      gnDivisions: ["Wethar-225"],
      docID: "",
      provinces: [
        "Western",
        "Eastern",
        "Southern",
        "Nothern",
        "Uva",
        "North-Central",
        "Sabaragamuwa",
        "Central",
        "North-Western"
      ],
      districts: [
        "Ampara",
        "Anuradhapura",
        "Badulla",
        "Batticaloa",
        "Colombo",
        "Galle",
        "Gampaha",
        "Hambantota",
        "Jaffna",
        "Kalutara",
        "Kandy",
        "Kegalle",
        "Kilinochchi",
        "Kurunegala",
        "Mannar",
        "Matale",
        "Matara",
        "Monaragala",
        "Mullaitivu",
        "Nuwara Eliya",
        "Polonnaruwa",
        "Puttalam",
        "Ratnapura",
        "Trincomalee",
        "Vavuniya"
      ],
      divisions: [],
      provDistMap: new Map(),
      distGnMap: new Map(),
      divGnDivMap: new Map(),
      districtDivisionMap: new Map()
    };
  },
  computed: {
    /**Form Validation and Error Handling - begin */
    firstNameErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.firstName.$dirty) return errors;
      !this.$v.dataEntryBasic.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.dataEntryBasic.firstName.required &&
        errors.push("First Name is required");
      !this.$v.dataEntryBasic.firstName.alpha &&
        errors.push("First Name Should Only Contains Letters");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.lastName.$dirty) return errors;
      !this.$v.dataEntryBasic.lastName.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.dataEntryBasic.lastName.required &&
        errors.push("Last Name is required");
      !this.$v.dataEntryBasic.lastName.alpha &&
        errors.push("Last Name Should Only Contains Letters");
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.dob.$dirty) return errors;
      !this.$v.dataEntryBasic.dob.required &&
        errors.push("Date of Birth is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.email.$dirty) return errors;
      !this.$v.dataEntryBasic.email.required &&
        errors.push("Email is required");
      !this.$v.dataEntryBasic.email.email && errors.push("Invalid Email");
      return errors;
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.nic.$dirty) return errors;
      !this.$v.dataEntryBasic.nic.required && errors.push("NIC is required");
      !this.$v.dataEntryBasic.nic.alphaNum &&
        errors.push("Invalid Character(s)");
      // !this.$vgh.dataEntryBasic.nic.nicValidator &&
      //   errors.push("Invalid NIC");
      if (
        this.dataEntryBasic.nic != "" &&
        !this.nicValidator(this.dataEntryBasic.nic)
      ) {
        errors.push("Invalid NIC");
      }
      return errors;
    },
    regNoErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.regNo.$dirty) return errors;
      !this.$v.dataEntryProfessional.regNo.required &&
        errors.push("Registration No. is required");
      !this.$v.dataEntryProfessional.regNo.alphaNum &&
        errors.push("Registration No. Should Not Contain Special Characters");
      return errors;
    },
    specialtyErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.specialty.$dirty) return errors;
      !this.$v.dataEntryProfessional.specialty.required &&
        errors.push("Specialty is required");
      !this.$v.dataEntryProfessional.specialty.alpha &&
        errors.push("Specialty Should Only Contains Letters");
      return errors;
    },
    designationErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.designation.$dirty) return errors;
      !this.$v.dataEntryProfessional.designation.required &&
        errors.push("Designation is required");
      !this.$v.dataEntryProfessional.designation.alpha &&
        errors.push("Designation Should Only Contains Letters");
      return errors;
    },
    officialTeleNumErrors() {
      const errors = [];
      if (!this.$v.dataEntryContact.officialTeleNum.$dirty) return errors;
      !this.$v.dataEntryContact.officialTeleNum.required &&
        errors.push("Official Telephone Number is required");
      !this.$v.dataEntryContact.officialTeleNum.numeric &&
        errors.push("Telephone Number Should Only Contains Numbers");
      !this.$v.dataEntryContact.officialTeleNum.minLength &&
        errors.push("Invalid Telephone Number");
      !this.$v.dataEntryContact.officialTeleNum.maxLength &&
        errors.push("Invalid Telephone Number");
      return errors;
    },
    permAddressErros() {
      const errors = [];
      if (!this.$v.dataEntryContact.permAddress.$dirty) return errors;
      !this.$v.dataEntryContact.permAddress.required &&
        errors.push("Permanent Address is required");
      return errors;
    },
    officialEmailErrors() {
      const errors = [];
      if (!this.$v.dataEntryContact.officialEmail.$dirty) return errors;
      !this.$v.dataEntryContact.officialEmail.required &&
        errors.push("Official Email is required");
      !this.$v.dataEntryContact.officialEmail.email &&
        errors.push("Invalid Email");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.dataEntryBasic.title.$dirty) return errors;
      !this.$v.dataEntryBasic.title.required &&
        errors.push("Official Email is required");
      return errors;
    },
    divisionErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.division.$dirty) return errors;
      !this.$v.dataEntryProfessional.division.required &&
        errors.push("Division is required");
      return errors;
    },
    provinceErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.province.$dirty) return errors;
      !this.$v.dataEntryProfessional.province.required &&
        errors.push("Province is required");
      return errors;
    },
    districtErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.district.$dirty) return errors;
      !this.$v.dataEntryProfessional.district.required &&
        errors.push("District is required");
      return errors;
    },
    gnDivisionErrors() {
      const errors = [];
      if (!this.$v.dataEntryProfessional.gnDivision.$dirty) return errors;
      !this.$v.dataEntryProfessional.gnDivision.required &&
        errors.push("Grama Niladhari Division is required");
      return errors;
    }
  },
  methods: {
    // To Save MO's Basic Information
    saveBasicInformation() {
      this.$v.dataEntryBasic.$touch();
      if (!this.$v.dataEntryBasic.$invalid) {
        this.loading_1 = true;
        this.$http
          .post("/api/data_entry/create", {
            firstName: this.dataEntryBasic.firstName,
            lastName: this.dataEntryBasic.lastName,
            dob: this.dataEntryBasic.dob,
            nic: this.dataEntryBasic.nic,
            createdBy: "",
            title: this.dataEntryBasic.title,
            gender: this.dataEntryBasic.gender,
            email: this.dataEntryBasic.email,
            password: "gn@123",
            lastModifiedBy: ""
          })
          .then(res => {
            if (res.data.message == "Success") {
              // this.snackbarText = "Patient Created Successfully";
              // this.snackbar = true;
              this.docID = res.data.docID;
              console.log(this.docID);
              this.loading_1 = false;
              this.e6 = 2;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("Form Validation Failed");
      }
    },
    // To Save GNO's Professional Information
    saveProfessionalInforamtion() {
      this.$v.dataEntryProfessional.$touch();
      if (!this.$v.dataEntryProfessional.$invalid) {
        this.loading_1 = true;
        this.$http
          .put("/api/data_entry/" + this.docID + "/professional", {
            regNo: this.dataEntryProfessional.regNo,
            province: this.dataEntryProfessional.province,
            district: this.dataEntryProfessional.district,
            division: this.dataEntryProfessional.division,
            gnDivision: this.dataEntryProfessional.gnDivision,
            lastModifiedBy: "null"
          })
          .then(res => {
            console.log(res.data);
            if (res.data.message == "Success") {
              // this.snackbarText = "Patient Created Successfully";
              // this.snackbar = true;
              // this.docID = res.data.docID;
              // console.log(this.docID);
              // this.loading_1 = false;
              this.e6 = 3;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("Forma Validation Failed");
      }
    },
    // To Validate the NIC Number
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
    // To Save Medical Officer's Contact Information
    saveContactInfo() {
      this.$v.dataEntryContact.$touch();
      if (!this.$v.dataEntryContact.$invalid) {
        console.log({
          officialEmail: this.dataEntryContact.officialEmail,
          tempAddress: this.dataEntryContact.tempAddress,
          permAddress: this.dataEntryContact.permAddress,
          officialTeleNum: this.dataEntryContact.officialTeleNum,
          privateTeleNum: this.dataEntryContact.personalTeleNum,
          lastModifiedBy: "null"
        });
        this.loading_1 = true;
        this.$http
          .put("/api/data_entry/" + this.docID + "/contact", {
            officialEmail: this.dataEntryContact.officialEmail,
            tempAddress: this.dataEntryContact.tempAddress,
            permAddress: this.dataEntryContact.permAddress,
            officialTeleNum: this.dataEntryContact.officialTeleNum,
            privateTeleNum: this.dataEntryContact.personalTeleNum,
            lastModifiedBy: "null"
          })
          .then(res => {
            console.log(res.data);
            if (res.data.message == "Success") {
              this.loading_1 = false;
              this.snackbarText = "Data Entry Officer Added Successfully";
              this.snackbarTimeout = 2000;
              this.snackbar = true;
              this.e6 = 1;
              this.clearAllFields();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    clearAllFields() {
      this.dataEntryBasic.firstName = "";
      this.dataEntryBasic.lastName = "";
      this.dataEntryBasic.email = "";
      this.dataEntryBasic.nic = "";
      this.dataEntryBasic.dob = new Date().toISOString().substr(0, 10);
      this.dataEntryBasic.gender = "Male";
      this.dataEntryProfessional.regNo = "";
      this.dataEntryProfessional.gnDivision = "";
      this.dataEntryProfessional.division = "";
      this.dataEntryProfessional.province = "";
      this.dataEntryProfessional.district = "";
      this.dataEntryProfessional.officeLocation = "";
      this.dataEntryContact.permAddress = "";
      this.dataEntryContact.tempAddress = "";
      this.dataEntryContact.officialTeleNum = "";
      this.dataEntryContact.personalTeleNum = "";
      this.dataEntryContact.officialEmail = "";
      this.$v.dataEntryBasic.$reset();
      this.$v.dataEntryProfessional.$reset();
      this.$v.dataEntryContact.$reset();
    },
    // When User Select the Province, the Districts within that Provice should be loaded to the v-select
    getDistricts() {
      this.districts = this.provDistMap.get(
        this.dataEntryProfessional.province
      );
      console.log(
        this.provDistMap.get(this.dataEntryProfessional.province.toString)
      );
    },
    // When User Select the District, the GN Divisions within that District should be loaded to the v-select
    getGnDivisions() {
      this.gnDivisions = this.divGnDivMap.get(
        this.dataEntryProfessional.division
      );
    },
    getDivisions() {
      this.divisions = this.districtDivisionMap.get(
        this.dataEntryProfessional.district
      );
    }
  },
  created() {
    // Load GN Divs From Database Based On Doctor's Hospital Location
    // Assigning Values to the Provice-District Map
    this.$http
      .get("/api/metadata/metadata_01")
      .then(res => {
        // Convert the Plain Object to a MAP Object
        this.provDistMap = new Map(Object.entries(res.data.province_district));
        this.districtDivisionMap = new Map(
          Object.entries(res.data.district_division)
        );
        this.divGnDivMap = new Map(
          Object.entries(res.data.division_gndivision)
        );
        console.log(">>>>>>>>>>>>>");
        console.log(this.districtDivisionMap);
      })
      .catch(err => {
        console.log(err);
      });
    // this.provDistMap.set("Western", ["Colombo", "Kaluthara", "Gampaha"]);
    // this.provDistMap.set("Northern", [
    //   "Jaffna",
    //   "Mannar",
    //   "Mullaitivu",
    //   "Vavuniya"
    // ]);
    // this.provDistMap.set("North-Western", ["Puttalam", "Kurunegala"]);
    // this.provDistMap.set("North-Central", ["Jafna", "Mulativu", ""]);
    // this.provDistMap.set("Eastern", ["Anuradhapura", "Polonnaruwa"]);
    // this.provDistMap.set("Central	", ["Matale", "Kandy", "Nuwara Eliya"]);
    // this.provDistMap.set("Sabaragamuwa", ["Kegalle", "Ratnapura"]);
    // this.provDistMap.set("Eastern", ["Trincomalee", "Batticaloa", "Ampara"]);
    // this.provDistMap.set("Uva", ["Badulla", "Monaragala"]);
    // this.provDistMap.set("Southern", ["Hambantota", "Matara", "Galle"]);
    // Assigning Values to the DIstrict-GN Division Map
    this.distGnMap.set("Homagama", ["Wethara-255", "Kirigampaumunuwa-123"]);
    this.distGnMap.set("Kesbawa", ["Polgasowita-234", "Halpita-sdf"]);
    // console.log(this.districts);
  }
};
</script>

<style scoped></style>
