<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Add New Medical Officer(Doctor)
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
            <small>Medical Officer's Personal Information</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid wrap>
                <v-layout column>
                  <v-flex>
                    <v-layout row wrap class="py-0 my-0">
                      <v-flex class="">
                        <v-text-field
                          v-model="medicalOfficerBasic.firstName"
                          color="primary"
                          label="First Name"
                          required
                          :error-messages="firstNameErrors"
                          @blur="$v.medicalOfficerBasic.firstName.$touch()"
                        ></v-text-field>
                      </v-flex>
                      <!-- Last Name -->
                      <v-flex>
                        <v-text-field
                          v-model="medicalOfficerBasic.lastName"
                          color="primary"
                          label="Last Name"
                          required
                          :error-messages="lastNameErrors"
                          @blur="$v.medicalOfficerBasic.lastName.$touch()"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      v-model="medicalOfficerBasic.email"
                      color="primary"
                      label="Email"
                      required
                      :error-messages="emailErrors"
                      @blur="$v.medicalOfficerBasic.email.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <!-- NIC -->
                  <v-flex>
                    <v-text-field
                      v-model="medicalOfficerBasic.nic"
                      color="primary"
                      label="NIC"
                      required
                      :error-messages="nicErrors"
                      @blur="$v.medicalOfficerBasic.nic.$touch()"
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
                          v-model="medicalOfficerBasic.dob"
                          label="Date of Birth"
                          readonly
                          v-on="on"
                          :error-messages="dobErrors"
                          @blur="$v.medicalOfficerBasic.dob.$touch()"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        min="1980-01-01"
                        picker-date="1990-01-01"
                        v-model="medicalOfficerBasic.dob"
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
                          v-model="medicalOfficerBasic.gender"
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
              >Medical Officer's Professional Information</small
            ></v-stepper-step
          >

          <v-stepper-content step="2">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex class="py-1">
                    <v-text-field
                      label="Registration No."
                      v-model="medicalOfficerProfessional.regNo"
                      :error-messages="regNoErrors"
                      @blur="$v.medicalOfficerProfessional.regNo.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-text-field
                      label="Specialty"
                      v-model="medicalOfficerProfessional.specialty"
                      :error-messages="specialtyErrors"
                      @blur="$v.medicalOfficerProfessional.specialty.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="py-1">
                    <v-text-field
                      label="Designation"
                      v-model="medicalOfficerProfessional.designation"
                      :error-messages="designationErrors"
                      @blur="$v.medicalOfficerProfessional.designation.$touch()"
                    ></v-text-field>
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
            <v-card color="secondary" class="mb-5">
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
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      label="Official Email*"
                      v-model="medicalOfficerContact.officialEmail"
                      :error-messages="officialEmailErrors"
                      @blur="$v.medicalOfficerContact.officialEmail.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Permenant Address*"
                      v-model="medicalOfficerContact.permAddress"
                      :error-messages="permAddressErros"
                      @blur="$v.medicalOfficerContact.permAddress.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Temporary Address"
                      v-model="medicalOfficerContact.tempAddress"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Official Telephone Number*"
                      v-model="medicalOfficerContact.officialTeleNum"
                      :error-messages="officialTeleNumErrors"
                      @blur="$v.medicalOfficerContact.officialTeleNum.$touch()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-text-field
                      label="Personal Telephone Number"
                      v-model="medicalOfficerContact.personalTeleNum"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveContactInfo()">Continue</v-btn>
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-stepper-content>

          <v-stepper-step step="5"
            >Work Place Assignment
            <small>Assign Medical Officer to a Hospital</small>
          </v-stepper-step>
          <v-stepper-content step="5">
            <v-card color="secondary" class="mb-5" dark>
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-select
                      label="Hospital"
                      :items="hospitals"
                      v-model="hospital"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="saveWorkPlace()">Continue</v-btn>
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-snackbar
        v-model="snackbar"
        bottom
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
    medicalOfficerBasic: {
      firstName: { required, minLength: minLength(4), alpha },
      lastName: { required, minLength: minLength(4), alpha },
      nic: { required, alphaNum },
      dob: { required },
      gender: { required, alpha },
      email: { required, email }
    },
    medicalOfficerProfessional: {
      regNo: { required, alphaNum },
      specialty: { required, alpha },
      designation: { required, alpha }
    },
    medicalOfficerContact: {
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
      e6: 5,
      menu: false,
      menu2: false,
      loading_1: false,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "secondary",
      snackbarTimeout: 1000,
      selectedFile: null,

      // Data related to General Section
      medicalOfficerBasic: {
        firstName: "",
        lastName: "",
        email: "",
        nic: "",
        dob: new Date().toISOString().substr(0, 10),
        gender: "Male"
      },
      medicalOfficerProfessional: {
        regNo: "",
        specialty: "",
        designation: ""
      },
      medicalOfficerContact: {
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

      gnDivs: ["Wethar-225"],
      docID: "iJfogK9Ci5CBHeNTvARi"
    };
  },
  computed: {
    /**Form Validation and Error Handling - begin */
    firstNameErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerBasic.firstName.$dirty) return errors;
      !this.$v.medicalOfficerBasic.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.medicalOfficerBasic.firstName.required &&
        errors.push("First Name is required");
      !this.$v.medicalOfficerBasic.firstName.alpha &&
        errors.push("First Name Should Only Contains Letters");

      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerBasic.lastName.$dirty) return errors;
      !this.$v.medicalOfficerBasic.lastName.minLength &&
        errors.push("Last Name must be at leat 4 charcters");
      !this.$v.medicalOfficerBasic.lastName.required &&
        errors.push("Last Name is required");
      !this.$v.medicalOfficerBasic.lastName.alpha &&
        errors.push("Last Name Should Only Contains Letters");
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerBasic.dob.$dirty) return errors;
      !this.$v.medicalOfficerBasic.dob.required &&
        errors.push("Date of Birth is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerBasic.email.$dirty) return errors;
      !this.$v.medicalOfficerBasic.email.required &&
        errors.push("Email is required");
      !this.$v.medicalOfficerBasic.email.email && errors.push("Invalid Email");
      return errors;
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerBasic.nic.$dirty) return errors;
      !this.$v.medicalOfficerBasic.nic.required &&
        errors.push("NIC is required");
      !this.$v.medicalOfficerBasic.nic.alphaNum &&
        errors.push("Invalid Character(s)");
      // !this.$vgh.medicalOfficerBasic.nic.nicValidator &&
      //   errors.push("Invalid NIC");
      if (
        this.medicalOfficerBasic.nic != "" &&
        !this.nicValidator(this.medicalOfficerBasic.nic)
      ) {
        errors.push("Invalid NIC");
      }
      return errors;
    },
    regNoErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerProfessional.regNo.$dirty) return errors;
      !this.$v.medicalOfficerProfessional.regNo.required &&
        errors.push("Registration No. is required");
      !this.$v.medicalOfficerProfessional.regNo.alphaNum &&
        errors.push("Registration No. Should Not Contain Special Characters");
      return errors;
    },
    specialtyErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerProfessional.specialty.$dirty) return errors;
      !this.$v.medicalOfficerProfessional.specialty.required &&
        errors.push("Specialty is required");
      !this.$v.medicalOfficerProfessional.specialty.alpha &&
        errors.push("Specialty Should Only Contains Letters");
      return errors;
    },
    designationErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerProfessional.designation.$dirty) return errors;
      !this.$v.medicalOfficerProfessional.designation.required &&
        errors.push("Designation is required");
      !this.$v.medicalOfficerProfessional.designation.alpha &&
        errors.push("Designation Should Only Contains Letters");
      return errors;
    },
    officialTeleNumErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerContact.officialTeleNum.$dirty) return errors;
      !this.$v.medicalOfficerContact.officialTeleNum.required &&
        errors.push("Official Telephone Number is required");
      !this.$v.medicalOfficerContact.officialTeleNum.numeric &&
        errors.push("Telephone Number Should Only Contains Numbers");
      !this.$v.medicalOfficerContact.officialTeleNum.minLength &&
        errors.push("Invalid Telephone Number");
      !this.$v.medicalOfficerContact.officialTeleNum.maxLength &&
        errors.push("Invalid Telephone Number");
      return errors;
    },
    permAddressErros() {
      const errors = [];
      if (!this.$v.medicalOfficerContact.permAddress.$dirty) return errors;
      !this.$v.medicalOfficerContact.permAddress.required &&
        errors.push("Permanent Address is required");
      return errors;
    },
    officialEmailErrors() {
      const errors = [];
      if (!this.$v.medicalOfficerContact.officialEmail.$dirty) return errors;
      !this.$v.medicalOfficerContact.officialEmail.required &&
        errors.push("Official Email is required");
      !this.$v.medicalOfficerContact.officialEmail.email &&
        errors.push("Invalid Email");
      return errors;
    }
  },
  methods: {
    // To Save MO's Basic Information
    saveBasicInformation() {
      this.$v.medicalOfficerBasic.$touch();
      if (!this.$v.medicalOfficerBasic.$invalid) {
        this.loading_1 = true;
        this.$http
          .post("/api/medical_officer/create", {
            firstName: this.medicalOfficerBasic.firstName,
            lastName: this.medicalOfficerBasic.lastName,
            dob: this.medicalOfficerBasic.dob,
            nic: this.medicalOfficerBasic.nic,
            createdBy: "",
            gender: this.medicalOfficerBasic.gender,
            email: this.medicalOfficerBasic.email,
            password: "doctor@123",
            lastModifiedBy: ""
          })
          .then(res => {
            if (res.data.message == "Success") {
              this.snackbarText = "Patient Created Successfully";
              this.snackbar = true;
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
    // To Save MO's Professional Information
    saveProfessionalInforamtion() {
      this.$v.medicalOfficerProfessional.$touch();
      if (!this.$v.medicalOfficerProfessional.$invalid) {
        this.loading_1 = true;
        this.docID = "sjfsiosdofsdofksdo";
        this.$http
          .put("/api/medical_officer/" + this.docID + "/professional", {
            regNo: this.medicalOfficerProfessional.regNo,
            specialty: this.medicalOfficerProfessional.specialty,
            designation: this.medicalOfficerProfessional.designation
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

      this.uploadFile();
    },
    uploadFile() {
      let formData = new FormData();
      formData.append("imageFile", this.selectedFile);
      console.log(formData);
      console.log(this.selectedFile);
      this.docID = "lskdflsdfksdokfods";
      this.$http
        .post(
          "/api/medical_officer/" + this.docID + "/profile_image",
          formData,
          {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          }
        )
        .then(res => {
          console.log(res.data);
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
      this.$http
        .put("/api/medical_officer/" + this.docID + "/contact", {
          officialEmail: this.medicalOfficerContact.officialEmail,
          tempAddress: this.medicalOfficerContact.tempAddress,
          permAddress: this.medicalOfficerContact.permAddress,
          officialTeleNum: this.medicalOfficerContact.officialTeleNum,
          privateTeleNum: this.medicalOfficerContact.personalTeleNum
        })
        .then(res => {
          console.log(res.data);
          if (res.data.message == "Success") {
            this.e6 = 5;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // To Get All Hospitals as a List
    getAllHospitals() {
      this.$http
        .get("/api/hospital/all/list")
        .then(res => {
          this.hospitalData = res.data;
          res.data.forEach(data => {
            this.hospitals.push(data.name);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    // To Save Work Place
    saveWorkPlace() {
      let tempObj;

      this.hospitalData.forEach(h => {
        if (h.name == this.hospital) {
          tempObj = h;
        }
      });

      console.log(tempObj);

      this.$http
        .put("/api/medical_officer/" + this.docID + "/work_place", tempObj)
        .then(res => {
          console.log(res.data);
          if (res.data.message == "Success") {
            this.e6 = 5;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // Load GN Divs From Database Based On Doctor's Hospital Location
    this.getAllHospitals();
  }
};
</script>

<style scoped></style>
