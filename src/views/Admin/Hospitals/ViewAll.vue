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
                    >New Patient</v-btn
                  >
                </v-flex>

                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-btn flat icon><v-icon>more_vert</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table :headers="headers" :items="hospitals" :search="search">
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
                <v-btn icon>
                  <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                  </v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon small @click="deleteItem(props.item)">
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
      <v-dialog v-model="mapDialog" max-width="500" @change="alert('sdfsdfsd')">
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
      search: "",
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
    }
  },
  created() {
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
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
