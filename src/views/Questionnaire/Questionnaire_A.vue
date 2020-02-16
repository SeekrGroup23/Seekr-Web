<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-layout>
          <h5 class="subheading">Questionnaire</h5>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-stepper v-model="e13" vertical non-linear>
          <!-- Step 3 -->
          <v-stepper-step step="1" complete>Family</v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <!-- Step 4 -->
          <v-stepper-step step="4" complete>Occupation</v-stepper-step>

          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <!-- Step 5 -->
          <v-stepper-step step="5" complete>Medical</v-stepper-step>

          <v-stepper-content step="5">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <!-- Step 6 -->
          <v-stepper-step step="6" complete>Agro Chemical Usage</v-stepper-step>

          <v-stepper-content step="6">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :rules="[() => false]" step="7">
            Ad templates
            <small>Alert message</small>
          </v-stepper-step>

          <v-stepper-content step="7">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="8">View setup instructions</v-stepper-step>

          <v-stepper-content step="8">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { bus } from "../../main";

export default {
  components: {},

  data: () => {
    return {
      e13: 4,
      loadingReg: false,
      regCompleted: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    registerAndCont() {
      // To Trigger the Function tp perform Registration in Questionnaire_Registration Component
      bus.$emit("regAndContClicked", "Testing");
    },
    genInfoAndCont() {
      // To Trigger the Function tp perform Registration in Questionnaire_Registration Component
      bus.$emit("genInfoAndContClicked", "Testing");
    }
  },
  created() {
    if (this.$store.state.questionnaire.state != 0) {
      this.e13 = this.$store.state.questionnaire.state + 1;
    }
    bus.$on("reg_ok", data => {
      console.log(data);
      this.loadingReg = false;
      this.$store.state.questionnaire.state = 1;
      this.e13 = 2;

      this.$store.state.questionnaire.firstName = data.firstName;
      this.$store.state.questionnaire.lastName = data.lastName;
    });
    bus.$on("genInfo_Ok", data => {
      console.log("genInfo OK");

      this.$store.state.questionnaire.state = 2;
      this.e13 = 3;

      this.$store.state.questionnaire.firstName = data.firstName;
      this.$store.state.questionnaire.lastName = data.lastName;
    });
    bus.$on("runLoading_reg", () => {
      console.log("LoaderRunning");
      this.loadingReg = true;
    });
  }
};
</script>

<style scoped></style>
