<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout
      column
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-2"
    >
      <v-card width="300" height="80" class="my-2 mx-auto" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="80"
                color="indigo lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="40">place</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">District Report</h6>
              <v-divider></v-divider>
              <v-layout row class="mt-2">
                <button class="btn" @click="downloadDistrictPdf">
                  Download PDF
                </button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card width="300" height="80" class="my-2 mx-auto" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="80"
                color="indigo lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="40">person_pin_circle</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Province Report</h6>
              <v-divider></v-divider>
              <v-layout row class="mt-2">
                <button class="btn" @click="downloadProvincePdf">
                  Download PDF
                </button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card width="300" height="80" class="my-2 mx-auto" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="80"
                color="indigo lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="40">date_range</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Age Report</h6>
              <v-divider></v-divider>
              <v-layout row class="mt-2">
                <button class="btn" @click="downloadAgePdf">
                  Download PDF
                </button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card width="300" height="80" class="my-2 mx-auto" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="80"
                color="indigo lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="40">invert_colors</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Blood Group Report</h6>
              <v-divider></v-divider>
              <v-layout row class="mt-2">
                <button class="btn" @click="downloadBloodPdf">
                  Download PDF
                </button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import * as jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  name: "pdf",
  data() {
    return {
      areaCount: [],
      areaCount1: [],
      ageCount: [],
      bloodCount: [],
      gramaPC: [],
      gramaPN: [],
      h: " "
    };
  },
  methods: {
    downloadDistrictPdf() {
      var vm = this;
      var column = [
        { title: "District", dataKey: "district" },
        { title: "Count", dataKey: "count" }
      ];
      var doc = new jsPDF("p", "pt");
      doc.text("Ckdu Patient Count By District", 20, 20);
      doc.autoTable(column, vm.areaCount);
      doc.save("district.pdf");
    },
    downloadProvincePdf() {
      var vm = this;
      var column = [
        { title: "Province", dataKey: "province" },
        { title: "Count", dataKey: "count" }
      ];
      var doc = new jsPDF("p", "pt");
      doc.text("Ckdu Patient Count By Province", 20, 20);
      doc.autoTable(column, vm.areaCount1);
      doc.save("province.pdf");
    },
    downloadAgePdf() {
      var vm = this;
      var column = [
        { title: "Age Category", dataKey: "cat" },
        { title: "Count", dataKey: "count" }
      ];
      var doc = new jsPDF("p", "pt");
      doc.text("Ckdu Patient Count By Age", 20, 20);
      doc.autoTable(column, vm.ageCount);
      doc.save("Age.pdf");
    },
    downloadBloodPdf() {
      var vm = this;
      var column = [
        { title: "Blood Group Category", dataKey: "cat" },
        { title: "Count", dataKey: "count" }
      ];
      var doc = new jsPDF("p", "pt");
      doc.text("Ckdu Patient Count By Blood Group", 20, 20);
      doc.autoTable(column, vm.bloodCount);
      doc.save("BloodGroup.pdf");
    },
    patientDisCount() {
      this.$http
        .get("/api/admin/districtpatientcountreport")
        .then(res => {
          this.areaCount = [];
          this.areaCount = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientProCount() {
      this.$http
        .get("/api/admin/provincepatientcountreport")
        .then(res => {
          this.areaCount1 = [];
          this.areaCount1 = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientAgeCount() {
      this.$http
        .get("/api/admin/agepatientcountreport")
        .then(res => {
          this.ageCount = [];
          this.ageCount = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientBloodCount() {
      this.$http
        .get("/api/admin/bloodpatientcountreport")
        .then(res => {
          this.bloodCount = [];
          this.bloodCount = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.patientDisCount();
    this.patientProCount();
    this.patientAgeCount();
    this.patientBloodCount();
  }
};
</script>
