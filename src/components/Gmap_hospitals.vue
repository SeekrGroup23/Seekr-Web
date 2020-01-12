<template>
  <div id="map" />
</template>

<script>
import gmapsInit from "../utils/gmaps";

export default {
  name: "App",
  data() {
    return {
      hospitalLocations: [],
      google: null,
      map: null,
      markers: null
    };
  },
  async created() {
    console.log("Created");

    // Get all Hospital Data
    await this.$http
      .get("/api/hospital")
      .then(res => {
        // console.log(res);
        res.data.forEach(hospital => {
          this.hospitalLocations.push({
            location: hospital.geoCordinates,
            name: hospital.name
          });
        });

        this.hospitalLocations.forEach(hospital => {
          console.log(hospital.location);

          this.marker = new this.google.maps.Marker({
            position: {
              lat: parseFloat(hospital.location._latitude),
              lng: parseFloat(hospital.location._longitude)
            },
            title: hospital.name
          });
          // To add the marker to the map, call setMap();
          this.marker.setMap(this.map);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  async mounted() {
    console.log("Mounted");

    try {
      const google = await gmapsInit();
      // console.log(google);
      this.google = google;

      const mapContainer = document.querySelector("#map");
      // console.log(mapContainer);

      const map = new google.maps.Map(mapContainer, {
        // Set the Map Center to Sri Lanka
        center: { lat: 7.4224, lng: 80.8326 },
        zoom: 8
      });

      this.map = map;
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
