<template>
  <v-card height="150px" color="">
    <v-container fluid class="pa-0">
      <v-layout justify-space-between row>
        <v-flex>
          <v-layout align-center justify-center column fill-height>
            <v-icon>{{ icon }}</v-icon>
          </v-layout>
        </v-flex>
        <v-flex grow>
          <v-layout row>
            <v-flex>
              <span class="title">{{ title }}</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <span class="body-2">{{ value }}</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    value: String
  },
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
