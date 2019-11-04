<template>
  <v-container full-height fluid grid-list->
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4 id="tb1">
        <v-card>
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Registerd Patients</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="800px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">Graph</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Patitens</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid list-md>
                    <div id="chart"></div>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm6 md4 id="tb2">
        <v-card>
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Registerd Donors</v-toolbar-title>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data: () => ({
    dialog:false,
chartOptionsBar:{
        xAxis:{
          data:['A','B','C']
        },
        yAxis:{
          type: 'value'
        },
        series:[
          {
            type: 'bar',
            data: [63,72,89]
          }
        ]
      },
      headers: [
          {
            text: 'District',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Registerd Users', value: 'rusers' },
          { text: 'Male', value: 'male' },
          { text: 'Female', value: 'female' }
        ],
        desserts: [
          {
            name: 'Anuradhapura',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Polonnaruwa',
            calories: 237,
            fat: 9.0,
            carbs: 37
          },
          {
            name: 'Trincomalee',
            calories: 262,
            fat: 16.0,
            carbs: 23
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
    }),
    close () {
      this.dialog = false
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
          data: [159, 237,279]
        }
      ],
      xaxis: {
        categories: ['Anuradhapura','Polonnaruwa','Trincomalee']
      }
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
  
    
  }
</script>

<style scoped>
#tb1{
  margin-right: 200px;
  margin-bottom: 20px;
  
}
#tb1data{
  color: blue
}
#tb2{
  margin-right: 60px;
  margin-bottom: 20px;
}
#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>