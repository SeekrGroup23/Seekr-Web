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
            <v-layout row wrap class="justify-start align-start">
              <v-flex class=" pa-2" md2 sm4 xs12>
                <v-layout column wrap class="justify-center align-start">
                  <v-avatar size="150" color="grey lighten-4" class="ml-2">
                    <img
                      :src="gn.image"
                      alt=""
                      :lazy-src="lazyImg"
                      aspect-ratio="1"
                      contain
                    />
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
                      {{ gn.title }} {{ gn.firstName }} {{ gn.lastName }}
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      {{ gn.gnDivision }}
                    </div>
                    <div class="subheading font-weight-light pb-1">
                      {{ gn.division }}
                    </div>
                    <div class="subheading font-weight-light pb-1">
                      {{ gn.province }} - {{ gn.district }}
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      {{ gn.email }}
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

      <v-flex class="py-4">
        <v-layout column>
          <v-tabs slider-color="secondary">
            <v-tab>Personal</v-tab>
            <v-tab>Official</v-tab>
            <v-tab>Image</v-tab>
            <v-tab>Settings</v-tab>

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
                        <v-btn
                          @click="onClickEdit()"
                          :color="btnEditColor"
                          :dark="isDark"
                          :loading="savePending"
                          small
                          >{{ editBtnText }}</v-btn
                        >
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
                          <v-text-field
                            v-model="gn.firstName"
                            label="First Name"
                            :readonly="!isEditable"
                          ></v-text-field>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex md5 sm12 xs12>
                          <v-text-field
                            v-model="gn.lastName"
                            label="Last Name"
                            :readonly="!isEditable"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex>
                      <v-text-field
                        v-model="gn.nic"
                        label="NIC"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.dob"
                        label="Date of Birth "
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>

                    <v-flex>
                      <v-text-field
                        v-model="gn.perm_address"
                        label="Permenant Address"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.temp_address"
                        label="Temporary Address"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.teleNum_Private"
                        label="Personal Telephone Number"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Official Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container fluid>
                  <v-layout column>
                    <v-flex>
                      <!-- <div>This Section Contains Personal Inforamtion</div> -->
                    </v-flex>

                    <v-flex>
                      <v-text-field
                        v-model="gn.regNo"
                        label="Registration No."
                        readonly
                      ></v-text-field>
                    </v-flex>

                    <v-flex>
                      <v-text-field
                        v-model="gn.gnDivision"
                        label="Grama Niladhari Division"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.dateJoined"
                        label="Date Joined"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.teleNum_official"
                        label="Official Telephone No"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="gn.email_official"
                        label="Official Email"
                        readonly
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
                            <v-img :src="gn.imageURL"></v-img>
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
                              <v-text-field label="New Password"></v-text-field>
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
                              <v-text-field label="New Email"></v-text-field>
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
                </v-container>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-dialog v-model="saveConfirmation" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Save Changes</v-card-title>
          <v-card-text>Do you want save these changes permenantly?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="saveConfirmation = false"
              >Cancel</v-btn
            >
            <v-btn color="green darken-1" flat @click="savePersonalInfo()"
              >Okay</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar v-model="snackBar" right :timeout="snackBarTimeout" top>
        {{ snackBarText }}
        <v-btn color="red" flat @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
// import fs from "fs";
export default {
  data: () => {
    return {
      imageURL: require("../../assets/user.png"),
      isEditable: false,
      editBtnText: "Edit",
      btnEditColor: "",
      isDark: false,
      saveConfirmation: false,
      savePending: false,
      snackBar: false,
      snackBarTimeout: 2500,
      snackBarText: "",
      selectedFile: null,
      imgLoading: false,
      lazyImg:
        "data:image/jpeg;base64, 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",
      gnID: "",
      gn: {
        // Personal
        firstName: "",
        lastName: "",
        nic: "",
        dob: "",
        gender: "",
        perm_address: "",
        temp_address: "",
        personalTelNo: "",
        // Official
        specialty: "",
        currentWorking_hospitalName: "",
        doctorRegNo: "",
        dateJoined: "",
        teleNum_official: "",
        teleNum_Private: "",
        email_official: "",
        province: "",
        district: "",
        division: "",
        gnDivision: "",
        regNo: "",
        // Profile Pic
        imageURL: "https://www.flaticon.com/free-icon/user_149071#",
        image: null
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // Select and Display the Image Preview
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      // let buff = fs.readFileSync(URL.createObjectURL(this.selectedFile));
      // let base64data = buff.toString("base64");
      // console.log(base64data);

      this.gn.imageURL = URL.createObjectURL(this.selectedFile);

      console.log(URL.createObjectURL(this.selectedFile));

      this.uploadFile();
    },
    // Upload the Image file to the Server
    uploadFile() {
      let formData = new FormData();
      formData.append("imageFile", this.selectedFile);
      console.log(formData);
      console.log(this.selectedFile);
      this.imgLoading = true;
      var fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedFile);
      console.log(this.selectedFile);

      this.$http
        .post(
          "/api/grama_niladhari/" +
            this.$store.state.user.id +
            "/profile_image",
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
            this.imgLoading = false;
            // this.gn.image =
          }
        })
        .catch(err => {
          this.loading_1 = false;
          this.snackbarText = "Image Uploading Failed";
          this.snackbarColor = "warning";
          this.snackbar = true;
          console.log(err);
        });
    },
    getProfile() {
      // moID = "this.$store.state.user.id";
      this.$http
        .get("/api/grama_niladhari/" + this.$store.state.user.id)
        .then(res => {
          console.log(res.data);
          this.gn.firstName = res.data.firstName;
          this.gn.lastName = res.data.lastName;
          this.gn.title = res.data.title;

          this.gn.nic = res.data.nic;
          this.gn.dob = res.data.dob;
          this.gn.perm_address = res.data.perm_address;
          this.gn.temp_address = res.data.temp_address;
          this.gn.teleNum_Private = res.data.teleNum_Private;
          this.gn.teleNum_official = res.data.teleNum_official;

          this.gn.gender = res.data.gender;
          this.gn.specialty = res.data.specialty;
          this.gn.email = res.data.email;
          this.gn.province = res.data.province;
          this.gn.district = res.data.district;
          this.gn.division = res.data.division;
          this.gn.gnDivision = res.data.gnDivision;
          this.gn.regNo = res.data.regNo;

          this.gn.dateJoined =
            res.data.dateCreated == "" ? "" : res.data.dateJoined.split("T")[0];
          this.gn.email_official = res.data.email_official;
          this.gn.teleNum_official = res.data.teleNum_official;

          this.gn.imageURL = res.data.imageURL;

          this.getImageFromServer(this.gn.imageURL);
        })
        .catch();
    },
    onClickEdit() {
      if (this.isEditable) {
        // Save
        this.isEditable = false;
        this.editBtnText = "Edit";
        this.btnEditColor = "";
        this.saveConfirmation = true;
        this.isDark = false;
      } else {
        // Edit
        this.isEditable = true;
        this.editBtnText = "Save Changes";
        this.btnEditColor = "primary";
        this.isDark = true;
      }
    },
    savePersonalInfo() {
      this.saveConfirmation = false;
      this.gnID = "6eldkITMHuSiAebMfKuz";
      this.savePending = true;
      this.$http
        .put("api/grama_niladhari/" + this.$store.state.user.id + "/personal", {
          firstName: this.gn.firstName,
          lastName: this.gn.lastName,
          nic: this.gn.nic,
          dob: this.gn.dob,
          perm_address: this.gn.perm_address,
          temp_address:
            this.gn.temp_address == "" ? "null" : this.gn.temp_address,
          teleNum_Private:
            this.gn.teleNum_Private == "" ? "null" : this.gn.teleNum_Private
        })
        .then(res => {
          if (res.data.message == "Success") {
            // console.log("Updated");
            this.savePending = false;
            this.snackBar = true;
            this.snackBarText = "Personal Information Updated Successfully";
          }
        })
        .catch();
    },
    getImageFromServer(imageURL) {
      this.$http
        .post("api/common/get_image", {
          imageURL: imageURL
        })
        .then(res => {
          if (res.data != null) {
            // Display the Image converted into Base64 - Decoding
            this.gn.image = "data:image/jpeg;base64, " + res.data.img;
          }
          console.log(res.data);
        })
        .catch();
    }
  },
  created() {
    this.getProfile();
  }
};
</script>

<style scoped></style>
