<template>
  <div class="App" />
</template>

<script>
import gmapsInit from "../../utils/gmaps";

export default {
  name: "App",
  async mounted() {
    try {
      const locations = [
        {
          position: {
            lat: 7.940268,
            lng: 81.0174377
          }
        },
        {
          position: {
            lat: 8.1433822,
            lng: 80.9546902
          }
        },
        {
          position: {
            lat: 8.0573571,
            lng: 81.0220694
          }
        },
        {
          position: {
            lat: 8.0573571,
            lng: 81.0220694
          }
        }

        // ...
      ];
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);
      map.setZoom(14);

      geocoder.geocode({ address: "Sri Lanka" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
        const markers = locations.map(
          x => new google.maps.Marker({ ...x, map })
        );
      });
    } catch (error) {
      console.error(error);
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

.App {
  width: 100vw;
  height: 100vh;
}
</style>
