<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View All Data Entry Officers
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
              <td class="text-xs-left">{{ props.item.firstName }}</td>
              <td class="text-xs-left">{{ props.item.lastName }}</td>
              <td class="text-xs-left">{{ props.item.age }}</td>
              <td class="text-xs-left">{{ props.item.gender }}</td>
              <td class="text-xs-left">{{ props.item.location }}</td>
              <td class="text-xs-left">{{ props.item.status }}</td>
              <td class="text-xs-center">
                <v-btn icon>
                  <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                  </v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon small @click="deleteItem(props.item)">
                    delete
                  </v-icon>
                </v-btn>
              </td>
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
          text: "First Name",
          align: "left",
          sortable: true,
          value: "firstName"
        },
        {
          text: "Last Name",
          align: "left",
          value: "lastName",
          sortable: true
        },
        { text: "Age", align: "left", value: "age", sortable: true },
        { text: "Gender", align: "left", value: "gender", sortable: false },
        { text: "Location", align: "left", value: "location", sortable: false },
        { text: "Status", align: "left", value: "status", sortable: false },
        { text: "Actions", value: "actions", align: "center", sortable: false }
      ],
      desserts: [
        {
          firstName: "Frozensdfsdfsdf",
          lastName: "sdfsdfsddsfsdfsd",
          gender: "Male",
          age: 6.0,
          location: 24,
          status: "General",
          actions: " "
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
