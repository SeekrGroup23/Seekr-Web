<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Medical Officers
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
                    @click="$router.push('/admin/patients/add')"
                    >New Patient</v-btn
                  >
                </v-flex>

                <v-flex shrink xs2 md1 class="pl-5 align-self-end">
                  <v-btn flat icon><v-icon>more_vert</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="medicalOfficers"
            :search="search"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">
                {{ props.item.doctorRegistrationNo }}
              </td>

              <td class="text-xs-left">{{ props.item.firstName }}</td>
              <td class="text-xs-left">{{ props.item.lastName }}</td>
              <td class="text-xs-left">
                {{ props.item.currentWorking_hospitalName }}
              </td>
              <td class="text-xs-left">{{ props.item.specialty }}</td>
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
          text: "Registration No.",
          align: "left",
          sortable: false,
          value: "doctorRegistrationNo"
        },
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
        {
          text: "Hospital",
          align: "left",
          value: "currentWorking_hospitalName",
          sortable: true
        },
        {
          text: "Specialty",
          align: "left",
          value: "specialty",
          sortable: false
        },
        { text: "Actions", align: "center", value: "action", sortable: false }
      ],
      desserts: [
        {
          regNo: "45464654",

          firstName: "Frozensdfsdfsdf",
          lastName: "sdfsdfsddsfsdfsd",
          hospital: "Male",
          specialty: 6.0,
          actions: " "
        }
      ],
      medicalOfficers: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$http
      .get("/api/medical_officer/all")
      .then(res => {
        console.log(res);

        this.medicalOfficers = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
