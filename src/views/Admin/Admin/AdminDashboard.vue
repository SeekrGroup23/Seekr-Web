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
      <!-- <v-card
        router-link
        to="hospital/map"
        width="300"
        height="120"
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
      </v-card> -->
      <!-- Registerd GramaNiladhari -->
      <v-card
        router-link
        to="grama_niladhari/view"
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
                <h6 class="subheading pt-1 ">View Map</h6>
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
        class="my-2 mx-auto"
        hover
        dark
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card height="120" color="red lighten-2" dark width="100" flat>
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
                  <v-icon size="50">room</v-icon>
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
      <!-- <v-flex lg4 sm12 xs12>
        <v-card class="mx-2" height="480px" color="#C62828" dark>
          <v-card-title class="headline">
            <span class="title font-weight-light">Top Affected Areas</span>
          </v-card-title>
          <v-card-text>
            <v-container grid list-md>
              <div id="pie"></div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg8 sm12 xs12>
        <v-toolbar dark color="primary">
          <v-toolbar-title class="white--text">Important Dates</v-toolbar-title>
        </v-toolbar>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu
                  :key="event.title"
                  v-model="event.open"
                  full-width
                  offset-x
                >
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="my-event"
                      v-on="on"
                      v-html="event.title"
                    ></div>
                  </template>
                  <v-card color="grey lighten-4" min-width="350px" flat>
                    <v-toolbar color="primary" dark>
                      <v-btn icon>
                        <v-icon>edit</v-icon>
                      </v-btn>
                      <v-toolbar-title v-html="event.title"></v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-title primary-title>
                      <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="secondary">
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-layout pt-3>
              <v-flex xs3>
                <strong>19 Nov</strong>
              </v-flex>
              <v-flex>
                <strong>25 Researchers</strong>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>20 Nov</strong>
              </v-flex>
              <v-flex>
                <strong>Medical Clinic</strong>
                <div class="caption mb-2">Anuradhapura</div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-layout pt-3>
              <v-flex xs3>
                <strong>22 Nov</strong>
              </v-flex>
              <v-flex>
                <strong>Research</strong>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-layout pt-3>
              <v-flex xs3>
                <strong>25 Nov</strong>
              </v-flex>
              <v-flex>
                <strong>Finish Home Screen</strong>
                <div class="caption">Web App</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-flex> -->

      <!-- <v-flex lg3 sm6 xs12>
          <v-card color="cyan darken-3" class="white--text" height="200px" dark>
            <v-card-title primary-title class="justify-center">
              <v-icon dark x-large right >fiber_new</v-icon>
              <span class="title font-weight-light">New Divisions</span>               
            </v-card-title>
            <v-card-title class="justify-center">
              <p class="text-center display-2"><pre>       5      </pre></p>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <v-card height="500px" width="500px" dark>
            <v-card-title>
              <span class="headline">Hey</span>
            </v-card-title>
                                <v-card-text>
                      <v-container grid list-md>
                        <div id="sp"></div>
                      </v-container>
                    </v-card-text>
          </v-card>
        </v-flex> -->
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
      gramad: [123, 456, 789, 452],
      gramaPC: [],
      gramaPN: [],
      h: " ",
      sparklineData: [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46
      ],
      today: "2019-11-19",
      events: [
        {
          title: "Meeting with Minister",
          details: "Going to the beach!",
          date: "2019-11-30",
          open: false
        },
        {
          title: "Field Visit",
          details: "Going to the beach!",
          date: "2019-11-05",
          open: false
        }
      ]
    };
  },

  randomizeArray(arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    },
    patientAreaCount() {
      this.$http
        .get("/api/admin/districtpatientcount")
        .then(res => {
          //console.log(res.data[0][0]);
          this.areaCount = [];
          this.areaCount = res.data;
          var i;
          for (i = 0; i < 25; i++) {
            //this.h = this.areaCount[i][0];
            this.gramaPN.push(this.areaCount[i][0].toString());
            //console.log(this.h);
          }
          //console.log(typeof this.gramaPN[0]);
          this.gramaPN = Object.values(this.gramaPN);
          console.log(this.gramaPN);
          for (i = 0; i < 25; i++) {
            this.h = this.areaCount[i][1];
            this.gramaPC.push(this.h);
          }
          //console.log(this.gramaPN);
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
        //categories: this.gramaPN
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
      //console.log(response.data);
      this.gramaCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/patientcount").then(response => {
      //console.log(response.data);
      this.patientCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/hospitalcount").then(response => {
      //console.log(response.data);
      this.hospitalCount = response.data;
      console.log(response.data);
    });

    this.$http.get("/api/admin/donorcount").then(response => {
      //console.log(response.data);
      this.donorCount = response.data;
      console.log(response.data);
    });

    /*  this.$http.get("/api/admin/districtpatientcount").then(response => {
      //console.log(response.data);
      this.areaCount = response.data;
      this.areaCount.forEach(element => {
        this.gramaPC.push(this.areaCount(element));
        this.gramaPN.push(element);
      });
      console.log(this.areaCount);
    }); */
  }
};
</script>

<style lang="stylus" scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
