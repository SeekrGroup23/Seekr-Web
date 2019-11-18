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
      <!-- Patient Table -->
      <v-flex md12>
        <v-data-table :headers="headers" :items="patients" class="elevation-1">
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
            <td class="text-md-left">
              {{ props.item.firstName }} {{ props.item.lastName }}
            </td>
            <td>
              {{ props.item.dateCreated.split("T")[0] }}
            </td>
            <!-- <td class="text-md-right">{{ props.item.fat }}</td>
            <td class="text-md-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td> -->
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
      patientsData: [],
      tableData: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "firstName"
        },
        { text: "Email", value: "email" },
        { text: "Date Joined", value: "dateJoined" }
      ],
      patients: [],
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
  mounted() {
    this.$http
      .get("/api/patient/get_all")
      .then(response => {
        // this.patientsData = response.data;
        // console.log(this.patientsData);
        this.patients = response.data;
        console.log("Success :)");
      })
      .catch(function(error) {
        console.log(error);
        console.log("Failed :(");
      });
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
