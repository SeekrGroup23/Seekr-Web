<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View All Data Entry Officers
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
                    @click="$router.push('/admin/data_entry/add')"
                    >Add New</v-btn
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
            :items="gnData"
            :search="search"
            :loading="tableLoading"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.regNo }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.province }}</td>
              <td class="text-xs-left">{{ props.item.district }}</td>
              <td class="text-xs-left">{{ props.item.division }}</td>
              <td class="text-xs-left">{{ props.item.gnDivision }}</td>
              <td class="text-xs-center">
                <v-btn icon @click="viewGramaNiladhari(props.item)">
                  <v-icon small>
                    visibility
                  </v-icon>
                </v-btn>

                <v-btn icon @click="deleteGramaNiladhari(props.item)">
                  <v-icon small color="red">
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
      <v-dialog v-model="deleteDialog" persistent max-width="290">
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
        :timeout="snackbarTimeout"
        right
        top
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
      search: "",
      // Data Table
      tableLoading: false,
      headers: [
        {
          text: "Registration No.",
          align: "left",
          sortable: true,
          value: "regNo"
        },
        {
          text: "Name",
          align: "left",
          value: "name",
          sortable: true
        },
        { text: "Province", align: "left", value: "age", sortable: true },
        { text: "District", align: "left", value: "gender", sortable: false },
        { text: "Division", align: "left", value: "location", sortable: false },
        {
          text: "GN Division",
          align: "left",
          value: "status",
          sortable: false
        },
        { text: "Actions", value: "actions", align: "center", sortable: false }
      ],
      gnData: [],
      deleteDialog: false,
      deletePointer: "",
      // SnackBar
      snackbar: false,
      snackbarText: "",
      snackbarColor: "",
      snackbarTimeout: 2000
    };
  },
  computed: {},
  methods: {
    viewGramaNiladhari() {},
    deleteGramaNiladhari(gn) {
      this.deletePointer = gn.docID;
      this.deleteDialog = true;
    },
    onClickCancel() {
      this.deleteDialog = false;
      this.deletePointer = "";
    },
    onClickDelete() {
      this.$http
        .delete("/api/data_entry/" + this.deletePointer, {
          data: {
            lastModifiedBy: "admin"
          }
        })
        .then(res => {
          if (res.data.message == "Success") {
            this.getGNData();
            this.snackbarColor = "success";
            this.snackbarText = "Data Entry Officer Deleted Successfully";
            this.deleteDialog = false;
            this.snackbar = true;
          } else {
            this.snackbarColor = "red";
            this.snackbarText = "Data Entry Officer Deleted Failed!";
            this.snackbar = true;
            this.deleteDialog = false;
          }
        })
        .catch(err => {
          this.snackbarColor = "red";
          this.snackbarText = "Deletion Failed";
          this.snackbar = true;
          console.log(err);
        });
    },
    getGNData() {
      this.tableLoading = true;
      this.$http
        .get("/api/data_entry/")
        .then(res => {
          console.log(res.data);
          this.gnData = [];
          res.data.forEach(gn => {
            this.gnData.push({
              regNo: gn.regNo,
              name: gn.firstName + " " + gn.lastName,
              province: gn.province,
              district: gn.district,
              division: gn.division,
              gnDivision: gn.gnDivision,
              action: "",
              docID: gn.docID
            });
          });
          this.tableLoading = false;
          console.log(this.gnData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getGNData();
  }
};
</script>

<style scoped></style>
