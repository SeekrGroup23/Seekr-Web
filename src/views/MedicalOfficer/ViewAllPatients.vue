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
                <v-flex shrink align-self-end md2 class="pl-5">
                  <v-btn
                    color="primary"
                    class="hidden-sm-and-down"
                    @click="$router.push('/medicalofficer/add_patient')"
                    >New Patient</v-btn
                  >
                </v-flex>

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
                    <v-icon class="" @click="viewPatient(props.item.docID)">
                      visibility
                    </v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon
                      @click="deletePatient(props.item.docID)"
                      color="red"
                    >
                      delete
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
  </v-container>
</template>

<script>
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
      patients: []
    };
  },
  computed: {},
  methods: {
    getAge(dateString) {
      console.log(dateString);

      var today = new Date();
      var birthDate = new Date(dateString);
      console.log(birthDate);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    deletePatient(docID) {
      this.deletePointer = docID;
      this.dialog = true;
    },
    onClickDelete() {
      this.dialog = false;
      this.$http
        .delete("/api/patient/" + this.deletePointer)
        .then(res => {
          console.log(res.data);

          if (res.data.message == "Success") {
            this.snackbarColor = "success";
            this.snackbarText = "Patient Deleted Successfully";
            this.snackbar = true;

            this.getAllPatientData();
          } else {
            this.snackbarColor = "warning";
            this.snackbarText = "Patient Deleted Failed!";
            this.snackbar = true;
          }
        })
        .catch(err => {
          this.snackbarColor = "warning";
          this.snackbarText = "Patient Deleted Failed!";
          this.snackbar = true;
          console.log(err);
        });
    },
    onClickTableRow(event) {
      console.log(event);
    },
    onClickCancel() {
      this.dialog = false;
      this.deletePointer = null;
    },
    getAllPatientData() {
      console.log(
        "Token >>>>>>>>>>>> " +
          localStorage.getItem("access_token") +
          "\n AH $HTTP >> " +
          this.$http.defaults.headers.common["Authorization"]
      );
      this.loadingTable = true;
      this.patients = [];
      this.$http
        .get("/api/patient/all")
        .then(res => {
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
              location: patient.location,
              status: patient.state,
              docID: patient.docID
            });
            this.loadingTable = false;
          });
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$store.dispatch("logout");

            console.log("I'm Here >> " + err);
          }
        });
    },
    viewPatient(docID) {
      this.$router.push("/medicalofficer/patient/" + docID);
    }
  },
  mounted() {
    this.getAllPatientData();
  }
};
</script>

<style scoped></style>
