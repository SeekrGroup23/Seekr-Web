<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <!-- <v-img src="../assets/logo.png" alt="logo" aspect-ratio="1"></v-img> -->
      <img class="logo" src="../assets/logo.png" alt="" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 15%;
  height: 8%;
}
</style>


