<template>
  <div id="nav_bar">
    <nav class="nav_bar_icons">
      <router-link to="/homeLogo">
        <img src="../assets/image/Ellipse 1.png" alt="Image logo" class="img" />
      </router-link>
      <!-- <b>Home</b> -->
      <router-link to="/">
        <span id="icon" @click="colorOn" style="font-size: 1.5em; color: white">
          <i class="fas fa-home"></i>
        </span>
      </router-link>
      <!-- <b>About</b> -->
      <router-link to="/about">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-user"></i>
        </span>
      </router-link>
      <!-- <b>Skill</b> -->
      <router-link to="/skill">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-eye"></i>
        </span>
      </router-link>
      <!-- <b>My Projects</b> -->
      <router-link to="/projects">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-briefcase"></i>
        </span>
      </router-link>
      <!-- <b>Contact</b>  -->
      <router-link to="/contact">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-envelope"></i> </span
      ></router-link>

      <div style="top: 0px; left: 100%; width: 2%" class="GlowingLine1"></div>

      <div class="GlowingLine2" style="top: 10pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine2" style="top: 35pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine3" style="top: 25pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine4" style="top: 45pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine4" style="top: 80pc; left: 100%; width: 2%"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    colorOn() {

    },
  },
};
</script>

<style scoped>
/* -----[nav bar]--------------------- */

#nav_bar {
  background: #0f1724;
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  min-height: 500px;
  border: 1px solid rgb(42 97 95);
}

/* -----[icons]------------------------------------- */
.nav_bar_icons {
  background: #181818;
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;
  min-height: 500px;
}
/* -----[icons:hover]----------------------------------- */
.fa-home:hover {
  color: rgb(17, 236, 229);
}
.fa-user:hover {
  color: rgb(17, 236, 229);
}
.fa-eye:hover {
  color: rgb(17, 236, 229);
}
.fa-briefcase:hover {
  color: rgb(17, 236, 229);
}
.fa-envelope:hover {
  color: rgb(17, 236, 229);
}
.img {
  padding: 10px;
  height: 40px;
}

/* =====[glowing lines]================================== */
.GlowingLine1 {
  position: absolute;
  height: 63px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine2 {
  position: absolute;
  height: 20px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine3 {
  position: absolute;
  height: 108px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine4 {
  position: absolute;
  height: 115px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
</style>