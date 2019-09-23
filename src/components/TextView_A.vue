<template>
  <v-container class="pa-0 ma-0">
    <v-layout>
      <v-flex>
        <span :class="type">{{ text }}</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    type: String
  },
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
