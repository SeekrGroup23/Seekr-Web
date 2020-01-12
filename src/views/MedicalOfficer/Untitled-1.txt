<template>
  <v-container>
    <v-layout column>
      <v-flex grow>
        <v-container fluid>
          <v-layout row>
            <v-flex grow>
              <v-card height="400" elevation-10 class="rounded-card">
                <v-container fluid class="pa-0">
                  <v-layout row>
                    <v-flex shrink>
                      <v-card width="325" height="400" flat>
                        <v-container fluid>
                          <v-layout column>
                            <v-flex>
                              <v-layout
                                align-space-around
                                justify-center
                                class="pb-4"
                              >
                                <v-avatar size="125" color="grey lighten-4">
                                  <img
                                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                                    alt="avatar"
                                  />
                                </v-avatar>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <v-layout align-space-around justify-center row>
                                <h2 class="title">John Doe</h2>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <v-layout
                                align-space-around
                                justify-center
                                row
                                class="py-2"
                              >
                                <h6 class="subheading">johndoe@gmail.com</h6>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <v-layout
                                align-space-around
                                justify-center
                                row
                                class="pt-3 pb-1"
                              >
                                <h6 class="subheading">Member Since</h6>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <v-layout
                                align-space-around
                                justify-center
                                row
                                class=""
                              >
                                <span class="body-1">2019-01-01</span>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <v-layout
                                align-space-around
                                justify-center
                                row
                                class="py-4"
                              >
                                <v-btn color="primary">Edit Profile</v-btn>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                    <v-flex shrink>
                      <v-divider vertical></v-divider>
                    </v-flex>
                    <v-flex grow>
                      <v-container fluid class="pa-0">
                        <v-layout column fill-height>
                          <v-flex grow>
                            <v-card height="150" flat>
                              <span>sdfsdf</span>
                            </v-card>
                          </v-flex>
                          <v-flex shrink>
                            <v-divider horizontal></v-divider>
                          </v-flex>
                          <v-flex grow>
                            <v-card height="150" flat>
                              <span>sdfsdf</span>
                            </v-card>
                          </v-flex>
                          <v-flex shrink>
                            <v-divider horizontal></v-divider>
                          </v-flex>
                          <v-flex grow>
                            <v-card height="98" flat>
                              <span>sdfsdf</span>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <!-- Second Section -->
      <v-flex grow>
        <v-container fluid grid-list-xl>
          <v-layout row wrap justify-space-between>
            <v-flex grow>
              <v-card width="250" height="100" class="pa-0">
                <v-container fluid class="pa-0">
                  <v-layout row justify-center>
                    <v-flex shrink>
                      <v-img
                        src="https://picsum.photos/510/300?random"
                        aspect-ratio="1"
                        height="50px"
                        width="50px"
                      ></v-img>
                    </v-flex>
                    <v-flex grow>
                      <span>Test</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
            <v-flex grow>
              <v-card width="250" height="100"> </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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

<style scoped>
.rounded-card {
  border-radius: 10px;
}
</style>
