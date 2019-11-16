<template>
  <v-container fluid>
    <v-layout column>
      <!-- Name First and Last Names -->
      <v-flex md12>
        <v-layout row wrap>
          <v-flex class="pr-5">
            <v-text-field
              color="primary"
              label="First Name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              color="primary"
              label="Last Name"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Name in Ful -->
      <v-flex>
        <v-text-field
          color="primary"
          label="Name in Full"
          required
        ></v-text-field>
      </v-flex>
      <!-- Date of Birth -->
      <v-flex>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="100"
          :nudge-bottom="-50"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date of Birth"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false"
            no-title
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <!-- Gender -->
      <v-flex>
        <v-layout row wrap>
          <v-flex shrink>
            <h5 class="subheading">Gender</h5>
          </v-flex>
          <v-flex grow>
            <v-radio-group
              v-model="radioGroup_Gender"
              row
              class="pa-0 ma-0 pt-2"
            >
              <v-radio label="Male" value="M"></v-radio>
              <v-radio label="Female" value="F"></v-radio>
              <v-radio label="Other" value="O"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pb-3">
        <v-divider></v-divider>
      </v-flex>

      <!-- Marital Status -->
      <v-flex>
        <v-layout row wrap>
          <v-flex shrink>
            <h5 class="subheading">Marital Status</h5>
          </v-flex>
          <v-flex grow>
            <v-radio-group
              v-model="radioGroup_MaritalStatus"
              row
              class="pa-0 ma-0 pt-2"
            >
              <v-radio label="Single" value="S"></v-radio>
              <v-radio label="Currently Married" value="CM"></v-radio>
              <v-radio label="Living Together" value="LT"></v-radio>
              <v-radio label="Divorced / Seperated" value="DS"></v-radio>
              <v-radio label="Widowed" value="W"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pb-3">
        <v-divider></v-divider>
      </v-flex>

      <!-- Age at Marriage -->
      <v-flex>
        <v-text-field
          color="primary"
          label="Age at Marriage"
          type="number"
        ></v-text-field>
      </v-flex>
      <!-- Religeon -->
      <v-flex> </v-flex>
      <!--  -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      radioGroup_MaritalStatus: "S",
      radioGroup_Gender: "F"
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
