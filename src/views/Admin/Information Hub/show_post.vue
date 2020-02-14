<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          show News
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
      <!-- card1 -->
      <v-card width="900" height="150" class="my-2" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="150"
                color="purple lighten-2"
                dark
                width="200"
                flat
              >
                <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS4ASfyQC8cjsTl2uz7YP5FGUu_S1jYDHJwUF2Lw36CohoEZqo"
          height="150px"
        >
        </v-img>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">seekr</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- card2 -->
      <v-card width="900" height="150" class="my-2" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="150"
                color="purple lighten-2"
                dark
                width="200"
                flat
              >
                <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS4ASfyQC8cjsTl2uz7YP5FGUu_S1jYDHJwUF2Lw36CohoEZqo"
          height="150px"
        >
        </v-img>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">seekr</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <!-- card 3 -->
      <v-card width="900" height="150" class="my-2" hover>
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="150"
                color="purple lighten-2"
                dark
                width="200"
                flat
              >
                <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS4ASfyQC8cjsTl2uz7YP5FGUu_S1jYDHJwUF2Lw36CohoEZqo"
          height="150px"
        >
        </v-img>
              </v-card>
            </v-flex>
            <v-flex class="py-2 px-2">
              <h6 class="subheading">seekr</h6>
              <span class="subheading font-weight-medium">00</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>

    <v-divider></v-divider>

    <v-layout> </v-layout>
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

