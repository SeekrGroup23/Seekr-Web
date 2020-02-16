<template>
  <div id="map" />
</template>

<script>
import gmapsInit from "../utils/gmaps";
import { bus } from "../main";

export default {
  name: "App",
  data() {
    return {
      hospitalLocations: [],
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
    console.log("Created");

    bus.$on("update_hospital_map", data => {
      this.filterAndUpdateMap(data.province, data.district, data.division);
    });

    // Get all Hospital Data
    await this.$http
      .get("/api/hospital")
      .then(res => {
        this.resData = res.data;
        // console.log(res);
        res.data.forEach(hospital => {
          this.hospitalLocations.push({
            location: hospital.geoCordinates,
            name: hospital.name
          });
        });

        this.hospitalLocations.forEach(hospital => {
          // console.log(hospital.location);

          this.markers = new this.google.maps.Marker({
            position: {
              lat: parseFloat(hospital.location._latitude),
              lng: parseFloat(hospital.location._longitude)
            },
            title: hospital.name
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
  },
  methods: {
    filterAndUpdateMap(province, district, division) {
      this.markers.setMap(null);
      // this.marker = [];
      this.hospitalLocations = [];

      if (province != "All" && district == "All" && division == "All") {
        console.log("01");

        this.resData.forEach(hospital => {
          if (hospital.province == province) {
            this.hospitalLocations.push({
              location: hospital.geoCordinates,
              name: hospital.name
            });
          }
        });

        console.log("Select >> " + province);
      } else if (province != "All" && district != "All" && division == "All") {
        console.log("02");
        this.resData.forEach(hospital => {
          if (hospital.province == province && hospital.district == district) {
            this.hospitalLocations.push({
              location: hospital.geoCordinates,
              name: hospital.name
            });
          }
        });
      } else if (province != "All" && district != "All" && division != "All") {
        console.log("03");

        this.resData.forEach(hospital => {
          if (
            hospital.province == province &&
            hospital.district == district &&
            hospital.division == division
          ) {
            this.hospitalLocations.push({
              location: hospital.geoCordinates,
              name: hospital.name
            });
          }
        });
      } else {
        console.log("04");
        this.resData.forEach(hospital => {
          this.hospitalLocations.push({
            location: hospital.geoCordinates,
            name: hospital.name
          });
        });
      }

      this.hospitalLocations.forEach(hospital => {
        console.log(hospital.location);

        this.markers = new this.google.maps.Marker({
          position: {
            lat: parseFloat(hospital.location._latitude),
            lng: parseFloat(hospital.location._longitude)
          },
          title: hospital.name
          // map: this.map
        });
        // To add the marker to the map, call setMap();
        this.markers.setMap(this.map);
        console.log(this.markers);
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
