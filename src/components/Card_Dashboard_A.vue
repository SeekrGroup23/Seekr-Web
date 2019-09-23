<template>
  <v-card height="150px" color="">
    <v-layout justify-space-between row>
      <v-flex>
        <v-icon>email</v-icon>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    text: String
  },
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
