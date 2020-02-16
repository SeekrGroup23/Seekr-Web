<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout
      row
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-2"
    >
      <v-card width="300" height="120" class="my-2 mx-auto" hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="amber accent-4" dark width="100" flat>
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">District Report</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <button class="btn" @click="downloadDistrictPdf">
                  Download PDF
                </button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card width="300" height="120" class="my-2 mx-auto" hover dark>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="amber accent-4" dark width="100" flat>
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Province Report</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <button class="btn" @click="downloadProvincePdf">
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
      doc.autoTable(column, vm.areaCount1);
      doc.save("province.pdf");
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
        .get("/api/admin//provincepatientcountreport")
        .then(res => {
          this.areaCount1 = [];
          this.areaCount1 = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.patientDisCount();
    this.patientProCount();
  }
};
</script>
