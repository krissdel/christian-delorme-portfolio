<template>
  <div class="home">
    <div id="wrapper">
      <h1>
        <span class="letter01">H</span>
        <span class="letter02">i</span>
        &nbsp;
        <span class="letter04">!</span>
        <br />
        <br />
        <span class="letter05">I</span>
        <span class="letter06">'</span>
        <span class="letter07">m</span>
        <br /><br />
        <span class="letter08">C</span>
        <span class="letter09">h</span>
        <span class="letter10">r</span>
        <span class="letter11">i</span>
        <span class="letter12">s</span>
        <span class="letter13">t</span>
        <span class="letter14">i</span>
        <span class="letter15">a</span>
        <span class="letter16">n</span>
        &nbsp;
        <span class="letter17">D</span>
        <span class="letter18">e</span>
        <span class="letter19">l</span>
        <span class="letter20">o</span>
        <span class="letter21">r</span>
        <span class="letter22">m</span>
        <span class="letter23">e</span>
        <br />
        <br />
        <span class="letter24">w</span>
        <span class="letter25">e</span>
        <span class="letter26">b</span>
        &nbsp;
        <span class="letter27">d</span>
        <span class="letter28">e</span>
        <span class="letter29">v</span>
        <span class="letter30">e</span>
        <span class="letter31">l</span>
        <span class="letter32">o</span>
        <span class="letter33">p</span>
        <span class="letter34">e</span>
        <span class="letter34">r</span>
      </h1>
    </div>
    <div class="tags">
      <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
    </div>   
  </div>
</template>

<script>

export default {
  name: "home",
  components: { 
  },
  props: {},
};
</script>


<style scoped>
.home {
  padding-left: 80px;
}
h1 span {
  opacity: 0;
}

/* -----[Animations des lettres]---------------------------------------- */
.letter01 {
  animation: letters 1s ease 0000ms forwards;
}
.letter02 {
  animation: letters 1s ease 0100ms forwards;
}
.letter04 {
  animation: letters 1s ease 0200ms forwards;
}
.letter05 {
  animation: letters 1s ease 0300ms forwards;
}
.letter06 {
  animation: letters 1s ease 0400ms forwards;
}
.letter07 {
  animation: letters 1s ease 0500ms forwards;
}
.letter08 {
  animation: letters 1s ease 0600ms forwards;
}
.letter09 {
  animation: letters 1s ease 0700ms forwards;
}
.letter10 {
  animation: letters 1s ease 0800ms forwards;
}
.letter11 {
  animation: letters 1s ease 0900ms forwards;
}
.letter12 {
  animation: letters 1s ease 1000ms forwards;
}
.letter13 {
  animation: letters 1s ease 1100ms forwards;
}
.letter14 {
  animation: letters 1s ease 1200ms forwards;
}
.letter15 {
  animation: letters 1s ease 1300ms forwards;
}
.letter16 {
  animation: letters 1s ease 1400ms forwards;
}
.letter17 {
  animation: letters 1s ease 1500ms forwards;
}
.letter18 {
  animation: letters 1s ease 1600ms forwards;
}
.letter19 {
  animation: letters 1s ease 1700ms forwards;
}
.letter20 {
  animation: letters 1s ease 1800ms forwards;
}
.letter21 {
  animation: letters 1s ease 1900ms forwards;
}
.letter22 {
  animation: letters 1s ease 2000ms forwards;
}
.letter23 {
  animation: letters 1s ease 2100ms forwards;
}

/* -----["web developer"]---------------------------------- */
.letter24 {
  animation: letters 1s ease 2200ms forwards;
}
.letter25 {
  animation: letters 1s ease 2300ms forwards;
}
.letter26 {
  animation: letters 1s ease 2400ms forwards;
}
.letter27 {
  animation: letters 1s ease 2500ms forwards;
}
.letter28 {
  animation: letters 1s ease 2600ms forwards;
}
.letter29 {
  animation: letters 1s ease 2700ms forwards;
}
.letter30 {
  animation: letters 1s ease 2800ms forwards;
}
.letter31 {
  animation: letters 1s ease 2900ms forwards;
}
.letter32 {
  animation: letters 1s ease 3000ms forwards;
}
.letter33 {
  animation: letters 1s ease 3100ms forwards;
}
.letter34 {
  animation: letters 1s ease 3200ms forwards;
}
.letter35 {
  animation: letters 1s ease 3300ms forwards;
}

@keyframes letters {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* -------------------------------- */
#wrapper {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
}
#wrapper h1,
h2 {
  white-space: normal;
  display: inline-block;
  font-size: 3em;
  font-weight: 200;
  color: #11ece5;
  text-shadow: #11ece5 1px 0 10px;
  position: relative;
  margin-top: 2vh;
}
img {
  vertical-align: middle;
  max-width: 125px;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
  margin-top: 21vh;
}

/* --------[gliph]-------------------------- */

.tags1 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: auto;
  top: 0;
  display: flex;
  color: #515152;
}

</style>


