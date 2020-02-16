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
                    <span class="white--text display-1"
                      >{{ patient.firstName.charAt(0).toUpperCase()
                      }}{{ patient.lastName.charAt(0).toUpperCase() }}</span
                    >
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
                      {{ patient.firstName }} {{ patient.lastName }}
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      {{ patient.address_perm }}
                    </div>
                    <div class="subheading font-weight-light pb-1">
                      {{ patient.age }}
                    </div>
                    <div class="subheading font-weight-light pb-2">
                      {{ patient.patientID }}
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
            <!-- <v-tab>Reports</v-tab> -->
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
                            <span class="subheading font-weight-medium">{{
                              patient.condition
                            }}</span>
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
                            <h6 class="subheading">State</h6>
                            <span class="subheading font-weight-medium">{{
                              patient.state
                            }}</span>
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
                        <v-btn
                          :color="btnEditColor"
                          :dark="isDark"
                          @click="onClickEdit()"
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
                            v-model="patient.firstName"
                            label="First Name"
                            :readonly="!isEditable"
                          ></v-text-field>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex md5 sm12 xs12>
                          <v-text-field
                            v-model="patient.lastName"
                            label="Last Name"
                            :readonly="!isEditable"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex>
                      <v-text-field
                        v-model="patient.nic"
                        label="NIC"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="patient.dob"
                        label="Date of Birth "
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="patient.dob"
                        label="Gender"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="patient.address_perm"
                        label="Permenant Address"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="patient.address_temp"
                        label="Temporary Address"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        v-model="patient.contact_teleNum"
                        label="Personal Telephone Number"
                        :readonly="!isEditable"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>

            <!-- Medical Tab -->
            <v-tab-item>
              <v-card flat color="grey lighten-3">
                <v-container fluid>
                  <v-layout column>
                    <v-flex>
                      <!-- <div>This Section Contains Personal Inforamtion</div> -->
                    </v-flex>
                    <v-flex md12>
                      <v-layout row class="align-center justify-end">
                        <div>
                          This Section Contains Medical-Related Inforamtion
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn
                          :color="medicalEditBtnColor"
                          :dark="isDark"
                          @click="onClickMedicalEdit()"
                          small
                          >{{ medicalEditBtnText }}</v-btn
                        >
                        <!-- <v-btn small :disabled="!isEditable"
                          >Save Changes</v-btn
                        > -->
                      </v-layout>
                    </v-flex>
                    <v-divider class="mt-4"></v-divider>

                    <v-flex>
                      <v-select
                        v-model="patient.bloodGroup"
                        label="Blood Groups"
                        :items="bloodGroups"
                        :readonly="!isMedicalEditable"
                      ></v-select>
                    </v-flex>

                    <v-flex>
                      <v-select
                        v-model="patient.state"
                        label="State"
                        :items="['Suspected CKDu', 'Verified CKDu']"
                        :readonly="!isMedicalEditable"
                      ></v-select>
                    </v-flex>
                    <v-flex>
                      <v-select
                        v-model="patient.condition"
                        label="Condition"
                        :items="['Early Stage', 'Intermediate', 'Critical']"
                        :readonly="!isMedicalEditable"
                      ></v-select>
                    </v-flex>

                    <v-flex>
                      <h6 class="caption font-weight-regular">
                        Non-Transmitted Diseases
                      </h6>
                      <v-layout wrap row justify-space-between>
                        <v-checkbox
                          v-model="patient.nonTransmittedDiseases"
                          value="Diabetes"
                          label="Diabetes"
                          :readonly="!isMedicalEditable"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="patient.nonTransmittedDiseases"
                          label="High Blood Pressure"
                          value="High Blood Pressure"
                          :readonly="!isMedicalEditable"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="patient.nonTransmittedDiseases"
                          label="Cardiovascular Diseases"
                          value="Cardiovascular Diseases"
                          :readonly="!isMedicalEditable"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="patient.nonTransmittedDiseases"
                          label="Overweight/Obesity"
                          value="Overweight/Obesity"
                          :readonly="!isMedicalEditable"
                        ></v-checkbox>
                      </v-layout>
                    </v-flex>

                    <v-divider></v-divider>

                    <v-layout row class="pt-3">
                      <v-flex shrink>
                        <h5 class="subheading">
                          Bitten By Snakes or Venomous Animals/Insects
                        </h5>
                      </v-flex>
                      <v-flex grow class="ml-4" wrap>
                        <v-radio-group
                          v-model="patient.snakeBites"
                          row
                          class="pa-0 ma-0"
                          :readonly="!isMedicalEditable"
                          @change="test()"
                        >
                          <v-radio label="Yes" :value="true"></v-radio>
                          <v-radio label="No" :value="false"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>

                    <v-divider></v-divider>

                    <v-layout row class="pt-3" wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Smoking Status</h5>
                      </v-flex>
                      <v-flex grow class="ml-4">
                        <v-radio-group
                          v-model="patient.smokingStatus"
                          row
                          class="pa-0 ma-0"
                          :readonly="!isMedicalEditable"
                        >
                          <v-radio label="None" value="None"></v-radio>
                          <v-radio
                            label="Mild Smoker"
                            value="Mild Smoker"
                          ></v-radio>
                          <v-radio
                            label="Heavy Smoker"
                            value="Heavy Smoker"
                          ></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>

                    <v-divider></v-divider>
                    <v-layout row class="pt-3" wrap>
                      <v-flex shrink>
                        <h5 class="subheading">Alchohol Usage</h5>
                      </v-flex>
                      <v-flex grow class="ml-4">
                        <v-radio-group
                          v-model="patient.alchoholUsage"
                          :readonly="!isMedicalEditable"
                          row
                          class="pa-0 ma-0"
                          @change="test()"
                        >
                          <v-radio label="None" value="None"></v-radio>
                          <v-radio
                            label="Mild Drinker"
                            value="Mild Drinker"
                          ></v-radio>
                          <v-radio
                            label="Heavy Drinker"
                            value="Heavy Drinker"
                          ></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>

                    <v-flex>
                      <v-textarea
                        outline
                        v-model="patient.specialNotes"
                        label="Doctor's Notes"
                        :value="patient.specialNotes"
                        :readonly="!isMedicalEditable"
                      ></v-textarea>
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
      <v-layout>
        <v-dialog v-model="saveConfirmation" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Save Changes</v-card-title>
            <v-card-text
              >Do you want save these changes permenantly?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat
                @click="saveConfirmation = false"
                >Cancel</v-btn
              >
              <v-btn color="green darken-1" flat @click="savePersonalInfo()"
                >Okay</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="medicalSaveConfirmation" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Save Changes</v-card-title>
            <v-card-text
              >Do you want save these changes permenantly?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat
                @click="medicalSaveConfirmation = false"
                >Cancel</v-btn
              >
              <v-btn color="green darken-1" flat @click="saveMedicalInfo()"
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data: function() {
    return {
      imageURL: require("../../assets/user.png"),
      isEditable: false,
      isMedicalEditable: false,
      editBtnText: "Edit",
      medicalEditBtnText: "Edit",
      medicalEditBtnColor: "",
      medicalSaveConfirmation: false,
      btnEditColor: "",
      isDark: false,
      saveConfirmation: false,
      savePending: false,
      snackBar: false,
      snackBarTimeout: 2500,
      snackBarText: "",
      patientID: "",
      patient: {
        patientID: "",
        firstName: "",
        lastName: "",
        dob: "",
        age: "",
        gender: "",
        nic: "",
        address_perm: "",
        condition: "",
        state: "",
        contact_teleNum: "",
        nonTransmittedDiseases: [],
        specialNotes: "",
        snakeBites: false,
        smokingStatus: "None",
        alchoholUsage: "None",
        bloodGroup: ""
      },
      bloodGroups: ["AB+", "A+", "B+", "O+", "AB-", "A-", "B-", "O-"]
    };
  },
  computed: {},
  created() {
    // this.patientID = this.$router.params.id;
    console.log(">>>>>>>>> " + this.getAge("12-01-1996"));
    this.getPatientProfile();
  },
  methods: {
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
    onClickMedicalEdit() {
      if (this.isMedicalEditable) {
        // Save
        this.isMedicalEditable = false;
        this.medicalEditBtnText = "Edit";
        this.medicalEditBtnColor = "";
        this.medicalSaveConfirmation = true;
        this.isDark = false;
      } else {
        // Edit
        this.isMedicalEditable = true;
        this.medicalEditBtnText = "Save Changes";
        this.medicalEditBtnColor = "primary";
        this.isDark = true;
      }
    },
    test() {
      console.log(this.patient.snakeBites);
    },

    savePersonalInfo() {
      this.saveConfirmation = false;
      this.savePending = true;
      this.$http
        .put("api/patient/" + this.id + "/personal", {
          firstName: this.patient.firstName,
          lastName: this.patient.lastName,
          nic: this.patient.nic,
          dob: this.patient.dob,
          address_perm: this.patient.address_perm,
          address_temp: this.patient.address_temp,
          contact_teleNum:
            this.patient.contact_teleNum == ""
              ? "null"
              : this.patient.contact_teleNum,
          gender: this.patient.gender
        })
        .then(res => {
          if (res.data.message == "Success") {
            console.log("Updated");
            this.savePending = false;
            this.snackBar = true;
            this.snackBarText = "Personal Information Updated Successfully";
          }
        })
        .catch();
    },
    saveMedicalInfo() {
      this.medicalSaveConfirmation = false;
      this.savePending = true;
      console.log({
        bloodGroup: this.patient.bloodGroup,
        state: this.patient.state,
        condition: this.patient.condition,
        specialNotes: this.patient.specialNotes,
        smokingStatus: this.patient.smokingStatus,
        alchoholUsage: this.patient.alchoholUsage,
        snakeBites: this.patient.snakeBites,
        nonTransmittedDiseases: this.patient.nonTransmittedDiseases
      });
      this.$http
        .put("api/patient/" + this.id + "/medical", {
          bloodGroup: this.patient.bloodGroup,
          state: this.patient.state,
          condition: this.patient.condition,
          specialNotes: this.patient.specialNotes,
          smokingStatus: this.patient.smokingStatus,
          alchoholUsage: this.patient.alchoholUsage,
          snakeBites: this.patient.snakeBites,
          nonTransmittedDiseases: this.patient.nonTransmittedDiseases
        })
        .then(res => {
          if (res.data.message == "Success") {
            console.log("Updated");
            this.savePending = false;
            this.snackBar = true;
            this.snackBarText = "Medical Information Updated Successfully";
          }
        })
        .catch();
    },
    getPatientProfile() {
      this.$http
        .get("/api/patient/profile/" + this.id)
        .then(res => {
          console.log(res.data);
          this.patient.firstName = res.data.firstName;
          this.patient.lastName = res.data.lastName;
          this.patient.dob = res.data.dob;
          this.patient.age = this.getAge(res.data.dob);
          this.patient.address_perm =
            res.data.address_perm == "null" ? "" : res.data.address_perm;
          this.patient.address_temp =
            res.data.address_temp == "null" ? "" : res.data.address_temp;
          this.patient.contact_teleNum =
            res.data.contact_teleNum == "null" ? "" : res.data.contact_teleNum;
          this.patient.state = res.data.state;
          this.patient.state = res.data.state;
          this.patient.condition = res.data.condition;
          this.patient.nic = res.data.nic;
          this.patient.patientID = "PID_" + res.data.nic;
          this.patient.nonTransmittedDiseases = res.data.nonTransmittedDiseases;
          this.patient.specialNotes = res.data.specialNotes;
          this.patient.bloodGroup = res.data.bloodGroup;
          this.patient.snakeBites =
            res.data.snakeBites == "" ? "None" : res.data.snakeBites;
          this.patient.smokingStatus =
            res.data.smokingStatus == "" ? "None" : res.data.smokingStatus;
          this.patient.alchoholUsage = res.data.alchoholUsage;

          // this.patient.firstName = res.data.firstName;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAge(dateString) {
      var arr = dateString.split("-");
      var dob = arr[2] + "-" + arr[1] + "-" + arr[0];
      console.log(arr[2] + " " + arr[1] + " " + arr[0]);
      console.log(dob);
      var today = new Date();
      var birthDate = new Date(dob.toString());

      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      console.log( "==================" + age);
      return age;
    },
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
