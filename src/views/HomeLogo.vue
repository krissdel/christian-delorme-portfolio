<template>
  <div class="homeLogo">
    <div id="slide0" class="slide">
      <About />
      <Arrow />
    </div>

    <div id="slide1" class="slide">
      <Skill />
      <Arrow />
    </div>

    <div id="slide2" class="slide">
      <Projects />
      <Arrow />
    </div>

    <div id="slide3" class="slide">
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "./About.vue";
import Skill from "./Skill.vue";
import Arrow from "@/components/Arrow.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "homeLogo",

  components: {
    About,
    Skill,
    Projects,
    Contact,
    Arrow,
  },
  props: {},
};
</script>


<style scoped>
/* ---[slide]------------------------------ */

.slide {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  transform-style: inherit;
}
</style>


