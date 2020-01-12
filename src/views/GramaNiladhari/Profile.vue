<template>
  <v-container fluid px-5>
    <v-layout column>
      <v-flex class="mt-1 mb-4">
        <v-card height="200" class="rounded-card">
          <v-container fluid>
            <v-layout row wrap fill-height>
              <v-flex shrink>
                <v-card flat>
                  <v-avatar :size="avatarSize" color="">
                    <img
                      src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                      alt="avatar"
                    />
                  </v-avatar>
                </v-card>
              </v-flex>
              <v-flex grow>
                <v-card flat class="px-1 mx-4">
                  <textView :text="name" type="title" class="mb-1"></textView>

                  <textView
                    :text="other.email"
                    type="subheading"
                    class="mb-1"
                  ></textView>
                  <textView
                    text="+94 (77) 123 1234"
                    type="subheading"
                  ></textView>
                  <v-container fluid class="px-0">
                    <v-layout row>
                      <v-flex shrink>
                        <textView
                          text="Grama Niladhari"
                          type="subheading"
                          class="mb-1 px-0 mr-2"
                        ></textView>
                      </v-flex>
                      <v-flex shrink>
                        <v-divider vertical></v-divider>
                      </v-flex>
                      <v-flex shrink>
                        <textView
                          :text="general.divSummary"
                          type="subheading"
                          class="mb-1 ml-2"
                        ></textView>
                      </v-flex>
                    </v-layout>
                  </v-container>
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
        <v-card class="rounded-card">
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
                      <v-layout column class="pr-5 pl-2">
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
                                v-model="personal.firstName"
                                label="First Name"
                                :clearable="isEditable"
                                :readonly="!isEditable"
                                required
                                :error-messages="firstNameErrors"
                                @input="$v.personal.firstName.$touch()"
                                @blur="$v.personal.firstName.$touch()"
                              ></v-text-field>
                            </v-flex>
                            <v-flex>
                              <v-text-field
                                v-model="personal.lastName"
                                label="Last Name"
                                :clearable="isEditable"
                                :readonly="!isEditable"
                                required
                                :error-messages="lastNameErrors"
                                @input="$v.personal.lastName.$touch()"
                                @blur="$v.personal.lastName.$touch()"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="personal.nameInFull"
                              label="Full Name"
                              :clearable="isEditable"
                              :readonly="!isEditable"
                              required
                              :error-messages="nameInFullErrors"
                              @input="$v.personal.nameInFull.$touch()"
                              @blur="$v.personal.nameInFull.$touch()"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-menu
                              ref="menu1"
                              v-model="menu1"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              lazy
                              transition="scale-transition"
                              offset-y
                              full-width
                              max-width="290px"
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  v-model="personal.dob"
                                  label="Date of Birth"
                                  hint="MM/DD/YYYY format"
                                  persistent-hint
                                  required
                                  v-on="on"
                                  @blur="
                                    date = parseDate(dateFormatted);
                                    $v.personal.dob.$touch();
                                  "
                                  :error-messages="dobErrors"
                                  @input="$v.personal.dob.$touch()"
                                  :clearable="isEditable"
                                  :readonly="!isEditable"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date"
                                no-title
                                @input="menu1 = false"
                              ></v-date-picker>
                            </v-menu>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="personal.gender"
                              label="Gender"
                              v-show="!isEditable"
                              :clearable="isEditable"
                              :readonly="!isEditable"
                              required
                              :error-messages="nameInFullErrors"
                              @input="$v.personal.gender.$touch()"
                              @blur="$v.personal.gender.$touch()"
                            ></v-text-field>

                            <v-radio-group
                              v-model="personal.gender"
                              v-show="isEditable"
                              @change="getGenderValue()"
                              row
                            >
                              <template v-slot:label>
                                <div>
                                  Gender
                                </div>
                              </template>
                              <v-radio
                                label="Male"
                                value="M"
                                class="ml-4"
                              ></v-radio>
                              <v-radio
                                label="Female"
                                value="F"
                                class="ml-4"
                              ></v-radio>
                              <v-radio
                                label="Other"
                                value="O"
                                class="ml-4"
                              ></v-radio>
                            </v-radio-group>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="personal.nic"
                              label="NIC Number"
                              :clearable="isEditable"
                              :readonly="!isEditable"
                              required
                              :error-messages="nicErrors"
                              @input="$v.personal.nic.$touch()"
                              @blur="$v.personal.nic.$touch()"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="personal.maritalStatus"
                              label="Marital Status"
                              :clearable="isEditable"
                              :readonly="!isEditable"
                              required
                              :error-messages="maritalStatusErrors"
                              @input="$v.personal.maritalStatus.$touch()"
                              @blur="$v.personal.maritalStatus.$touch()"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="personal.address"
                              label="Address"
                              :clearable="isEditable"
                              :readonly="!isEditable"
                              required
                              :error-messages="addressErrors"
                              @input="$v.personal.address.$touch()"
                              @blur="$v.personal.address.$touch()"
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
                              color=""
                              tile
                              @click="$refs.selectImageFile.click()"
                            >
                              <img
                                v-if="!isUploading"
                                :src="imagePreview"
                                alt="avatar"
                              />
                              <v-progress-circular
                                v-if="isUploading"
                                :value="20"
                                color="green"
                                :indeterminate="true"
                              ></v-progress-circular>
                            </v-avatar>
                          </v-container>
                        </v-flex>
                        <v-flex>
                          <v-container class="py-0" align-content-center fluid>
                            <input
                              hidden
                              type="file"
                              @change="onImageFileSelected"
                              ref="selectImageFile"
                              accept="image/*"
                            />
                            <v-btn
                              color="primary"
                              @click="$refs.selectImageFile.click()"
                              block
                              :disabled="isUploading"
                            >
                              Choose Photo
                            </v-btn>
                          </v-container>
                        </v-flex>

                        <v-flex>
                          <v-layout>
                            <v-flex>
                              <v-btn
                                @click="switchEditableMode()"
                                dark
                                color="secondary"
                                >{{ editBtnText }}</v-btn
                              >
                              <v-card dark></v-card>
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
                              >This Section Contains Official
                              Information</v-card-text
                            >
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="general.gid"
                              label="Grama Niladhari ID"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="general.division"
                              label="Division"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="general.divisionCode"
                              label="Division Code"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="general.divSectrateriat"
                              label="Divisional Secrateriate"
                            ></v-text-field>
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <v-text-field
                              v-model="general.dateJoined"
                              label="Date Joined"
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
                <v-container class="px-3">
                  <v-layout row>
                    <v-flex grow>
                      <v-layout column class="pr-5">
                        <v-flex>
                          <v-card flat>
                            <v-card-text class="px-0"
                              >This Section Contains Privacy and Security
                              Related Information</v-card-text
                            >
                          </v-card>
                        </v-flex>

                        <v-flex>
                          <v-card flat>
                            <!-- Expansion Pannel Begins from Here -->
                            <v-expansion-panel>
                              <!-- Item - Email -->
                              <v-expansion-panel-content>
                                <template v-slot:header>
                                  <div>Email</div>
                                </template>
                                <v-card flat>
                                  <v-container class="pt-0">
                                    <v-layout column>
                                      <v-flex>
                                        <v-card flat>
                                          <v-text-field
                                            v-model="other.email"
                                            label="Email"
                                          ></v-text-field>
                                        </v-card>
                                      </v-flex>
                                      <v-flex>
                                        <v-card flat>
                                          <v-btn class="ma-0">
                                            Change Email
                                          </v-btn>
                                        </v-card>
                                      </v-flex>
                                    </v-layout>
                                  </v-container>
                                </v-card>
                              </v-expansion-panel-content>

                              <!-- Item Password -->
                              <v-expansion-panel-content>
                                <template v-slot:header>
                                  <div>Password</div>
                                </template>
                                <v-card flat>
                                  <v-container class="pt-0">
                                    <v-layout column>
                                      <v-flex>
                                        <v-card flat>
                                          <v-text-field
                                            error-messages="currentPasswordErrors"
                                            v-model="other.currentPassword"
                                            label="Current Password"
                                            type="password"
                                          ></v-text-field>
                                        </v-card>
                                      </v-flex>

                                      <v-flex>
                                        <v-card flat>
                                          <v-text-field
                                            error-messages="newPasswordErrors"
                                            v-model="other.newPassword"
                                            label="New Password"
                                            type="password"
                                          ></v-text-field>
                                        </v-card>
                                      </v-flex>
                                      <v-flex>
                                        <v-card flat>
                                          <v-btn class="ma-0">
                                            Change Password
                                          </v-btn>
                                        </v-card>
                                      </v-flex>
                                    </v-layout>
                                  </v-container>
                                </v-card>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                            <!-- Expansion Pannel Ends Here -->
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
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import textView from "../../components/TextView_A";
//Form Validation - Vuelidate
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  components: {
    textView: textView
  },
  mixins: [validationMixin],
  validations: {
    personal: {
      firstName: { required, minLength: minLength(4) },
      lastName: { required, minLength: minLength(4) },
      nameInFull: { required, minLength: minLength(10) },
      dob: { required },
      gender: { required },
      nic: { required, minLength: minLength(12) },
      maritalStatus: { required },
      address: { required, minLength: minLength(10) }
    },
    general: {},
    other: {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    }
  },
  // Data of the this Vue Instance
  data: vm => {
    return {
      avatarSize: 150,
      isEditable: false,
      tabs: ["Personal", "General", "Other"],
      //Personal
      personal: {
        firstName: "John",
        lastName: "Doe",
        nameInFull: "Gembamudalige John Doe",
        dob: vm.formatDate(new Date().toISOString().substr(0, 10)),
        maritalStatus: "",
        nic: "",
        address: "",
        gender: "M",
        selectedImageFile: null,
        name: ""
      },
      general: {
        gid: "",
        division: "",
        divisionCode: "",
        divSectrateriat: "",
        dateJoined: "",
        divSummary: ""
      },
      other: {
        email: "",
        currentPassword: "",
        newPassword: ""
      },
      // Date Picker
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      // Image File Uploading Progress
      isImageFileSelected: false,
      isUploading: false,
      uploadProgress: 0,
      imagePreview: "https://image.flaticon.com/icons/svg/149/149071.svg",
      editBtnText: "Edit"
    };
  },
  created() {
    console.log("In Created");
    this.$http
      .get("/api/gramaniladhari/get_profile", {
        params: {
          // id: this.$store.state.user.id
          // id: "W67Qr4BYUkgR2AUworGH"
          docId: this.$store.state.user.email
        }
      })
      .then(response => {
        console.log(response.data);

        this.personal.firstName = response.data.firstName;
        this.personal.lastName = response.data.lastName;
        this.personal.nameInFull = response.data.nameInFull;
        this.personal.dob = response.data.dob;
        this.personal.maritalStatus = response.data.maritalStatus;
        this.personal.nic = response.data.nic;
        this.personal.address = response.data.address;
        this.personal.gender = response.data.gender;
        this.name = this.personal.firstName + " " + this.personal.lastName;

        this.other.email = this.$store.state.user.email;

        this.general.gid = "GN1004";
        this.general.division = response.data.division;
        this.general.divisionCode = response.data.divisionCode;
        this.general.divSectrateriat = response.data.divSec;

        this.general.divSummary =
          this.general.division + " - " + this.general.divisionCode;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    switchEditableMode() {
      if (this.isEditable == false) {
        this.editBtnText = "Save";
      } else {
        this.editBtnText = "Edit";
        console.log("Saving");

        this.$v.personal.$touch();
        var test = true;
        if (test == true) {
          console.log("I'm Here**********************");
          this.$http
            .post("/api/gramaniladhari/personal/update", {
              firstName: this.personal.firstName,
              lastName: this.personal.lastName,
              nameInFull: this.personal.nameInFull,
              dob: this.personal.dob,
              gender: this.personal.gender,
              nic: this.personal.nic,
              maritalStatus: this.personal.maritalStatus,
              address: this.personal.address,
              email: this.other.email
            })
            .then(response => {
              console.log(response);
              this.$store.state.questionnaire.firstName = this.firstName;
              this.$store.state.questionnaire.lastName = this.lastName;
              this.$store.state.questionnaire.nic = this.nic;
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
      this.isEditable = !this.isEditable;
    },
    //DataPicker related Methods Begin from Here
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    // Triggers when user change Gender Selection Radio Buttons
    getGenderValue() {
      this.radioGroup_Gender =
        this.personal.gender == "M"
          ? 1
          : this.personal.gender == "F"
          ? 2
          : this.personal.gender == "O"
          ? 3
          : 0;
      alert(this.personal.gender);
    },
    // Upload Profile Image on change event of the input file
    onImageFileSelected(event) {
      this.personal.selectedImageFile = event.target.files[0];
      this.isImageFileSelected = true;
      // create a new FileReader to read this image and convert to base64 format
      var reader = new FileReader();
      reader.onload = e => {
        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
        // Read image as base64 and set to imageData
        this.imagePreview = e.target.result;
      };
      // Start the reader job - read file as a data url (base64 format)
      reader.readAsDataURL(this.personal.selectedImageFile);
      this.uploadImageFile();
    },
    uploadImageFile() {
      this.isImageFileSelected = false;
      this.isUploading = true;
      const fd = new FormData();
      fd.append(
        "image",
        this.personal.selectedImageFile,
        this.personal.selectedImageFile.name
      );
      this.$http
        .post("/api/testing/file_upload_local", fd, {
          onUploadProgress: uploadEvent => {
            this.uploadProgress = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            if (this.uploadProgress == 100) {
              this.isUploading = false;
            } else {
              this.isUploading = true;
            }
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    /**Form Validation and Error Handlin - begin */
    firstNameErrors() {
      console.log(this.$v.personal.firstName.$dirty);
      const errors = [];
      if (!this.$v.personal.firstName.$dirty) return errors;
      !this.$v.personal.firstName.minLength &&
        errors.push("First Name must be at leat 4 charcters");
      !this.$v.personal.firstName.required &&
        errors.push("First Name is required");

      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.personal.lastName.$dirty) return errors;
      !this.$v.personal.lastName.minLength &&
        errors.push("Last Name is required");
      !this.$v.personal.lastName.required &&
        errors.push("Last Name is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.other.email.$dirty) {
        return errors;
      } else {
        !this.$v.other.email.email && errors.push("Must be valid e-mail");
        !this.$v.other.email.required && errors.push("E-mail is required");
        !this.isEmailAvailable &&
          errors.push("This Email has already been taken!");
        return errors;
      }
    },
    nameInFullErrors() {
      const errors = [];
      if (!this.$v.personal.nameInFull.$dirty) {
        return errors;
      } else {
        !this.$v.personal.nameInFull.required &&
          errors.push("Full Name is required");
      }
      return errors;
    },
    dobErrors() {
      const errors = [];
      if (!this.$v.personal.dob.$dirty) {
        return errors;
      } else {
        !this.$v.personal.dob.required &&
          errors.push("Date of Birth is required");

        return errors;
      }
    },
    genderErrors() {
      const errors = [];
      if (!this.$v.personal.gender.$dirty) {
        return errors;
      } else {
        !this.$v.personal.gender.required && errors.push("Gender is required");

        return errors;
      }
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.personal.nic.$dirty) {
        return errors;
      } else {
        !this.$v.other.email.required && errors.push("NIC is required");

        return errors;
      }
    },
    maritalStatusErrors() {
      const errors = [];
      if (!this.$v.personal.maritalStatus.$dirty) {
        return errors;
      } else {
        !this.$v.personal.maritalStatus.required &&
          errors.push("Marital Status is required");

        return errors;
      }
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.personal.address.$dirty) {
        return errors;
      } else {
        !this.$v.personal.address.required &&
          errors.push("Address is required");

        return errors;
      }
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 5px;
}
</style>
