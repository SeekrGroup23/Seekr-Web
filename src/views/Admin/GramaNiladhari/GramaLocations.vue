<template>
  <heat-map
    :points="data"
    :lat="getCenterMap.lat"
    :lng="getCenterMap.lng"
    :width="1500"
    :height="680"
  />
</template>

<script>
import HeatMap from "../../../components/Heat";

export default {
  //name: "view-page",
  components: { HeatMap },
  data: () => {
    return {
      data: [
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 7.940268, lng: 81.0174377, weight: 10.0 },
        { lat: 8.1433822, lng: 80.9546902, weight: 0.6 },
        { lat: 8.0573571, lng: 81.0220694, weight: 8.0 }
      ]
    };
  },
  methods: {
    getCenterMap() {
      return {
        lat: this.data[this.data.length - 1].lat,
        lng: this.data[this.data.length - 1].lng
      };
    }
  }
};
</script>
