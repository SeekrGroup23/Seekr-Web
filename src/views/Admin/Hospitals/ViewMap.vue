<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View In Map
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
      <!-- Verified CKDu Patients -->
      <v-card width="300" height="100" class="my-2" hover>
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
                  <v-icon size="50">home</v-icon>
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
      <v-card width="300" height="100" class="my-2" hover>
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
                  <v-icon size="50">home</v-icon>
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
      <v-card width="300" height="100" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" color="red lighten-2" dark width="100" flat>
                <v-container>
                  <v-icon size="50">home</v-icon>
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

      <!-- Total Patients -->
      <v-card width="300" height="100" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="100" color="teal lighten-2" dark width="100" flat>
                <v-container>
                  <v-icon size="50">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Total CKDu Patients</h6>
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

    <v-layout>
      <gmap_hospitals></gmap_hospitals>
    </v-layout>
  </v-container>
</template>

<script>
import gmap_hospitals from "../../../components/Gmap_hospitals";
export default {
  components: {
    gmap_hospitals
  },
  data: () => {
    return {};
  },
  async mounted() {},
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
