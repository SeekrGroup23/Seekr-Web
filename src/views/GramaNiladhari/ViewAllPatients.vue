<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Patients
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
          <v-card-title>
            <v-container fluid class="pa-0 ma-0">
              <v-layout row wrap class="pa-0 ma-0">
                <v-flex md6 xs10 sm6>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex md3> </v-flex>
                <v-flex shrink align-self-end md2 class="pl-5"> </v-flex>

                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-btn flat icon><v-icon>more_vert</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="patients"
            :search="search"
            :loading="loadingTable"
            @click:row="onClickTableRow"
          >
            <template v-slot:items="props">
              <tr @click="onClickTableRow(props.item)">
                <td class="text-xs-left">{{ props.item.firstName }}</td>
                <td class="text-xs-left">{{ props.item.lastName }}</td>
                <td class="text-xs-left">{{ props.item.age }}</td>
                <td class="text-xs-left">{{ props.item.gender }}</td>
                <td class="text-xs-left">{{ props.item.location }}</td>
                <td class="text-xs-left">{{ props.item.status }}</td>
                <td class="text-xs-center">
                  <v-btn icon flat color="secondary" dark>
                    <v-icon class="" @click="setLocation(props.item)">
                      add_location
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
            <template v-slot:no-results>
              <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>

      <v-btn
        fab
        dark
        color="primary"
        top
        bottom
        right
        fixed
        class="hidden-md-and-up"
      >
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-layout>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Delete Confirmation</v-card-title>
          <v-card-text
            >Are you sure that you want to proceed with this
            action?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="onClickCancel()"
              >cancel</v-btn
            >
            <v-btn color="red darken-1" flat @click="onClickDelete()" dark small
              >Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="timeout"
        right
        bottom
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="locationDialog" persistent width="800px">
        <v-card color="">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex md3 sm12 xs12>
                <v-layout column>
                  <v-flex md6 sm12 xs12>
                    <v-text-field label="Name" v-model="name"></v-text-field>
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
              <v-flex md8 sm12 xs12 class="">
                <div id="map"></div>
              </v-flex>
            </v-layout>
            <v-layout column>
              <v-flex md12 xs12 sm12>
                <v-spacer></v-spacer>
                <v-btn @click="locationDialog = false" color="" small
                  >Cancel</v-btn
                >

                <v-btn color="primary" @click="saveLocation()" small
                  >Save</v-btn
                >
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import gmapsInit from "../../utils/gmaps";
export default {
  data: () => {
    return {
      dialog: false,
      deletePointer: null,
      snackbar: false,
      snackbarColor: "secondary",
      snackbarText: "",
      timeout: 2000,
      search: "",
      locationDialog: false,
      loadingTable: false,
      headers: [
        {
          text: "First Name",
          align: "left",
          sortable: true,
          value: "firstName"
        },
        {
          text: "Last Name",
          align: "left",
          value: "lastName",
          sortable: true
        },
        { text: "Age", align: "left", value: "age", sortable: true },
        { text: "Gender", align: "left", value: "gender", sortable: false },
        { text: "Location", align: "left", value: "location", sortable: false },
        { text: "Status", align: "left", value: "status", sortable: false },
        { text: "Actions", value: "actions", align: "center", sortable: false }
      ],
      patients: [],
      latitude: "",
      longitude: "",
      name: "",
      address: "",
      currentPatient: ""
    };
  },
  computed: {},
  methods: {
    setLocation(patient) {
      this.locationDialog = true;
      this.name = patient.firstName + " " + patient.lastName;
      this.address = patient.address;
      this.currentPatient = patient.docID;
    },
    saveLocation() {
      this.$http
        .put("/api/patient/" + this.currentPatient + "/geo_location", {
          latitude: this.latitude,
          longitude: this.longitude
        })
        .then(res => {
          if (res.data.message == "Success") {
            console.log("Success" + this.currentPatient);
            this.locationDialog = false;

            this.patients.forEach(patient => {
              if (patient.docID == this.currentPatient) {
                this.patients[this.patients.indexOf(patient)].location =
                  "Confirmed";
              }
            });

            this.currentPatient = "";
            this.latitude = "";
            this.longitude = "";
          }
        })
        .catch();
    },

    // To Calculate Age Using the DOB
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    onClickTableRow(event) {
      console.log(event);
    },
    onClickCancel() {
      this.dialog = false;
      this.deletePointer = null;
    },
    getAllPatientData() {
      this.loadingTable = true;
      this.patients = [];
      var gnDivision = localStorage.getItem("gnDivision");
      this.$http
        .get("/api/patient/all/" + gnDivision)
        .then(res => {
          //   console.log(res.data + " " + this.$store.state.gnDivision);
          if (res.data == "") {
            this.patients = [];
          }
          var tempArray = res.data;

          tempArray.forEach(patient => {
            this.patients.push({
              firstName: patient.firstName,
              lastName: patient.lastName,
              age: this.getAge(patient.dob),
              gender: patient.gender,
              location:
                patient.geoCordinates == "" ? "Not Confirmed" : "Confirmed",
              status: patient.state,
              docID: patient.docID,
              address: patient.address_perm
            });
            this.loadingTable = false;
          });
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$store.dispatch("logout");
          }
        });
    }
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const mapContainer = document.querySelector("#map");
      console.log("MapCont");

      console.log(mapContainer);
      const map = new google.maps.Map(mapContainer, {
        center: { lat: 7.4224, lng: 80.8326 },
        zoom: 8
      });

      var marker = null;
      // This event listener calls addMarker() when the map is clicked.
      google.maps.event.addListener(map, "click", event => {
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
    } catch (error) {
      console.error("Error >> " + error);
    }
  },
  created() {
    this.getAllPatientData();
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
