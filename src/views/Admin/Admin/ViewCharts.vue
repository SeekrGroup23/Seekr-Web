<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layoyt
      row
      wrap
      justify-space-between
      align-content-start
      class="py-0 px-0"
    >
      <v-card height="500" class="my-2 mx-auto">
        <v-card-title class="headline">
          <span class="title font-weight-light"
            >Patient Distribution (Districts)
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="chart"></div>
          </v-container>
        </v-card-text>
      </v-card>

      <v-card class="my-2 mx-auto">
        <v-card-title>
          District Distribution
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="districtCount"
          :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item[0] }}</td>
            <td class="text-xs-left">{{ props.item[1] }}</td>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
      <v-card height="500" class="my-2 mx-auto">
        <v-card-title class="headline">
          <span class="title font-weight-light"
            >Patient Distribution (Province)
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="ch1"></div>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card class="my-2 mx-auto">
        <v-card-title>
          Province Distribution
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search1"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers1"
          :items="provinceCount"
          :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item[0] }}</td>
            <td class="text-xs-left">{{ props.item[1] }}</td>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
    </v-layoyt>
  </v-container>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      districtPatientCount: [],
      districtNames: [],
      provincePatientCount: [],
      provinceNames: [],
      districtCount: [],
      provinceCount: [],
      h: " ",
      search: "",
      search1: "",
      headers: [
        {
          text: "District",
          align: "left",
          sortable: true,
          value: "district"
        },
        {
          text: "Count",
          align: "left",
          value: "count",
          sortable: true
        }
      ],
      headers1: [
        {
          text: "Province",
          align: "left",
          sortable: true,
          value: "district"
        },
        {
          text: "Count",
          align: "left",
          value: "count",
          sortable: true
        }
      ]
    };
  },

  methods: {
    patientdistrictCount() {
      this.$http
        .get("/api/admin/districtpatientcount")
        .then(res => {
          //console.log(res.data[0][0]);
          this.districtCount = [];
          this.districtCount = res.data;
          var i;
          for (i = 0; i < 25; i++) {
            //this.h = this.districtCount[i][0];
            this.districtNames.push(this.districtCount[i][0].toString());
            //console.log(this.h);
          }
          //console.log(typeof this.districtNames[0]);
          this.districtNames = Object.values(this.districtNames);
          console.log(this.districtNames);
          for (i = 0; i < 25; i++) {
            this.h = this.districtCount[i][1];
            this.districtPatientCount.push(this.h);
          }
          //console.log(this.districtNames);
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientprovinceCount() {
      this.$http
        .get("/api/admin/provincePatientCount")
        .then(res => {
          //console.log(res.data[0][0]);
          this.provinceCount = [];
          this.provinceCount = res.data;
          var i;
          for (i = 0; i < 9; i++) {
            //this.h = this.districtCount[i][0];
            this.provincetNames.push(this.provinceCount[i][0].toString());
            //console.log(this.h);
          }
          //console.log(typeof this.districtNames[0]);
          this.provinceNames = Object.values(this.provinceNames);
          console.log(this.provinceNames);
          for (i = 0; i < 9; i++) {
            this.h = this.provinceCount[i][1];
            this.provincePatientCount.push(this.h);
          }
          //console.log(this.districtNames);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.patientdistrictCount();
    this.patientprovinceCount();
  },

  mounted() {
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
          data: this.districtPatientCount
        }
      ],
      xaxis: {
        //categories: this.districtNames
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
    var opt1 = {
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
          name: "patient",
          data: this.provincePatientCount
        }
      ],
      xaxis: {
        //categories: this.districtNames
        categories: [
          "Western",
          "Eastern",
          "Southern",
          "Nothern",
          "Uva",
          "North-Central",
          "Sabaragamuwa",
          "Central",
          "North-Western"
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
    /* var pie = {
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      series: this.districtPatientCount,
      names: this.districtNames,
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.names[opts.namesIndex];
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
    }; */
    var chart = new ApexCharts(document.querySelector("#chart"), options)
    var chart1 = new ApexCharts(document.querySelector("#ch1"), opt1);
    chart.render();
    chart1.render();
    /* var pie1 = new ApexCharts(document.querySelector("#pie"), pie);
    // eslint-disable-next-line no-unused-vars
    const paper = chart.paper();
    pie1.render(); */
  }
};
</script>
