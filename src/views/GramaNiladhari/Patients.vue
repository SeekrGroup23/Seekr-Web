<template>
  <v-container fluid>
    <v-layout row wrap>
      <!-- Bread Crumbs -->
      <v-flex md12 class="pa-0 ma-0">
        <v-layout row class="pa-0 ma-0 pl-1">
          <v-flex grow>
            <v-breadcrumbs :items="items" class="px-0 mx-0">
              <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- Filter and Search Area -->
      <v-flex md12 class="mb-4">
        <v-layout row wrap>
          <v-flex xs12 class="pa-0 ma-0">
            <v-card class="py-2 rounded-card elevation-0 ">
              <v-container fluid>
                <v-layout column>
                  <v-flex>
                    <v-layout row class="pa-0">
                      <v-flex class="searchText" grow>
                        <v-text-field
                          class="pa-0 ma-0"
                          outline
                          clearable
                          label="Enter Search Criteria"
                          type="text"
                        >
                          <template v-slot:prepend>
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on }">
                                <v-icon v-on="on"
                                  >mdi-help-circle-outline</v-icon
                                >
                              </template>
                              I'm a tooltip
                            </v-tooltip>
                          </template>
                          <template v-slot:append>
                            <v-fade-transition leave-absolute>
                              <v-progress-circular
                                v-if="loading"
                                size="24"
                                color="info"
                                indeterminate
                              ></v-progress-circular>
                              <img
                                v-else
                                width="24"
                                height="24"
                                src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                                alt=""
                              />
                            </v-fade-transition>
                          </template>
                        </v-text-field>
                      </v-flex>
                      <v-flex shrink class="searchBtn">
                        <v-btn large color="primary">Search</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex>
                    <v-expansion-panel class="elavation-0">
                      <v-expansion-panel-content>
                        <template v-slot:header>
                          <div>Filter Options</div>
                        </template>
                        <v-card>
                          <v-container fluid>
                            <v-layout row>
                              <v-flex>
                                <v-checkbox
                                  v-model="checkbox"
                                  :label="`Checkbox 1: ${checkbox.toString()}`"
                                ></v-checkbox>
                                <v-radio-group v-model="radioGroup">
                                  <v-radio
                                    v-for="n in 3"
                                    :key="n"
                                    :label="`Radio ${n}`"
                                    :value="n"
                                  ></v-radio>
                                </v-radio-group>
                                <v-switch
                                  v-model="switch1"
                                  :label="`Switch 1: ${switch1.toString()}`"
                                ></v-switch>
                              </v-flex> </v-layout
                          ></v-container>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md12>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <v-progress-linear
            v-slot:progress
            color="blue"
            indeterminate
          ></v-progress-linear>
          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">
                edit
              </v-icon>
              <v-icon small @click="deleteItem(props.item)">
                delete
              </v-icon>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Email", value: "email" },
        { text: "Gender", value: "gender" },
        { text: "", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Action", value: "iron" }
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
      ],
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "CKDu Patients",
          disabled: false,
          href: "breadcrumbs_link_1"
        },
        {
          text: "View All",
          disabled: true,
          href: "breadcrumbs_link_2"
        }
      ],
      checkbox: true,
      radioGroup: 1,
      switch1: true
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.rounded-card {
  border-radius: 5px;
}

.searchText {
  margin-left: -10px;
}

.searchBtn {
  margin-right: -10px;
}
</style>
