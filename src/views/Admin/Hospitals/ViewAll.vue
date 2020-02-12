<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View Hospitals
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
                    >Add New</v-btn
                  >
                </v-flex>

                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-menu
                    left
                    origin="center center"
                    transition="scale-transition"
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on">
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </template>

                    <v-list dense>
                      <v-list-tile>
                        <v-list-tile-title>Dark Mode</v-list-tile-title>

                        <v-list-tile-action class="pl-3">
                          <v-switch v-model="isDark" color="primary"></v-switch>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                  <!-- <v-btn flat icon><v-icon>more_vert</v-icon></v-btn> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="hospitals"
            :search="search"
            :loading="tableLoading"
            :dark="isDark"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.registration_no }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.category }}</td>
              <td class="text-xs-left">{{ props.item.province }}</td>
              <td class="text-xs-left">{{ props.item.district }}</td>
              <!-- <td class="text-xs-left">{{ props.item.map }}</td> -->
              <td class="text-xs-left">
                <v-btn
                  small
                  color="secondary"
                  dark
                  @click.stop="showLocationInMap(props.item)"
                >
                  View In Map
                </v-btn>
              </td>

              <td class="text-xs-center">
                <v-btn icon @click="editItem(props.item)">
                  <v-icon small class="">
                    edit
                  </v-icon>
                </v-btn>

                <v-btn icon @click="deleteItem(props.item)">
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
    <v-layout>
      <v-dialog v-model="mapDialog" max-width="500">
        <v-card>
          <popUpMap :geoData="geoData"></popUpMap>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import popUpMap from "../../../components/Gmap_viewHospital";
export default {
  components: {
    popUpMap
  },
  data: () => {
    return {
      // Data Table
      search: "",
      tableLoading: false,
      isDark: false,
      headers: [
        {
          text: "Registration No.",
          align: "left",
          sortable: true,
          value: "registration_no"
        },
        {
          text: "Name",
          align: "left",
          value: "name",
          sortable: true
        },
        { text: "Category", align: "left", value: "category", sortable: true },
        { text: "Province", align: "left", value: "province", sortable: false },
        { text: "District", align: "left", value: "district", sortable: false },
        { text: "Location", align: "left", value: "location", sortable: false },
        { text: "Actions", value: "actions", align: "center", sortable: false }
      ],
      hospitals: [],
      hospital: "",
      mapDialog: false,
      geoData: null
    };
  },
  computed: {},
  methods: {
    showLocationInMap(hospital) {
      this.mapDialog = true;
      this.geoData = hospital;
      // console.log(this.geoCordinates);
    },
    getHospitalData() {
      this.tableLoading = true;
      // Get all Hospital Data
      this.$http
        .get("/api/hospital")
        .then(res => {
          // console.log(res.data);
          // this.hospitals = res.data;

          res.data.forEach(hospital => {
            this.hospitals.push({
              registration_no: hospital.registration_no,
              name: hospital.name,
              province: hospital.province,
              district: hospital.district,
              docID: hospital.docID,
              category: hospital.category,
              geoCordinates: hospital.geoCordinates
            });
          });
          this.tableLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getHospitalData();
  }
};
</script>

<style scoped></style>
