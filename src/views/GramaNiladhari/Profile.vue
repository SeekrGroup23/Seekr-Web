<template>
  <v-container fluid px-5>
    <v-layout column>
      <v-flex class="mt-1 mb-4">
        <v-card height="200">
          <v-container fluid>
            <v-layout row wrap fill-height>
              <v-flex shrink>
                <v-card flat>
                  <v-avatar :size="avatarSize" color="secondary " tile>
                    <img
                      src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                      alt="avatar"
                    />
                  </v-avatar>
                </v-card>
              </v-flex>
              <v-flex grow>
                <v-card flat class="px-1 mx-4">
                  <textView
                    text="Pasindu Dewapriya"
                    type="title"
                    class="mb-1"
                  ></textView>
                  <textView
                    text="Grama Niladhari"
                    type="subheading"
                    class="mb-1"
                  ></textView>
                  <textView
                    text="Wethara - 453"
                    type="subheading"
                    class="mb-1"
                  ></textView>
                  <textView
                    text="lapjanith@gmail.com"
                    type="subheading"
                    class="mb-1"
                  ></textView>
                  <textView
                    text="+94 (77) 123 1234"
                    type="subheading"
                  ></textView>
                </v-card>
              </v-flex>
              <v-flex shrink><v-divider vertical></v-divider></v-flex>
              <v-flex shrink>
                <v-card flat width="300">
                  <v-container class="ma-0 pa-0 px-4">
                    <v-layout>
                      <v-flex>
                        <textView
                          text="Last Login"
                          type="subheading"
                        ></textView>

                        <textView
                          text="Last Edited"
                          type="subheading"
                        ></textView>
                        <textView
                          text="Date Joined"
                          type="subheading"
                        ></textView>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-tabs
            v-model="active"
            color="primary"
            dark
            slider-color="secondary"
            grow
          >
            <v-tab v-for="n in 3" :key="n" ripple> {{ tabs[n - 1] }} </v-tab>

            <!-- Personal Tab -->
            <v-tab-item>
              <v-card flat>
                <v-container class="px-3">
                  <v-layout row>
                    <v-flex grow>
                      <!-- Left Column -->
                      <v-layout column class="pr-5">
                        <v-flex>
                          <v-card flat>
                            <v-card-text class="px-0"
                              >This Section Contains Personal
                              Information</v-card-text
                            >
                          </v-card>
                        </v-flex>
                        <v-flex d-inline-flex>
                          <v-layout row justify-start>
                            <v-flex class="mr-5">
                              <v-text-field
                                v-model="email"
                                label="First Name"
                              ></v-text-field>
                            </v-flex>
                            <v-flex>
                              <v-text-field
                                v-model="email"
                                label="Last Name"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>

                    <!-- Right Column -->
                    <v-flex shrink>
                      <v-layout column>
                        <v-flex>
                          <v-container class="py-0">
                            <v-avatar
                              :size="avatarSize"
                              color="secondary "
                              tile
                            >
                              <img
                                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                                alt="avatar"
                              />
                            </v-avatar>
                          </v-container>
                        </v-flex>
                        <v-flex>
                          <v-container class="py-2" align-content-center fluid>
                            <v-btn color="primary" block>
                              Upload
                              <v-icon right dark>cloud_upload</v-icon>
                            </v-btn>
                          </v-container>
                        </v-flex>

                        <v-flex>
                          <v-layout align-end justify-end column fill-height>
                            <v-flex>
                              <!-- <v-btn fab dark color="primary"
                                ><v-icon>create</v-icon></v-btn
                              > -->
                              <v-card dark>sdfsd</v-card>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- General Tab -->
            <v-tab-item>
              <v-card flat>
                <v-container class="px-3">
                  <v-layout row>
                    <v-flex grow>
                      <v-layout column class="pr-5">
                        <v-flex>
                          <v-card flat>
                            <v-card-text class="px-0"
                              >This Section Contains Personal
                              Information</v-card-text
                            >
                          </v-card>
                        </v-flex>
                        <v-flex d-inline-flex>
                          <v-layout row justify-start>
                            <v-flex class="mr-5">
                              <v-text-field
                                v-model="email"
                                label="First Name"
                              ></v-text-field>
                            </v-flex>
                            <v-flex>
                              <v-text-field
                                v-model="email"
                                label="Last Name"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="email"
                              label="E-mail"
                            ></v-text-field>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex shrink>
                      <v-layout column>
                        <v-flex> </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Other Tab -->
            <v-tab-item>
              <v-card flat>
                <v-card-text>Dewapriya</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import textView from "../../components/TextView_A";
export default {
  components: {
    textView: textView
  },
  data: () => {
    return {
      avatarSize: 150,
      tabs: ["Personal", "General", "Other"],
      //Personal
      firstName: "",
      lastName: "",
      nameInFull: "",
      dob: "",
      maritalStatus: "",
      email: "",
      address: "",
      gender: ""
    };
  },
  created: () => {
    console.log("Profile Page Loaded");
  }
};
</script>

<style scoped></style>
