<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout
      row
      justify-space-between
      align-content-start
      class="py-0 px-2"
      wrap
    >
      <!-- Verified CKDu Patients -->
      <v-card width="300" height="100" class="my-2 mx-auto" hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="100"
                color="purple lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Verifed CKDu Patients</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Suspected CKDu Patients -->
      <v-card width="300" height="100" class="my-2 mx-auto" hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card
                height="100"
                color="indigo lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Suspected CKDu Patients</h6>
              <h6 class="subheading"></h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Critical Patients -->
      <v-card width="300" height="100" class="my-2 mx-auto" hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" color="red lighten-2" dark width="100" flat>
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Critical CKDu Patients</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Critical Areas -->
      <v-card
        router-link
        to="/gramaniladhari/patientlocation"
        width="300"
        height="100"
        class="my-2 mx-auto "
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" color="red lighten-2" dark width="100" flat>
                <v-container>
                  <v-icon size="50">room</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-1">
              <h6 class="subheading">Criticl Areas</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1">View Map</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Hospitals -->
      <v-card width="300" height="100" class="my-2 mx-auto " hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" color="green darken-3" dark width="100" flat>
                <v-container>
                  <v-icon size="50">local_hospital</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Near Hospitals</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Map</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Total Deaths -->
      <v-card width="300" height="100" class="my-2 mx-auto " hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" dark width="100" flat>
                <v-container>
                  <v-icon size="50">trending_down</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Total Deaths</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
    <v-divider></v-divider>
    <v-layout
      row
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-0"
    >
      <v-card width="300" height="380" class="my-2 mx-auto " hover dark>
      </v-card>
      <v-card width="300" height="380" class="my-2 mx-auto " hover dark>
      </v-card>
      <v-card width="300" height="380" class="my-2 mx-auto " hover dark>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
