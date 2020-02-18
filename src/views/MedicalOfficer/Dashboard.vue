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
              <span class="subheading font-weight-medium">{{ verified }}</span>
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
              <span class="subheading font-weight-medium">{{ suspected }}</span>
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
              <span class="subheading font-weight-medium">{{ critical }}</span>
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
              <span class="subheading font-weight-medium">{{ total }}</span>
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

    <v-layout column>
      <v-flex class="mb-4">
        <v-card class="px-4 py-2" hover>
          <apexcharts
            height="350"
            type="line"
            :options="chartOptions_line"
            :series="series"
          ></apexcharts>
        </v-card>
      </v-flex>

      <v-flex class="pb-4">
        <v-card class="px-4 py-2" hover>
          <apexcharts
            height="350"
            type="bar"
            :options="chartOptions_bar"
            :series="series_1"
          ></apexcharts>
        </v-card>
      </v-flex>

      <v-flex class="pb-4">
        <v-card class="px-4 py-2" hover>
          <apexcharts
            type="bar"
            height="430"
            :options="chartOptions_age"
            :series="series_2"
          ></apexcharts>
        </v-card>
      </v-flex>

      <v-flex class="pb-4">
        <v-layout row wrap>
          <v-flex class="pr-2">
            <v-card class="px-4 py-2" hover>
              <apexcharts
                type="pie"
                width="380"
                :options="chartOptions_3"
                :series="series_3"
              ></apexcharts>
            </v-card>
          </v-flex>
          <v-flex class="pl-2">
            <v-card class="px-4 py-2" hover>
              <apexcharts
                type="pie"
                width="380"
                :options="chartOptions_4"
                :series="series_4"
              ></apexcharts>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pb-4">
        <v-card class="px-4 py-2" hover>
          <apexcharts
            type="bar"
            height="430"
            :options="chartOptions_5"
            :series="series_5"
          ></apexcharts>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexcharts: VueApexCharts
  },
  data: () => {
    return {
      verified: 0,
      suspected: 0,
      critical: 0,
      total: 0,
      chartOptions_line: {
        chart: {
          id: "basic-line",
          type: "line",
          dropShadow: {
            // enabled: true,
            // color: "#000",
            // top: 18,
            // left: 7,
            // blur: 10,
            // opacity: 0.2
          }
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true
        },
        title: {
          text:
            "Year Wise - Registered Patient Count Vs Verifed CKDu Patients ",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: [],
          title: {
            text: "Year"
          }
        },
        yaxis: {
          title: {
            text: "Patient Count"
          }
        },
        toolbar: {
          show: false
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        {
          name: "Registered Patients",
          data: []
        },
        {
          name: "Verified CKDu Patients",
          data: []
        }
      ],
      series_1: [
        {
          name: "Registered Patients",
          data: []
        }
      ],
      chartOptions_bar: {
        chart: {
          id: "basic-bar"
        },
        title: {
          text: "Year Wise - Registered Patient Count for CKD/CKDu Clinics ",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [],
          title: {
            text: "Year"
          }
        },
        yaxis: {
          title: {
            text: "Patient Count"
          }
        }
      },
      series_2: [
        {
          name: "Male",
          data: []
        },
        {
          name: "Female",
          data: []
        }
      ],
      chartOptions_age: {
        chart: {
          type: "bar",
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },

        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        title: {
          text: "Gender Vs Age Groups of CKDu Patients (Verified CKDu) ",
          align: "left"
        },
        xaxis: {
          categories: ["Children", "Youth", "Adults", "Seniors"]
        }
      },
      series_3: [],
      chartOptions_3: {
        chart: {
          width: 380,
          type: "pie"
        },
        title: {
          text: "CKDu Patients Age Groups",
          align: "left"
        },
        labels: ["Children", "Youth", "Adults", "Seniors"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      series_4: [],
      chartOptions_4: {
        chart: {
          width: 380,
          type: "pie"
        },
        title: {
          text: "CKDu Patients Gender Propotion",
          align: "left"
        },
        labels: ["Male", "Female"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      series_5: [
        {
          name: "Registered Patients",
          data: []
        }
      ],
      chartOptions_5: {
        chart: {
          id: "basic-bar"
        },
        title: {
          text:
            "Year Wise - Varified CKDu Patients' Blood Groups Distribution ",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ["AB+", "A+", "B+", "O+", "AB-", "A-", "B-", "O-"],
          title: {
            text: "Blood Group"
          }
        },
        yaxis: {
          title: {
            text: "Patient Count"
          }
        }
      }
    };
  },
  created() {
    console.log(
      "From MO Dashboard >> " +
        this.$http.defaults.headers.common["Authorization"]
    );
  },
  computed: {},
  methods: {
    getPatientAnalyticsYearWise() {
      this.$http
        .get("/api/analytics/registered_patients_year_wise")
        .then(res => {
          console.log(res.data);
          var i = 0;
          res.data.years.forEach(year => {
            console.log(year);
            this.chartOptions_line.xaxis.categories.push(parseInt(year));
            this.chartOptions_bar.xaxis.categories.push(parseInt(year));

            i = i + 1;
          });
          this.series[0].data = res.data.count;
          this.series[1].data = res.data.countVerified;
          this.series_1[0].data = res.data.count;

          window.dispatchEvent(new Event("resize"));
        })
        .catch();
    },
    getPatientAnalyticsAgeGroupGender() {
      this.$http
        .get("/api/analytics/patients_agegroup_gender")
        .then(res => {
          console.log(">>>>>>>>>>>>>>>>>>>>>");

          // this.chartOptions_age.xaxis.categories = res.data.ageGroups;
          this.series_2[0].data = res.data.maleCount;
          this.series_2[1].data = res.data.femaleCount;
          console.log(res.data.totalCount);
          // var arr = [];
          res.data.totalCount.forEach(el => {
            this.series_3.push(parseInt(el));
          });

          res.data.maleFemaleCount.forEach(el => {
            this.series_4.push(parseInt(el));
          });

          window.dispatchEvent(new Event("resize"));
        })
        .catch();
    },
    getPatientAnalyticsBloodGroups() {
      this.$http
        .get("/api/analytics/patients_blood_groups")
        .then(res => {
          console.log(res.data);
          res.data.bloodGroupsCount.forEach(el => {
            this.series_5[0].data.push(parseInt(el));
          });

          window.dispatchEvent(new Event("resize"));
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPatientAnalyticsPatientCounts() {
      this.$http
        .get("/api/analytics/patients_counts")
        .then(res => {
          console.log(res.data);
          this.verified = res.data.verified;
          this.suspected = res.data.suspected;
          this.critical = res.data.critical;
          this.total = res.data.total;

          window.dispatchEvent(new Event("resize"));
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getPatientAnalyticsPatientCounts();
    this.getPatientAnalyticsYearWise();
    this.getPatientAnalyticsAgeGroupGender();
    this.getPatientAnalyticsBloodGroups();
  }
};
</script>

<style scoped></style>
