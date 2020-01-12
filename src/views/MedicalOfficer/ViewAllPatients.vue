<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Patients
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
      <v-flex>
        <v-card>
          <v-card-title>
            <v-container fluid class="pa-0 ma-0">
              <v-layout row wrap class="pa-0 ma-0">
                <v-flex md6 xs10 sm6>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex md3> </v-flex>
                <v-flex shrink align-self-end md2 class="pl-5">
                  <v-btn
                    color="primary"
                    class="hidden-sm-and-down"
                    @click="$router.push('/medicalofficer/add_patient')"
                    >New Patient</v-btn
                  >
                </v-flex>

                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-btn flat icon><v-icon>more_vert</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
            <template v-slot:no-results>
              <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>

      <v-btn
        fab
        dark
        color="primary"
        top
        bottom
        right
        fixed
        class="hidden-md-and-up"
      >
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
