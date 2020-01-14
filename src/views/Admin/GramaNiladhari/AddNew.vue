<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Add New Grama Niladhari Officer
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
            <small>Grama Niladhari Officer's Personal Information</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid wrap>
                <v-layout column>
                  <v-flex class="">
                    <v-select
                      v-model="gramaNiladhariBasic.title"
                      color="primary"
                      label="Title"
                      :items="titles"
                      required
                      :error-messages="titleErrors"
                      @blur="$v.gramaNiladhariBasic.title.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex>
                    <v-layout row wrap class="py-0 my-0">
                      <v-flex class="">
                        <v-text-field
                          v-model="gramaNiladhariBasic.firstName"
                          color="primary"
                          label="First Name"
                          required
                          :error-messages="firstNameErrors"
                          @blur="$v.gramaNiladhariBasic.firstName.$touch()"
                        ></v-text-field>
                      </v-flex>
                      <!-- Last Name -->
                      <v-flex>
                        <v-text-field
                          v-model="gramaNiladhariBasic.lastName"
                          color="primary"
                          label="Last Name"
                          required
                          :error-messages="lastNameErrors"
                          @blur="$v.gramaNiladhariBasic.lastName.$touch()"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="gramaNiladhariBasic.email"
                      color="primary"
                      label="Email"
                      required
                      :error-messages="emailErrors"
                      @blur="$v.gramaNiladhariBasic.email.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <!-- NIC -->
                  <v-flex>
                    <v-text-field
                      v-model="gramaNiladhariBasic.nic"
                      color="primary"
                      label="NIC"
                      required
                      :error-messages="nicErrors"
                      @blur="$v.gramaNiladhariBasic.nic.$touch()"
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
                          v-model="gramaNiladhariBasic.dob"
                          label="Date of Birth"
                          readonly
                          v-on="on"
                          :error-messages="dobErrors"
                          @blur="$v.gramaNiladhariBasic.dob.$touch()"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        min="1980-01-01"
                        picker-date="1990-01-01"
                        v-model="gramaNiladhariBasic.dob"
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
                          v-model="gramaNiladhariBasic.gender"
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
              >Grama Niladhari Officer's Professional Information</small
            ></v-stepper-step
          >

          <v-stepper-content step="2">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid>
                <v-layout column>
                  <v-flex class="py-1">
                    <v-text-field
                      label="Registration No."
                      v-model="gramaNiladhariProfessional.regNo"
                      :error-messages="regNoErrors"
                      @blur="$v.gramaNiladhariProfessional.regNo.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="Province"
                      :items="provinces"
                      @change="getDistricts()"
                      v-model="gramaNiladhariProfessional.province"
                      :error-messages="provinceErrors"
                      @blur="$v.gramaNiladhariProfessional.province.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="District"
                      @change="getDivisions()"
                      :items="districts"
                      v-model="gramaNiladhariProfessional.district"
                      :error-messages="districtErrors"
                      @blur="$v.gramaNiladhariProfessional.district.$touch()"
                    ></v-select>
                  </v-flex>

                  <v-flex class="py-1">
                    <v-select
                      label="Division"
                      v-model="gramaNiladhariProfessional.division"
                      :error-messages="divisionErrors"
                      @change="getGnDivisions()"
                      :items="divisions"
                      @blur="$v.gramaNiladhariProfessional.division.$touch()"
                    ></v-select>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-select
                      label="Grama Niladhari Division"
                      v-model="gramaNiladhariProfessional.gnDivision"
                      :error-messages="gnDivisionErrors"
                      :items="gnDivisions"
                      @blur="$v.gramaNiladhariProfessional.gnDivision.$touch()"
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

          <!-- Profile Image Section -->
          <v-stepper-step :complete="e6 > 3" step="3"
            >Profile Image
            <small>Setting up a Profile Image</small></v-stepper-step
          >

          <v-stepper-content step="3">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex class="py-1" md3 sm6 xs12>
                    <v-avatar tile color="primary" size="208">
                      <v-img :src="imageURL"></v-img>
                    </v-avatar>
                  </v-flex>
                  <v-flex class=" " md2>
                    <input
                      style="display: none"
                      ref="imageFileInput"
                      type="file"
                      name="imageFile"
                      v-on:change="onFileSelected"
                    />
                    <v-btn @click="$refs.imageFileInput.click()"
                      >Select Image</v-btn
                    >
                  </v-flex>
                  <v-flex class="py-1 " md8>
                    <v-spacer></v-spacer>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="uploadFile()">Continue</v-btn>
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-stepper-content>

          <!-- Contact Details Section -->
          <v-stepper-step :complete="e6 > 4" step="4"
            >Contact Details
            <small>Medical Officer's Contact Details</small>
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-card :color="stepperColor" class="mb-5" :dark="isStepperDark">
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      label="Official Email*"
                      v-model="gramaNiladhariContact.officialEmail"
                      :error-messages="officialEmailErrors"
                      @blur="$v.gramaNiladhariContact.officialEmail.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Permenant Address*"
                      v-model="gramaNiladhariContact.permAddress"
                      :error-messages="permAddressErros"
                      @blur="$v.gramaNiladhariContact.permAddress.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Temporary Address"
                      v-model="gramaNiladhariContact.tempAddress"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Official Telephone Number*"
                      v-model="gramaNiladhariContact.officialTeleNum"
                      :error-messages="officialTeleNumErrors"
                      @blur="$v.gramaNiladhariContact.officialTeleNum.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Personal Telephone Number"
                      v-model="gramaNiladhariContact.personalTeleNum"
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
    gramaNiladhariBasic: {
      firstName: { required, minLength: minLength(4), alpha },
      lastName: { required, minLength: minLength(4), alpha },
      nic: { required, alphaNum },
      dob: { required },
      gender: { required, alpha },
      email: { required, email },
      title: { required }
    },
    gramaNiladhariProfessional: {
      regNo: { required, alphaNum },
      division: { required },
      province: { required },
      district: { required },
      gnDivision: { required }
    },
    gramaNiladhariContact: {
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
      gramaNiladhariBasic: {
        firstName: "",
        lastName: "",
        email: "",
        nic: "",
        dob: new Date().toISOString().substr(0, 10),
        gender: "Male"
      },
      gramaNiladhariProfessional: {
        regNo: "",
        gnDivision: "",
        division: "",
        province: "",
        district: "",
        officeLocation: ""
      },
      gramaNiladhariContact: {
        permAddress: "",
        tempAddress: "",
        officialTeleNum: "",
        personalTeleNum: "",
        officialEmail: ""
      },
      gnDivision: "",
      medicalOfficerWorkPlace: {},
      imageURL: require("../../../assets/user.png"),
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
      districts: [],
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
      if (!this.$v.gramaNiladhariBasic.firstName.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.gramaNiladhariBasic.firstName.required &&
        errors.push("First Name is required");
      !this.$v.gramaNiladhariBasic.firstName.alpha &&
        errors.push("First Name Should Only Contains Letters");

      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariBasic.lastName.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.lastName.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.gramaNiladhariBasic.lastName.required &&
        errors.push("Last Name is required");
      !this.$v.gramaNiladhariBasic.lastName.alpha &&
        errors.push("Last Name Should Only Contains Letters");
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariBasic.dob.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.dob.required &&
        errors.push("Date of Birth is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariBasic.email.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.email.required &&
        errors.push("Email is required");
      !this.$v.gramaNiladhariBasic.email.email && errors.push("Invalid Email");
      return errors;
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariBasic.nic.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.nic.required &&
        errors.push("NIC is required");
      !this.$v.gramaNiladhariBasic.nic.alphaNum &&
        errors.push("Invalid Character(s)");
      // !this.$vgh.gramaNiladhariBasic.nic.nicValidator &&
      //   errors.push("Invalid NIC");
      if (
        this.gramaNiladhariBasic.nic != "" &&
        !this.nicValidator(this.gramaNiladhariBasic.nic)
      ) {
        errors.push("Invalid NIC");
      }
      return errors;
    },
    regNoErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.regNo.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.regNo.required &&
        errors.push("Registration No. is required");
      !this.$v.gramaNiladhariProfessional.regNo.alphaNum &&
        errors.push("Registration No. Should Not Contain Special Characters");
      return errors;
    },
    specialtyErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.specialty.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.specialty.required &&
        errors.push("Specialty is required");
      !this.$v.gramaNiladhariProfessional.specialty.alpha &&
        errors.push("Specialty Should Only Contains Letters");
      return errors;
    },
    designationErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.designation.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.designation.required &&
        errors.push("Designation is required");
      !this.$v.gramaNiladhariProfessional.designation.alpha &&
        errors.push("Designation Should Only Contains Letters");
      return errors;
    },
    officialTeleNumErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariContact.officialTeleNum.$dirty) return errors;
      !this.$v.gramaNiladhariContact.officialTeleNum.required &&
        errors.push("Official Telephone Number is required");
      !this.$v.gramaNiladhariContact.officialTeleNum.numeric &&
        errors.push("Telephone Number Should Only Contains Numbers");
      !this.$v.gramaNiladhariContact.officialTeleNum.minLength &&
        errors.push("Invalid Telephone Number");
      !this.$v.gramaNiladhariContact.officialTeleNum.maxLength &&
        errors.push("Invalid Telephone Number");
      return errors;
    },
    permAddressErros() {
      const errors = [];
      if (!this.$v.gramaNiladhariContact.permAddress.$dirty) return errors;
      !this.$v.gramaNiladhariContact.permAddress.required &&
        errors.push("Permanent Address is required");
      return errors;
    },
    officialEmailErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariContact.officialEmail.$dirty) return errors;
      !this.$v.gramaNiladhariContact.officialEmail.required &&
        errors.push("Official Email is required");
      !this.$v.gramaNiladhariContact.officialEmail.email &&
        errors.push("Invalid Email");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariBasic.title.$dirty) return errors;
      !this.$v.gramaNiladhariBasic.title.required &&
        errors.push("Official Email is required");
      return errors;
    },
    divisionErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.division.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.division.required &&
        errors.push("Division is required");
      return errors;
    },
    provinceErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.province.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.province.required &&
        errors.push("Province is required");
      return errors;
    },
    districtErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.district.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.district.required &&
        errors.push("District is required");
      return errors;
    },
    gnDivisionErrors() {
      const errors = [];
      if (!this.$v.gramaNiladhariProfessional.gnDivision.$dirty) return errors;
      !this.$v.gramaNiladhariProfessional.gnDivision.required &&
        errors.push("Grama Niladhari Division is required");
      return errors;
    }
  },
  methods: {
    // To Save MO's Basic Information
    saveBasicInformation() {
      this.$v.gramaNiladhariBasic.$touch();
      if (!this.$v.gramaNiladhariBasic.$invalid) {
        this.loading_1 = true;
        this.$http
          .post("/api/grama_niladhari/create", {
            firstName: this.gramaNiladhariBasic.firstName,
            lastName: this.gramaNiladhariBasic.lastName,
            dob: this.gramaNiladhariBasic.dob,
            nic: this.gramaNiladhariBasic.nic,
            createdBy: "",
            title: this.gramaNiladhariBasic.title,
            gender: this.gramaNiladhariBasic.gender,
            email: this.gramaNiladhariBasic.email,
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
        console.log("Forma Validation Failed");
      }
    },
    // To Save GNO's Professional Information
    saveProfessionalInforamtion() {
      this.$v.gramaNiladhariProfessional.$touch();
      if (!this.$v.gramaNiladhariProfessional.$invalid) {
        this.loading_1 = true;
        this.$http
          .put("/api/grama_niladhari/" + this.docID + "/professional", {
            regNo: this.gramaNiladhariProfessional.regNo,
            province: this.gramaNiladhariProfessional.province,
            district: this.gramaNiladhariProfessional.district,
            division: this.gramaNiladhariProfessional.division,
            gnDivision: this.gramaNiladhariProfessional.gnDivision,
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
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);

      console.log(URL.createObjectURL(this.selectedFile));

      // this.uploadFile();
    },
    uploadFile() {
      let formData = new FormData();
      formData.append("imageFile", this.selectedFile);
      console.log(formData);
      // console.log(this.selectedFile);
      this.loading_1 = true;

      this.$http
        .post(
          "/api/grama_niladhari/" + this.docID + "/profile_image",
          formData,
          {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );

              if (
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) ==
                100
              ) {
                this.loading_1 = false;
              }
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.message == "Success") {
            this.e6 = 4;
          }
        })
        .catch(err => {
          console.log(err);
        });
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
      this.$v.gramaNiladhariContact.$touch();
      if (!this.$v.gramaNiladhariContact.$invalid) {
        console.log({
          officialEmail: this.gramaNiladhariContact.officialEmail,
          tempAddress: this.gramaNiladhariContact.tempAddress,
          permAddress: this.gramaNiladhariContact.permAddress,
          officialTeleNum: this.gramaNiladhariContact.officialTeleNum,
          privateTeleNum: this.gramaNiladhariContact.personalTeleNum,
          lastModifiedBy: "null"
        });
        this.loading_1 = true;
        this.$http
          .put("/api/grama_niladhari/" + this.docID + "/contact", {
            officialEmail: this.gramaNiladhariContact.officialEmail,
            tempAddress: this.gramaNiladhariContact.tempAddress,
            permAddress: this.gramaNiladhariContact.permAddress,
            officialTeleNum: this.gramaNiladhariContact.officialTeleNum,
            privateTeleNum: this.gramaNiladhariContact.personalTeleNum,
            lastModifiedBy: "null"
          })
          .then(res => {
            console.log(res.data);
            if (res.data.message == "Success") {
              this.loading_1 = false;
              this.snackbarText = "Grama Niladhari Officer Added Successfully";
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
      this.gramaNiladhariBasic.firstName = "";
      this.gramaNiladhariBasic.lastName = "";
      this.gramaNiladhariBasic.email = "";
      this.gramaNiladhariBasic.nic = "";
      this.gramaNiladhariBasic.dob = new Date().toISOString().substr(0, 10);
      this.gramaNiladhariBasic.gender = "Male";

      this.gramaNiladhariProfessional.regNo = "";
      this.gramaNiladhariProfessional.gnDivision = "";
      this.gramaNiladhariProfessional.division = "";
      this.gramaNiladhariProfessional.province = "";
      this.gramaNiladhariProfessional.district = "";
      this.gramaNiladhariProfessional.officeLocation = "";

      this.gramaNiladhariContact.permAddress = "";
      this.gramaNiladhariContact.tempAddress = "";
      this.gramaNiladhariContact.officialTeleNum = "";
      this.gramaNiladhariContact.personalTeleNum = "";
      this.gramaNiladhariContact.officialEmail = "";
      this.$v.gramaNiladhariBasic.$reset();
      this.$v.gramaNiladhariProfessional.$reset();
      this.$v.gramaNiladhariContact.$reset();

      this.imageURL = require("../../../assets/user.png");
    },

    // When User Select the Province, the Districts within that Provice should be loaded to the v-select
    getDistricts() {
      this.districts = this.provDistMap.get(
        this.gramaNiladhariProfessional.province
      );
      console.log(
        this.provDistMap.get(this.gramaNiladhariProfessional.province.toString)
      );
    },
    // When User Select the District, the GN Divisions within that District should be loaded to the v-select
    getGnDivisions() {
      this.gnDivisions = this.divGnDivMap.get(
        this.gramaNiladhariProfessional.division
      );
    },
    getDivisions() {
      this.divisions = this.districtDivisionMap.get(
        this.gramaNiladhariProfessional.district
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
