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
            >Patient Distribution (Province)
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid list-md>
            <div id="ch1"></div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-layoyt>
  </v-container>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      provincePatientCount: [],
      provinceNames: [],
      provinceCount: [],
      h: " "
    };
  },

  methods: {
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
    this.patientprovinceCount();
  },

  mounted() {
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
    var chart1 = new ApexCharts(document.querySelector("#ch1"), opt1);
    chart1.render();

  }
};
</script>
