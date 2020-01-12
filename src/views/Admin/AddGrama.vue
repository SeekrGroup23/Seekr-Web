<template>
  <v-container fluid class="px-0 mx-0">
    <v-layout
      row
      wrap
      justify-space-between
      align-content-start
      class="py-4 px-4"
    >
      <v-card
        router-link
        to="editgrama"
        width="300"
        height="120"
        class="my-2 mx-auto"
        hover
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="120"
                color="purple lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">Registerd GramaNiladhari</h6>
              <span class="subheading font-weight-medium">{{
                gramaCount
              }}</span>
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card
        width="300"
        height="120"
        class="my-2 mx-auto"
        router-link
        to="gramaloc"
        hover
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="120"
                color="purple lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">person</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">GramaNiladhari Locations</h6>
              <!--               <span class="subheading font-weight-medium">{{
                gramaCount
              }}</span> -->
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Details</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card
        width="300"
        height="120"
        class="my-2 mx-auto"
        router-link
        to="gramaloc"
        hover
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout row>
            <v-flex shrink>
              <v-card
                height="120"
                color="purple lighten-2"
                dark
                width="100"
                flat
              >
                <v-container>
                  <v-icon size="50">room</v-icon>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex align="text-center" class="py-2 px-2">
              <h6 class="subheading">GramaNiladhari Locations</h6>
              <!--               <span class="subheading font-weight-medium">{{
                gramaCount
              }}</span> -->
              <v-layout column class="mt-2">
                <v-divider></v-divider>
                <h6 class="subheading pt-1 ">View Map</h6>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <v-flex md12>
        <div class="hide-overflow" style="position: relative;" id="nameBar">
          <v-toolbar
            absolute
            color="green darken-3"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques"
          >
            <v-toolbar-title>Add New Grama Niladhari</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div
            id="scrolling-techniques"
            class="scroll-y"
            style="max-height: 600px;"
          >
            <v-container style="height: 520px;" id="uForm">
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1"
                    >Basic Details</v-stepper-step
                  >
                  <v-divider></v-divider>
                  <v-stepper-step :complete="e1 > 2" step="2"
                    >Occupational Data</v-stepper-step
                  >
                  <v-divider></v-divider>
                  <v-stepper-step step="3">Sumbitting Data</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-12" height="460px" flat>
                      <form>
                        <v-text-field
                          v-model="grama.fName"
                          :error-messages="fNameErrors"
                          :counter="40"
                          label="First Name"
                          required
                          @input="$v.grama.fName.$touch()"
                          @blur="$v.grama.fName.$touch()"
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.lName"
                          :error-messages="lNameErrors"
                          :counter="40"
                          label="Last Name"
                          required
                          @input="$v.grama.lName.$touch()"
                          @blur="$v.grama.lName.$touch()"
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.nicNum"
                          :error-messages="nicErrors"
                          :counter="40"
                          label="NIC Number"
                          required
                          @input="$v.grama.nicNum.$touch()"
                          @blur="$v.grama.nicNum.$touch()"
                        ></v-text-field>
                        <v-select
                          v-model="grama.gender"
                          :items="items"
                          :rules="[v => !!v || 'Gender is required']"
                          label="Gender"
                          required
                        ></v-select>
                        <v-text-field
                          v-model="grama.email"
                          :error-messages="emailErrors"
                          label="E-mail"
                          required
                          @input="$v.grama.email.$touch()"
                          @blur="$v.grama.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.cNumber"
                          :error-messages="contactErrors"
                          label="Contact Number"
                          required
                          @input="$v.grama.cNumber.$touch()"
                          @blur="$v.grama.cNumber.$touch()"
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.resiAddress"
                          :error-messages="resiErrors"
                          label="Resident Address"
                          required
                          @input="$v.name.$touch()"
                          @blur="$v.name.$touch()"
                        ></v-text-field>
                      </form>
                    </v-card>
                    <v-btn color="indigo darken-3" dark @click="e1 = 2"
                      ><v-icon>chevron_right</v-icon></v-btn
                    >
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-12" height="350px" flat>
                      <form>
                        <v-select
                          v-model="grama.province"
                          :items="provinces"
                          :rules="[v => !!v || 'Province is required']"
                          label="Province"
                          required
                        ></v-select>
                        <v-select
                          v-model="grama.district"
                          :items="districts"
                          :rules="[v => !!v || 'District is required']"
                          label="District"
                          required
                        ></v-select>
                        <v-text-field
                          v-model="grama.division"
                          label="Grama Niladhari Division"
                          :rules="[v => !!v || 'Division is required']"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.divisionNum"
                          label="Division Number"
                          :rules="[v => !!v || 'Division Number is required']"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="grama.regNum"
                          label="Registerd Number"
                          :rules="[v => !!v || 'Registerd Number is required']"
                          required
                        ></v-text-field>
                      </form>
                    </v-card>
                    <v-btn color="indigo darken-3" @click="e1 = 3" dark
                      ><v-icon>chevron_right</v-icon></v-btn
                    >
                    <v-btn color="blue darken-3" text @click="e1 = 1" dark
                      ><v-icon>chevron_left</v-icon></v-btn
                    >
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-12" height="50px" flat> </v-card>
                    <v-btn color="blue darken-3" text @click="e1 = 2" dark
                      ><v-icon>chevron_left</v-icon></v-btn
                    >
                    <v-btn color="success" v-on:click="submit()">submit</v-btn>
                    <v-btn color="#FF6F00" dark v-on:click="e1 = clear()"
                      >Add New</v-btn
                    >
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-container>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    grama: {
      fName: { required, minLength: minLength(1) },
      lName: { required, minLength: minLength(1) },
      gender: { required },
      nicNum: { required },
      cNumber: { required },
      resiAddress: { required },
      province: { required },
      district: { required },
      division: { required },
      divisionNum: { required },
      regNum: { required },
      email: { required, email }
    }
  },

  data() {
    return {
      e1: 0,
      gramaCount: 0,
      grama: {
        fName: "",
        lName: "",
        gender: "",
        nicNum: "",
        email: "",
        cNumber: "",
        resiAddress: "",
        province: "",
        district: "",
        division: "",
        divisionNum: "",
        regNum: ""
      },
      items: ["Male", "Female", "Other"],
      //province: null,
      provinces: [
        "Western",
        "Southern",
        "Central",
        "Eastern",
        "Nothern",
        "North Western",
        "North Central",
        "Uva",
        "Sabaragamuwa"
      ],

      districts: [
        "Ampara",
        "Anuradhapura",
        "Badulla",
        "Batticaloa",
        "Colombo",
        "Galle",
        "Gampaha",
        "Hambantota",
        "Jaffna",
        "Kalutara",
        "Kandy",
        "Kegalle",
        "Kilinochchi",
        "Kurunegala",
        "Mannar",
        "Matale",
        "Matara",
        "Monaragala",
        "Mullaitivu",
        "Nuwara Eliya",
        "Polonnaruwa",
        "Puttalam",
        "Ratnapura",
        "Trincomalee",
        "Vavuniya"
      ]
    };
  },
  computed: {
    fNameErrors() {
      const errors = [];
      if (!this.$v.grama.fName.$dirty) return errors;
      !this.$v.grama.fName.minLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.grama.fName.required && errors.push("First Name is required.");
      return errors;
    },
    lNameErrors() {
      const errors = [];
      if (!this.$v.grama.lName.$dirty) return errors;
      !this.$v.grama.lName.minLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.grama.lName.required && errors.push("Last Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.grama.email.$dirty) {
        return errors;
      } else {
        !this.$v.grama.email.email && errors.push("Must be valid e-mail");
        !this.$v.grama.email.required && errors.push("E-mail is required");
        /* !this.isEmailAvailable &&
            errors.push("This Email has already been taken!"); */
        return errors;
      }
    },
    contactErrors() {
      const errors = [];
      if (!this.$v.grama.cNumber.$dirty) {
        return errors;
      } else {
        !this.$v.grama.cNumber.required &&
          errors.push("Contact Number is required");
        /* !this.isEmailAvailable &&
            errors.push("This Contact Number has already been taken!"); */
        return errors;
      }
    },
    nicErrors() {
      const errors = [];
      if (!this.$v.grama.nicNum.$dirty) {
        return errors;
      } else {
        !this.$v.grama.nicNum.required && errors.push("NIC is required");
        return errors;
      }
    }
  },

  mounted() {
    this.$http.get("/admin/gramacount").then(response => {
      //console.log(response.data);
      this.gramaCount = response.data;
      console.log(response.data);
    });
  },
  methods: {
    submit() {
      this.$v.grama.$touch();
      if (!this.$v.grama.$invalid) {
        this.$http
          .post("/admin/add/grama", {
            fName: this.grama.fName,
            lName: this.grama.lName,
            gender: this.grama.gender,
            nicNum: this.grama.nicNum,
            email: this.grama.email,
            cNumber: this.grama.cNumber,
            resiAddress: this.grama.resiAddress,
            province: this.grama.province,
            district: this.grama.district,
            division: this.grama.division,
            divisionNum: this.grama.divisionNum,
            regNum: this.grama.regNum
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },

    clear() {
      this.$v.grama.$reset();
      (this.grama.fName = ""),
        (this.email = ""),
        (this.grama.fName = ""),
        (this.grama.lName = ""),
        (this.grama.gender = ""),
        (this.grama.nicNum = ""),
        (this.grama.email = ""),
        (this.grama.cNumber = ""),
        (this.grama.resiAddress = ""),
        (this.grama.province = ""),
        (this.grama.district = ""),
        (this.grama.division = ""),
        (this.grama.divisionNum = ""),
        (this.grama.regNum = "");
      return 1;
    }
  }
};
</script>

<style scoped>
#nameBar {
  margin-top: 10px;
}

#uForm {
  margin-top: 30px;
}
</style>
