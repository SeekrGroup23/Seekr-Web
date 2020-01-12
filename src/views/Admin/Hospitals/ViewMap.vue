<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View In Map
        </h4>
      </v-flex>
    </v-layout>
    <v-layout
      row
      justify-space-between
      align-content-start
      class="py-4 px-2"
      wrap
    >
    </v-layout>

    <v-divider></v-divider>

    <v-layout>
      <gmap_hospitals></gmap_hospitals>
    </v-layout>
  </v-container>
</template>

<script>
import gmap_hospitals from "../../../components/Gmap_hospitals";
export default {
  components: {
    gmap_hospitals
  },
  data: () => {
    return {};
  },
  async mounted() {},
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
