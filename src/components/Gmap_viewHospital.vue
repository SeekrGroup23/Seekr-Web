<template>
  <div id="map" />
</template>

<script>
import gmapsInit from "../utils/gmaps";

export default {
  name: "App",
  props: {
    geoData: Object
  },
  data() {
    return {
      hospitalLocations: [],
      google: null,
      map: null,
      markers: null,
      mapContainer: null
    };
  },
  async created() {
    console.log("Created");
  },
  watch: {
    geoData: function(newVal, oldVal) {
      console.log(oldVal + " >>>>>>>> " + newVal);
      const map = new this.google.maps.Map(this.mapContainer, {
        // Set the Map Center to Sri Lanka
        center: {
          lat: parseFloat(newVal.geoCordinates._latitude),
          lng: parseFloat(newVal.geoCordinates._longitude)
        },
        zoom: 11
      });

      this.map = map;

      this.marker = new this.google.maps.Marker({
        position: {
          lat: parseFloat(newVal.geoCordinates._latitude),
          lng: parseFloat(newVal.geoCordinates._longitude)
        },
        title: ""
      });
      // To add the marker to the map, call setMap();
      this.marker.setMap(this.map);
    }
  },
  async mounted() {
    console.log("Mounted");

    try {
      const google = await gmapsInit();
      // console.log(google);
      this.google = google;

      this.mapContainer = document.querySelector("#map");
      // console.log(mapContainer);
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
