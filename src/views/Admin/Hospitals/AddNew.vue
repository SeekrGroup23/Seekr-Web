<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Add New Hospital
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
        <v-card>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-text-field label="Name" v-model="name"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-text-field
                  label="Registration No."
                  v-model="regNo"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-select
                  :items="provinces"
                  label="Province"
                  v-model="province"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md6 sm12 xs12>
                <v-select
                  :items="districts"
                  label="District"
                  v-model="district"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md6 sm12 xs12>
                <v-select
                  :items="gnDivs"
                  label="Grama Niladhari Division Code"
                  v-model="gnDiv"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex md6 sm12 xs12>
                <v-select
                  :items="categories"
                  label="Type/Category"
                  v-model="category"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-text-field label="Address" v-model="address"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-text-field
                  label="Latitude"
                  v-model="latitude"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex md6 sm12 xs12>
                <v-text-field
                  label="Longitude"
                  v-model="longitude"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row class="px-0">
              <v-spacer></v-spacer>
              <v-flex md8 xs12 sm12>
                <v-btn color="">Cancel</v-btn>

                <v-btn color="primary" @click="addHospital()">Submit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    resNo: { required },
    name: { required, minLength }
  },
  data: () => {
    return {
      loading_1: false,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "secondary",
      snackbarTimeout: 1000,

      name: "",
      regNo: "",
      province: "",
      district: "",
      category: "",
      address: "",
      latitude: "",
      longitude: "",
      gnDiv: "",
      provinces: ["Western", "Eastern", "Southern", "Nothern"],
      districts: ["Colombo", "Kaluthara", "Gampaha"],
      gnDivs: ["Wethara-225"],
      categories: ["Teaching Hospital", "District General"]
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
    nicErrors() {
      const errors = [];
      // if (!this.$v.nic.$dirty) return errors;
      // !this.$v.nic.required && errors.push("NIC is required");
      if (!this.nicValidator(this.patientBasic.nic)) {
        errors.push("Invalid NIC");
      }
      return errors;
    }
  },
  methods: {
    addHospital() {
      this.$http
        .post("/api/hospital/create", {
          name: this.name,
          regNo: this.regNo,
          province: this.province,
          district: this.district,
          gnDivCode: this.gnDiv,
          category: this.category,
          address: this.address,
          latitude: this.latitude,
          longitude: this.longitude,
          createdBy: "",
          lastModifiedBy: ""
        })
        .then(res => {
          console.log(res.data);
          if (res.data.message == "Success") {
            this.snackbarTimeout = 1500;
            this.snackbarText = "Hospital Added Successfully";
            this.clearFields();
            this.snackbar = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearFields() {
      this.name = "";
      this.regNo = "";
      this.province = "";
      this.district = "";
      this.gnDiv = "";
      this.category = "";
      this.address = "";
      this.latitude = "";
      this.longitude = "";
    }
  },
  created() {
    // Load GN Divs From Database Based On Doctor's Hospital Location
  }
};
</script>

<style scoped></style>
