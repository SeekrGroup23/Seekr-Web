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
          <v-spacer></v-spacer>
          <v-btn @click="dialog01 = true" small color="primary"
            >View in Table</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="chart"></div>
          </v-container>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>

      <v-card height="500" class="my-2 mx-auto">
        <v-card-title class="headline">
          <span class="title font-weight-light"
            >Patient Distribution (Province)
          </span>
          <v-spacer></v-spacer>
          <v-btn @click="dialog02 = true" small color="primary"
            >View in Table</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="pie"></div>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card height="500" class="my-2 mx-auto">
        <v-card-title class="headline">
          <span class="title font-weight-light"
            >Patient Distribution (Age)
          </span>
          <v-spacer></v-spacer>
          <v-btn @click="dialog03 = true" small color="primary"
            >View in Table</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="bar"></div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-layoyt>
    <v-layout>
      <v-dialog v-model="dialog01" max-width="800">
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
      </v-dialog>
    </v-layout>
    <v-layout>
      <v-dialog v-model="dialog02" max-width="800">
        <v-card class="my-2 mx-auto">
          <v-spacer>
            Province Distribution
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search1"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-spacer>
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
      </v-dialog>
    </v-layout>
    <v-layout>
      <v-dialog v-model="dialog03" max-width="800">
        <v-card class="my-2 mx-auto">
          <v-spacer>
            Patient Distribution (Age)
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search1"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-spacer>
          <v-data-table :headers="headers3" :items="ageCount" :search="search">
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
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import ApexCharts from "apexcharts";
//import Province_chart from "../../../components/ProvincePatient";

export default {
  data() {
    return {
      districtPatientCount: [],
      districtNames: [],
      provincePatientCount: [],
      provinceNames: [],
      districtCount: [],
      provinceCount: [],
      agePatientCount: [],
      ageNames: [],
      ageCount: [],
      dialog01: false,
      dialog02: false,
      dialog03: false,
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
      ],
      headers3: [
        {
          text: "Age Category",
          align: "left",
          sortable: true,
          value: "age"
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
          //console.log(this.districtCount);
          var i;
          for (i = 0; i < 25; i++) {
            //this.h = this.districtCount[i][0];
            this.districtNames.push(this.districtCount[i][0].toString());
            //console.log(this.h);
          }
          //console.log(typeof this.districtNames[0]);
          this.districtNames = Object.values(this.districtNames);
          //console.log(this.districtNames);
          for (i = 0; i < 25; i++) {
            this.h = this.districtCount[i][1];
            this.districtPatientCount.push(this.h);
          }
          //console.log(this.districtPatientCount);
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientprovinceCount() {
      this.$http
        .get("/api/admin/provincepatientcount")
        .then(res => {
          //console.log(res.data[0][0]);
          this.provinceCount = [];
          this.provinceCount = res.data;
          //console.log(this.provinceCount);
          var l;
          for (l = 0; l < 9; l++) {
            //this.h = this.districtCount[i][0];
            this.provinceNames.push(this.provinceCount[l][0].toString());
            //console.log(this.h);
          }
          //console.log(this.provincetNames);
          this.provinceNames = Object.values(this.provinceNames);
          //console.log(this.provinceNames);
          for (l = 0; l < 8; l++) {
            this.h = this.provinceCount[l][1];
            this.provincePatientCount.push(this.h);
          }
          //console.log(this.provincePatientCount);
        })
        .catch(err => {
          console.log(err);
        });
    },
    patientAgeCount() {
      this.$http
        .get("/api/admin/patient_age_bar_plot")
        .then(res => {
          console.log(res.data);
          this.ageCount = [];
          this.ageCount = res.data;
          //console.log(this.ageCount);
          var l;
          for (l = 0; l < 4; l++) {
            //this.h = this.districtCount[i][0];
            this.ageNames.push(this.ageCount[l][0].toString());
            //console.log(this.h);
          }
          //console.log(this.provincetNames);
          this.ageNames = Object.values(this.ageNames);
          for (l = 0; l < 4; l++) {
            this.h = this.ageCount[l][1];
            this.agePatientCount.push(this.h);
          }
          console.log(this.agePatientCount);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.patientdistrictCount();
    this.patientprovinceCount();
    this.patientAgeCount();
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
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          data: this.agePatientCount
        }
      ],
      xaxis: {
        //categories: this.districtNames
        categories: ["Children", "Youth", "Adults", "Senior"]
      }
    };
    var pie = {
      chart: {
        width: 400,
        type: "pie"
      },
      dataLabels: {
        enabled: true
      },
      series: this.provincePatientCount,
      //series: [10, 20,30,40,50,60,70,80,90],
      labels: [
        "Western",
        "Eastern",
        "Southern",
        "Nothern",
        "Uva",
        "North-Central",
        "Sabaragamuwa",
        "Central",
        "North-Western"
      ],
      //names: this.districtNames,
      fill: {
        type: "gradient"
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
    var chart1 = new ApexCharts(document.querySelector("#bar"), opt1);
    chart.render();
    chart1.render();
    var pie1 = new ApexCharts(document.querySelector("#pie"), pie);
    // eslint-disable-next-line no-unused-vars
    const paper = chart.paper();
    pie1.render();
  }
};
</script>
