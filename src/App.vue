<template>
  <div id="app">
    <Sound />
    <NavBar />
    <MouseMove />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sound from "./components/Sound.vue";
import MouseMove from "@/components/MouseMove.vue";

export default {
  name: "App",

  components: {
    NavBar,
    Sound,
    MouseMove
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #060b0e;
  font-weight: bold;
}
</style>
