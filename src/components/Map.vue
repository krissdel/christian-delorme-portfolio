<template>
  <div class="map">
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="{
          lat: 48.9901469,
          lng: 1.8104637,
        }"
        :clickable="false"
        :draggable="false"
      />
    </GmapMap>

  </div>
</template>

<script>

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 48.9901469, lng: 1.8104637 },
        markers: [
        {
          position: {
            lat: 48.9901469,
            lng: 1.8104637,
          },
        },
      ],
      selectedMarker: null,
    };
  },
};
</script>

<style scoped>

</style>