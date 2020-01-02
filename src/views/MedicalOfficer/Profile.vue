<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          My Profile
        </h4>
      </v-flex>
    </v-layout>
    <v-layout column class="py-4 px-2" wrap>
      <v-flex md12>
        <v-card height="">
          <v-container fluid class="pa-0 ma-0">
            <v-layout row>
              <v-flex class="" md4>
                <v-avatar tile size="150" color="grey lighten-4">
                  <img
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                </v-avatar>
              </v-flex>
              <v-flex md6>
                <v-layout column class="align-start">
                  <h5 class="headline">Dr. Nimal Perera</h5>
                </v-layout>
              </v-flex>

              <v-flex hidden-sm-and-down md2>
                <h5>sdfsd</h5>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex class="py-4">
        <v-layout row>
          <v-tabs fixed-tabs grow slider-color="secondary">
            <v-tab>Personal</v-tab>
            <v-tab>Security</v-tab>
          </v-tabs>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
