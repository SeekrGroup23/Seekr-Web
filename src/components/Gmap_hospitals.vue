<template>
  <div id="map" />
</template>

<script>
import gmapsInit from "../utils/gmaps";

export default {
  name: "App",
  async mounted() {
    try {
      const google = await gmapsInit();
      console.log(google);

      const mapContainer = document.querySelector("#map");
      console.log(mapContainer);

      const map = new google.maps.Map(mapContainer, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
      console.log(map);
    } catch (error) {
      console.error("Error >> " + error);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#map {
  height: 100vh;
  width: 100%;
}
</style>
