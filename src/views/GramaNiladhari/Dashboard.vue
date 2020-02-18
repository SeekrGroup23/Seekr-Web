<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Dashboard
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
      <v-card width="300" height="75" class="my-2" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="75" color="purple lighten-2" dark width="75" flat>
                <v-container>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Registered CKDu Patients</h6>
              <span class="subheading font-weight-medium">{{
                regPatientCount
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Suspected CKDu Patients -->
      <v-card width="300" height="75" class="my-2" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="75" color="indigo lighten-2" dark width="75" flat>
                <v-container fluid>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Verified CKDu Patients</h6>
              <h6 class="subheading"></h6>
              <span class="subheading font-weight-medium">{{
                verifiedPatients
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Critical Patients -->
      <v-card width="300" height="75" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="75" color="red lighten-2" dark width="75" flat>
                <v-container>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Suspected CKDu Patients</h6>
              <span class="subheading font-weight-medium">{{
                suspectedPatients
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Total Patients -->
      <v-card width="300" height="75" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="75" color="teal lighten-2" dark width="75" flat>
                <v-container>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Critical CKDu Patients</h6>
              <span class="subheading font-weight-medium">{{
                CriticalPatients
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Total Patients -->
      <v-card width="300" height="75" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="75" color="teal lighten-2" dark width="75" flat>
                <v-container>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">Pending Confirmations</h6>
              <span class="subheading font-weight-medium">{{
                pendingConfirmations
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- Total Patients -->
      <v-card width="300" height="75" class="my-2 " hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex>
              <v-card height="75" color="teal lighten-2" dark width="75" flat>
                <v-container>
                  <v-icon size="40">home</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <v-layout column justify-start>
                <h6 class="subheading">CKDu Deaths</h6>
                <span class="subheading font-weight-medium">{{
                  CriticalPatients
                }}</span>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>

    <v-divider></v-divider>
    <v-layout>
      <gmap_patients></gmap_patients>
    </v-layout>
    <v-layout> </v-layout>
  </v-container>
</template>

<script>
import gmap_patients from "../../components/Gmap_viewPatients";

export default {
  components: {
    gmap_patients: gmap_patients
  },
  data: () => {
    return {
      resData: [],
      regPatientCount: 0,
      verifiedPatients: 0,
      suspectedPatients: 0,
      CriticalPatients: 0,
      pendingConfirmations: 0,
      gnDivision: localStorage.getItem("gnDivision")
    };
  },
  created() {
    console.log(
      "From Dashboard >> " + this.$http.defaults.headers.common["Authorization"]
    );
  },
  computed: {},
  methods: {},
  async mounted() {
    console.log("gn: " + localStorage.getItem("gnDivision"));
    await this.$http
      .get("/api/patient/all/" + this.gnDivision)
      .then(res => {
        this.resData = res.data;
        console.log(this.resData);
        this.regPatientCount = res.data.length;

        res.data.forEach(patient => {
          if (patient.state == "Verified CKDu") {
            this.verifiedPatients = this.verifiedPatients + 1;
          } else if (patient.state == "Suspected CKDu") {
            this.suspectedPatients = this.suspectedPatients + 1;
          }

          if (patient.condition == "Critical") {
            this.CriticalPatients = this.CriticalPatients + 1;
          }
          if (patient.geoCordinates == "") {
            this.pendingConfirmations = this.pendingConfirmations + 1;
          }
        });
      })
      .catch(err => {
        if (err.response.status == 403) {
          this.$store.dispatch("logout");
        }
      });
  }
};
</script>

<style scoped></style>
