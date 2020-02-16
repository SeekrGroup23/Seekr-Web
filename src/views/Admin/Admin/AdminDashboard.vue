<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout
      row
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-2"
    >
      <!-- Suspected CKDu Patients Count -->
      <v-card
        router-link
        to="patients/view"
        width="300"
        height="120"
        color="amber accent-4"
        class="my-2 mx-auto"
        hover
        dark
      >
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
              <h6 class="subheading">Registerd Patients</h6>
              <span class="subheading font-weight-medium">{{
                patientCount
              }}</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Hospitals -->
      <v-card
        router-link
        to="hospital/map"
        width="300"
        height="120"
        color="green darken-3"
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="green darken-3" dark width="100" flat>
                <v-container>
                  <v-icon size="50">local_hospital</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Registerd Hospitals</h6>
              <span class="subheading font-weight-medium">{{
                hospitalCount
              }}</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Registerd GramaNiladhari -->
      <v-card
        router-link
        to="grama_niladhari/view"
        width="300"
        height="120"
        color="indigo darken-4"
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="120"
                color="indigo darken-4"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Registerd Grama Niladhari</h6>
              <span class="subheading font-weight-medium">{{
                gramaCount
              }}</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View All</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Donations -->
      <v-card
        router-link
        to="editgrama"
        width="300"
        height="120"
        color="cyan darken-4"
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="cyan darken-4" dark width="100" flat>
                <v-container>
                  <v-icon size="50">monetization_on</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Total Donors</h6>
              <span class="subheading font-weight-medium">{{
                donorCount
              }}</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- Analytics -->
      <v-card
        router-link
        to="summary/charts"
        width="300"
        height="120"
        color="lime darken-4"
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="lime darken-4" dark width="100" flat>
                <v-container>
                  <v-icon size="50">trending_up</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Analytics</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Charts</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <v-card
        router-link
        to="summary/report"
        width="300"
        height="120"
        color="red lighten-2"
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="red lighten-2" dark width="100" flat>
                <v-container>
                  <v-icon size="50">report</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Generate a Report</h6>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 "></h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
    <v-layout
      row
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-0"
    >
      <v-flex lg12 sm12 xs12>
        <v-card height="500" class="my-4 mx-2">
          <v-card-title class="headline">
            <span class="title font-weight-light">Top 5 Patient Areas</span>
          </v-card-title>
          <v-card-text>
            <v-container grid list-md>
              <div id="chart"></div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      gramaCount: 0,
      patientCount: 0,
      hospitalCount: 0,
      donorCount: 0,
      areaCount: [],
      gramaPC: [],
      gramaPN: [],
      h: " "
    };
  },
  methods: {
    open(event) {
      alert(event.title);
    },
    patientAreaCount() {
      this.$http
        .get("/api/admin/districtpatientcount")
        .then(res => {
          this.areaCount = [];
          this.areaCount = res.data;
          var i;
          for (i = 0; i < 25; i++) {
            this.gramaPN.push(this.areaCount[i][0].toString());
          }
          this.gramaPN = Object.values(this.gramaPN);
          console.log(this.gramaPN);
          for (i = 0; i < 25; i++) {
            this.h = this.areaCount[i][1];
            this.gramaPC.push(this.h);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.patientAreaCount();
  },

  // data for the sparklines that appear below header area

  mounted() {
    var spark2 = {
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "straight"
      },
      fill: {
        opacity: 0.3
      },
      series: [
        {
          data: this.gramad
        }
      ],
      yaxis: {
        min: 0
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$235,312",
        offsetX: 0,
        style: {
          fontSize: "24px",
          cssClass: "apexcharts-yaxis-title"
        }
      },
      subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
          fontSize: "14px",
          cssClass: "apexcharts-yaxis-title"
        }
      }
    };
    var options = {
      chart: {
        type: "line",
        height: 350,
        shadow: {
          enabled: false,
          color: "#bbb",
          top: 3,
          left: 2,
          blur: 3,
          opacity: 1
        }
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      series: [
        {
          name: "patients",
          data: this.gramaPC
        }
      ],
      xaxis: {
        categories: [
          "Ampara",
          "Anuradhapura",
          "Badulla",
          "Batticaloa",
          "Colombo",
          "Galle",
          "Gampaha",
          "Hambantota",
          "Jaffna",
          "Kalutara",
          "Kandy",
          "Kegalle",
          "Kilinochchi",
          "Kurunegala",
          "Mannar",
          "Matale",
          "Matara",
          "Monaragala",
          "Mullaitivu",
          "Nuwara Eliya",
          "Polonnaruwa",
          "Puttalam",
          "Ratnapura",
          "Trincomalee",
          "Vavuniya"
        ]
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 4,
        opacity: 0.9,
        colors: ["#FFA41B"],
        strokeColor: "#fff",
        strokeWidth: 2,

        hover: {
          size: 10
        }
      },
      theme: {
        mode: "dark"
      }
    };
    var pie = {
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      series: [44, 55, 41, 17, 15],
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
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
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    var sp = new ApexCharts(document.querySelector("#sp"), spark2);
    sp.render();
    var piec = new ApexCharts(document.querySelector("#pie"), pie);
    // eslint-disable-next-line no-unused-vars
    const paper = chart.paper();
    piec.render();

    this.$http.get("/api/admin/gramacount").then(response => {
      this.gramaCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/patientcount").then(response => {
      this.patientCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/hospitalcount").then(response => {
      this.hospitalCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/donorcount").then(response => {
      this.donorCount = response.data;
      console.log(response.data);
    });
  }
};
</script>

<style lang="stylus" scoped></style>
