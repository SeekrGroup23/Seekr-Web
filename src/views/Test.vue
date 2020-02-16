<template>
  <vue-google-heatmap :points="points" :width="400" :height="350" />
</template>

<script>
export default {
  data() {
    return {
      points: [
        { lat: 7.940268, lng: 81.0174377 },
        { lat: 8.1433822, lng: 80.9546902 }
      ]
    };
  }
};
</script>
