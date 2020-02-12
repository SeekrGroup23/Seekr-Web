<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          Patient's Profile
        </h4>
      </v-flex>
    </v-layout>
    <v-layout column class="py-4 px-2" wrap>
      <v-flex md12>
        <v-card height="">
          <v-container fluid class="pa-0 ma-0">
            <v-layout row wrap class="justify-start align-start">
              <v-flex class=" pa-2" md2 sm4 xs12>
                <v-layout column wrap class="justify-center align-start">
                  <v-avatar size="150" color="green" class="ml-2">
                    <span class="white--text display-1">NP</span>
                  </v-avatar>
                </v-layout>
                <v-divider class="hidden-sm-and-up mt-2"></v-divider>
              </v-flex>
              <v-divider vertical class="my-2" hidden-sm-and-down></v-divider>
              <v-flex md8 sm6 xs12>
                <v-container class="pl-4">
                  <v-layout class="align-start" column>
                    <!-- <h5 class="title">Dr. Nimal Perera</h5> -->
                    <div class="title font-weight-light pb-2">
                      Nimal Perera
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      Wethara, Homagama
                    </div>
                    <div class="subheading font-weight-light pb-1">
                      57 Yrs.
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      PID0001
                    </div>
                  </v-layout>
                </v-container>
              </v-flex>

              <!-- <v-flex hidden-sm-and-down md2>
                <h5>sdfsd</h5>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <!-- <v-flex>
        <v-layout
          row
          justify-space-around
          align-content-start
          class="py-4 px-0"
          wrap
        >
        </v-layout>
      </v-flex> -->

      <v-flex class="py-4">
        <v-layout column>
          <v-tabs slider-color="secondary">
            <v-tab>Dashboard</v-tab>
            <v-tab>Personal</v-tab>
            <v-tab>Medical</v-tab>
            <v-tab>Reports</v-tab>
            <v-tab>Clinical</v-tab>
            <v-tab>Prescriptions</v-tab>

            <!-- Dashboard Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container fluid>
                  <v-layout
                    row
                    justify-space-between
                    align-content-start
                    justify-start
                    align-start
                    class="py-2 px-0"
                    wrap
                  >
                    <!-- No. of Visits -->
                    <v-card width="288" height="100" class="my-2" hover flat>
                      <v-container fluid class="pa-0 ma-0">
                        <v-layout row>
                          <v-flex shrink>
                            <v-card
                              height="100"
                              color="primary "
                              dark
                              width="100"
                              flat
                            >
                              <v-container>
                                <v-icon size="50">home</v-icon>
                              </v-container>
                            </v-card>
                          </v-flex>
                          <v-flex class="py-2 px-2">
                            <h6 class="subheading">No. of Clinical Visits</h6>
                            <span class="subheading font-weight-medium"
                              >00</span
                            >
                            <v-layout column class="mt-2">
                              <v-divider></v-divider>
                              <h6 class="subheading pt-1 ">View Details</h6>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>

                    <v-card width="288" height="100" class="my-2" hover flat>
                      <v-container fluid class="pa-0 ma-0">
                        <v-layout row>
                          <v-flex shrink>
                            <v-card
                              height="100"
                              color="secondary "
                              dark
                              width="100"
                              flat
                            >
                              <v-container>
                                <v-icon size="50">home</v-icon>
                              </v-container>
                            </v-card>
                          </v-flex>
                          <v-flex class="py-2 px-2">
                            <h6 class="subheading">Patient's Condition</h6>
                            <span class="subheading font-weight-medium"
                              >00</span
                            >
                            <v-layout column class="mt-2">
                              <v-divider></v-divider>
                              <h6 class="subheading pt-1 ">View Details</h6>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>

                    <v-card width="288" height="100" class="my-2" hover flat>
                      <v-container fluid class="pa-0 ma-0">
                        <v-layout row>
                          <v-flex shrink>
                            <v-card
                              height="100"
                              color="secondary "
                              dark
                              width="100"
                              flat
                            >
                              <v-container>
                                <v-icon size="50">home</v-icon>
                              </v-container>
                            </v-card>
                          </v-flex>
                          <v-flex class="py-2 px-2">
                            <h6 class="subheading">Last Visited</h6>
                            <span class="subheading font-weight-medium"
                              >00</span
                            >
                            <v-layout column class="mt-2">
                              <v-divider></v-divider>
                              <h6 class="subheading pt-1 ">View Details</h6>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>

                    <v-card width="288" height="100" class="my-2" hover flat>
                      <v-container fluid class="pa-0 ma-0">
                        <v-layout row>
                          <v-flex shrink>
                            <v-card
                              height="100"
                              color="secondary "
                              dark
                              width="100"
                              flat
                            >
                              <v-container>
                                <v-icon size="50">home</v-icon>
                              </v-container>
                            </v-card>
                          </v-flex>
                          <v-flex class="py-2 px-2">
                            <h6 class="subheading">Other</h6>
                            <span class="subheading font-weight-medium"
                              >00</span
                            >
                            <v-layout column class="mt-2">
                              <v-divider></v-divider>
                              <h6 class="subheading pt-1 ">View Details</h6>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Personal Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container fluid>
                  <v-layout column>
                    <v-flex>
                      <!-- <div>This Section Contains Personal Inforamtion</div> -->
                    </v-flex>
                    <v-flex md12>
                      <v-layout row class="align-center justify-end">
                        <div>This Section Contains Personal Inforamtion</div>
                        <v-spacer></v-spacer>
                        <v-btn small>{{ editBtnText }}</v-btn>
                        <!-- <v-btn small :disabled="!isEditable"
                          >Save Changes</v-btn
                        > -->
                      </v-layout>
                    </v-flex>

                    <v-flex class="pt-4">
                      <v-divider></v-divider>
                    </v-flex>

                    <v-flex>
                      <v-layout row wrap>
                        <v-flex md5 sm12 xs12>
                          <v-text-field label="First Name"></v-text-field>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex md5 sm12 xs12>
                          <v-text-field label="Last Name"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex>
                      <v-text-field label="NIC"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Date of Birth "></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Gender"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Permenant Address"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Temporary Address"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Personal Telephone Number"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Official Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container>
                  <v-layout column>
                    <v-flex>
                      <!-- <div>This Section Contains Personal Inforamtion</div> -->
                    </v-flex>

                    <v-flex>
                      <v-text-field label="Medical Officer ID"></v-text-field>
                    </v-flex>

                    <v-flex>
                      <v-layout row wrap>
                        <v-flex md5 sm12 xs12>
                          <v-text-field label="First Name"></v-text-field>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex md5 sm12 xs12>
                          <v-text-field label="Last Name"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex>
                      <v-text-field label="NIC"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Date of Birth "></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Gender"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Permenant Address"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Temporary Address"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Personal Telephone Number"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Image Tab -->
            <v-tab-item>
              <v-card flat>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex class="py-1" md3 sm6 xs12>
                      <v-container fluid class="py-0">
                        <v-layout column class="">
                          <v-avatar tile color="secondary" size="208">
                            <v-img :src="imageURL"></v-img>
                          </v-avatar>
                        </v-layout>
                      </v-container>
                    </v-flex>
                    <v-flex class=" " md2>
                      <input
                        style="display: none"
                        ref="imageFileInput"
                        type="file"
                        name="imageFile"
                        v-on:change="onFileSelected"
                      />
                      <v-btn @click="$refs.imageFileInput.click()"
                        >Select Image</v-btn
                      >
                    </v-flex>
                    <v-flex class="py-1 " md8>
                      <v-spacer></v-spacer>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Setting Tab -->
            <v-tab-item>
              <v-card flat>
                <v-container fluid class="pa-0">
                  <v-row>
                    <v-column>
                      <v-expansion-panel>
                        <v-expansion-panel-content>
                          <template v-slot:header>
                            <div>Change Password</div>
                          </template>
                          <v-card flat>
                            <v-container fluid>
                              <v-layout row wrap>
                                <v-flex md6 sm12 xs12 class="px-2">
                                  <v-text-field
                                    label="Current Password"
                                  ></v-text-field>
                                </v-flex>
                                <v-spacer></v-spacer>
                                <v-flex md6 sm12 xs12 class="px-2">
                                  <v-text-field
                                    label="New Password"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex md6 sm12 xs12 class="ma-0 pa-0">
                                  <v-btn small color="">Save Changes</v-btn>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                          <template v-slot:header>
                            <div>Change Email</div>
                          </template>
                          <v-card flat color="grey lighten-3">
                            <v-container fluid>
                              <v-layout row wrap>
                                <v-flex md6 sm12 xs12 class="px-2">
                                  <v-text-field
                                    label="Current Email"
                                  ></v-text-field>
                                </v-flex>
                                <v-spacer></v-spacer>
                                <v-flex md6 sm12 xs12 class="px-2">
                                  <v-text-field
                                    label="New Email"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex md6 sm12 xs12 class="ma-0 pa-0">
                                  <v-btn small color="">Save Changes</v-btn>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                          <template v-slot:header>
                            <div>Delete Account</div>
                          </template>
                          <v-card flat color="grey lighten-3">
                            <v-container fluid>
                              <v-layout row wrap> </v-layout>
                            </v-container>
                          </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                          <template v-slot:header>
                            <div>Contact Admin</div>
                          </template>
                          <v-card flat color="grey lighten-3">
                            <v-container fluid>
                              <v-layout row wrap> </v-layout>
                            </v-container>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-column>
                  </v-row>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Prescriptions Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container fluid>
                  <v-layout column> </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      imageURL: require("../../assets/user.png"),
      isEditable: false,
      editBtnText: "Edit"
    };
  },
  computed: {},
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);

      console.log(URL.createObjectURL(this.selectedFile));

      // this.uploadFile();
    },
    uploadFile() {
      let formData = new FormData();
      formData.append("imageFile", this.selectedFile);
      console.log(formData);
      console.log(this.selectedFile);
      this.loading_1 = true;

      this.$http
        .post(
          "/api/medical_officer/" + this.docID + "/profile_image",
          formData,
          {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          }
        )
        .then(res => {
          console.log(res.data);

          if (res.data.message == "Success") {
            this.loading_1 = false;

            this.e6 = 4;
          }
        })
        .catch(err => {
          this.loading_1 = false;
          this.snackbarText = "Image Uploading Failed";
          this.snackbarColor = "warning";
          this.snackbar = true;
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
