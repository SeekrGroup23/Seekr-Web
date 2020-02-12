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
        <v-card color="secondary" dark>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex md5 sm12 xs12>
                <v-layout column>
                  <v-flex md6 sm12 xs12>
                    <v-text-field label="Name" v-model="name"></v-text-field>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-text-field
                      label="Registration No."
                      v-model="regNo"
                    ></v-text-field>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-select
                      :items="provinces"
                      label="Province"
                      v-model="province"
                      @change="getDistricts()"
                    ></v-select>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-select
                      :items="districts"
                      label="District"
                      v-model="district"
                      @change="getDivisions()"
                    ></v-select>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-select
                      :items="divisions"
                      label="Division"
                      v-model="division"
                    ></v-select>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-select
                      :items="categories"
                      label="Type/Category"
                      v-model="category"
                    ></v-select>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-text-field
                      label="Address"
                      v-model="address"
                    ></v-text-field>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <v-text-field
                      label="Latitude"
                      v-model="latitude"
                    ></v-text-field>
                  </v-flex>

                  <v-flex md6 sm12 xs12>
                    <v-text-field
                      label="Longitude"
                      v-model="longitude"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-divider vertical class="px-4"></v-divider>
              <v-spacer></v-spacer>
              <v-flex md6 sm12 xs12 class="">
                <div id="map"></div>
              </v-flex>
            </v-layout>
            <v-layout column>
              <v-flex md12 xs12 sm12>
                <v-spacer></v-spacer>
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
import { required, minLength } from "vuelidate/lib/validators";
import gmapsInit from "../../../utils/gmaps";

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
      division: "",
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
      categories: ["Teaching Hospital", "District General"],
      provinceDistrictMap: new Map(),
      districtDivisionMap: new Map()
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
          division: this.division,
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
    // To Clear All Input Fields
    clearFields() {
      this.name = "";
      this.regNo = "";
      this.province = "";
      this.district = "";
      this.division = "";
      this.category = "";
      this.address = "";
      this.latitude = "";
      this.longitude = "";
    },
    // When User Select the Province, the Districts within that Provice should be loaded to the v-select
    getDistricts() {
      this.districts = this.provinceDistrictMap.get(this.province);
    },
    getDivisions() {
      this.divisions = this.districtDivisionMap.get(this.district);
    }
  },
  created() {
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
      })
      .catch(err => {
        console.log(err);
      });
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      console.log(google);

      const mapContainer = document.querySelector("#map");
      console.log(mapContainer);

      const map = new google.maps.Map(mapContainer, {
        center: { lat: 7.4224, lng: 80.8326 },

        zoom: 8
      });

      var marker = null;

      // This event listener calls addMarker() when the map is clicked.
      google.maps.event.addListener(map, "click", event => {
        // alert(
        //   "Latitude: " +
        //     event.latLng.lat() +
        //     " " +
        //     ", longitude: " +
        //     event.latLng.lng()
        // );

        this.latitude = event.latLng.lat();
        this.longitude = event.latLng.lng();

        // This is to avoid user adding multiple markers to the map while getting the location
        if (marker == null) {
          marker = new google.maps.Marker({
            position: event.latLng
          });

          // To add the marker to the map, call setMap();
          marker.setMap(map);
        } else {
          // Remove Marker
          marker.setMap(null);
          marker = null;
          this.latitude = "";
          this.longitude = "";
        }
      });

      console.log(map);
    } catch (error) {
      console.error("Error >> " + error);
    }
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
