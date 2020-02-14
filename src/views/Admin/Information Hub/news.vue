<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Information
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
                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-btn flat icon><v-icon>more_vert</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table :headers="headers" :items="Information" :search="search">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.Author }}</td>
              <td class="text-xs-left">{{ props.item.Tittle }}</td>
              <td class="text-xs-left">{{ props.item.Information }}</td>
              <td class="text-xs-left">{{ props.item.DueDate }}</td>
              
              <td class="text-xs-center">
                <v-btn icon flat color="secondary" dark>
                  <v-icon class="" @click="viewInformation(props.item)">
                    visibility
                  </v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon @click="deleteInformation(props.item.docID)" color="red">
                    delete
                  </v-icon>
                </v-btn>
              </td>
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
      headers: [
        {
          text: "Author",
          align: "left",
          sortable: true,
          value: "Author"
        },
        {
          text: "Tittle",
          align: "left",
          value: "Tittle",
          sortable: true
        },
        
        { text: "Information", align: "left", value: "Informaion", sortable: false },
        { text: "DueDate", align: "left", value: "DueDate", sortable: false },
        
      ],
      Information: []
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
    deleteInformation(docID) {
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
            this.snackbarText = "Information Deleted Successfully";
            this.snackbar = true;

            this.getAllInformationData();
          } else {
            this.snackbarColor = "warning";
            this.snackbarText = "Information Deleted Failed!";
            this.snackbar = true;
          }
        })
        .catch(err => {
          this.snackbarColor = "warning";
          this.snackbarText = "Information Deleted Failed!";
          this.snackbar = true;
          console.log(err);
        });
    },
    onClickCancel() {
      this.dialog = false;
      this.deletePointer = null;
    },
    getAllInformationData() {
      this.Information = [];
      this.$http
        .get("/api/patient/all")
        .then(res => {
          if (res.data == "") {
            this.Information = [];
          }
          var tempArray = res.data;

          tempArray.forEach(Information => {
            this.Information.push({
              Author: Information.Author,
              Tittle: Information.Tittle,
              age: this.getAge(patient.dob),
              location: Information.Information,
              
              docID: Information.docID
            });
          });
        })
        .catch(err => {
          console.log("Error" + err);
        });
    }
  },
  mounted() {
    this.getAllInformationData();
  }
};
</script>

<style scoped></style>
