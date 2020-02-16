<template>
  <div id="map" />
</template>

<script>
import gmapsInit from "../utils/gmaps";

export default {
  name: "App",
  data() {
    return {
      patientsLocations: [],
      google: null,
      map: null,
      markers: [],
      province: "",
      district: "",
      division: "",
      resData: null
    };
  },
  async created() {
    // Get all Patient Data
    await this.$http
      .get("/api/patient/all/" + this.$store.state.gnDivision)
      .then(res => {
        this.resData = res.data;
        res.data.forEach(patient => {
          if (patient.geoCordinates != "") {
            this.patientsLocations.push({
              location: patient.geoCordinates
            });
          }
        });

        this.patientsLocations.forEach(patient => {
          // console.log(hospital.location);

          this.markers = new this.google.maps.Marker({
            position: {
              lat: parseFloat(patient.location._latitude),
              lng: parseFloat(patient.location._longitude)
            },
            title: ""
          });
          // To add the marker to the map, call setMap();
          this.markers.setMap(this.map);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  async mounted() {
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
      //   console.error("Error >> " + error);
    }

    this.setMarkers();
  },
  methods: {
    setMarkers() {
      // Get all Patient Data
      this.$http
        .get("/api/patient/all/" + this.$store.state.gnDivision)
        .then(res => {
          this.resData = res.data;
          //   console.log(res.data);
          res.data.forEach(patient => {
            if (patient.geoCordinates != "") {
              this.patientsLocations.push({
                location: patient.geoCordinates
              });
            }
          });

          this.patientsLocations.forEach(patient => {
            // console.log(hospital.location);

            this.markers = new this.google.maps.Marker({
              position: {
                lat: parseFloat(patient.location._latitude),
                lng: parseFloat(patient.location._longitude)
              },
              title: ""
            });
            // To add the marker to the map, call setMap();
            this.markers.setMap(this.map);
          });
        })
        .catch(() => {
          //   console.log(err);
        });
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
