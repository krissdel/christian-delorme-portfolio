<template>
  <div id="app">
    <Mousemove />
    <Sound />
    <NavBar />
    
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sound from "./components/Sound.vue";
import Mousemove from "./components/Mousemove.vue";

export default {
  name: "App",

  components: {
    Mousemove,
    NavBar,
    Sound
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
  overflow-x: hidden ;
}
</style>
