<template>
  <v-container class="pt-5 px-4" fluid>
    <v-layout>
      <v-flex>
        <!-- Row - 1 -->
        <v-layout row wrap>
          <v-flex md3 class="px-3">
            <dashCard01 title="Testing..." icon="email" value="10"></dashCard01>
          </v-flex>
          <v-flex md3 class="px-3">
            <dashCard01 title="Testing..." icon="email" value="10"></dashCard01>
          </v-flex>
          <v-flex md3 class="px-3">
            <dashCard01 title="Testing..." icon="email" value="10"></dashCard01>
          </v-flex>
          <v-flex md3 class="px-3">
            <dashCard01 title="Testing..." icon="email" value="10"></dashCard01>
          </v-flex>
        </v-layout>

        <!-- Row - 2 -->
        <v-layout class="my-5" row justify-space-between>
          <!-- <v-flex class="px-3" md3>
            <v-card> sdfsd</v-card>
          </v-flex> -->
          <v-flex class="px-3" md12>
            <v-card dark color="primary">
              <v-container class="ma-0 pa-0" fluid>
                <v-layout row>
                  <v-flex grow class="pa-3">
                    <h6 class="title">
                      Monthly Count of CKDu Patients
                    </h6>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex shrink>
                    <v-btn icon align-end>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                  <v-flex md12>
                    <v-card flat color="primary">
                      <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="1"
                        padding="16"
                        auto-draw
                        height="100"
                        show-labels
                        smooth
                      ></v-sparkline>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <!-- <v-flex class="px-3" md3>
            <v-card class="pa-0">
              <v-date-picker
                class="dataPicker"
                v-model="currDate"
                :show-current="false"
                readonly
                full-width
              ></v-date-picker>
            </v-card>
          </v-flex> -->
        </v-layout>

        <!-- Row - 3 -->
        <v-layout row>
          <v-flex>
            <div id="chart"></div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import dashCard01 from "../../components/Card_Dashboard_A.vue";
import ApexCharts from "apexcharts";

export default {
  components: {
    dashCard01: dashCard01
  },
  data: () => {
    return {
      currDate: new Date().toISOString().substr(0, 10),
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "12pm",
        "3pm",
        "6pm",
        "9pm",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ],
      value: [200, 675, 410, 390, 310, 460, 250, 240, 310, 460, 250, 240]
    };
  },
  mounted: () => {
    console.log("Dashboard Page Loaded");
    var options = {
      chart: {
        type: "line"
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }
};
</script>

<style scoped>
#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>
