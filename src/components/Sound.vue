<template>
  <div class="sound">
    <button
      class="btn"
      @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
      v-for="audio in audios"
      :key="audio.id"
    >
      <span style="font-size: 1.5em; color: white">
        <i class="fas fa-music"></i
      ></span>
      <br />
      {{ audio.isPlaying ? "ON" : "OFF" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Sound",
  data() {
    return {
      audios: [
        {
          file: new Audio(require("../assets/audio/SOUND.mp3")),
          isPlaying: false,
        },
      ],
    };
  },
  methods: {
    play(audio) {
      audio.isPlaying = true;
      audio.file.play();
    },

    pause(audio) {
      audio.isPlaying = false;
      audio.file.pause();
        audio.file.currentTime = 0;
    },
  },
};
</script>

<style>
/* -----[button sound]--------------- */
.sound {
    padding-left: 80px;

}
.btn {
  font-family: "Libre Baskerville", serif;
  border-color: rgb(17, 236, 229);
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.4px;
  width: 75px;
  border-radius: 100px;
  margin-bottom: 20px;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>