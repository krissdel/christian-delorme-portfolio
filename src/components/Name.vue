<template>
  <div class="name">
            <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>

    <div id="wrapper">
      <h1>
        <span class="letter01">C</span><span class="letter02">h</span
        ><span class="letter03">r</span><span class="letter04">i</span
        ><span class="letter05">s</span><span class="letter06">t</span
        ><span class="letter07">i</span><span class="letter08">a</span>
        <span class="letter09">n</span>
        &nbsp;
        <span class="letter11">D</span>
        <span class="letter12">e</span><span class="letter13">l</span>
        <span class="letter14">o</span><span class="letter15">r</span>
        <span class="letter16">m</span><span class="letter17">e</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
};
</script>


<style lang="css" scoped>
.name {
  padding-left: 80px;
  padding-bottom: 10pc;
}
.tags1 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: auto;
  top: 0;
  display: flex;
  color: #515152;
}
/* -----[Réglages du bloc de texte général]-------------*/
#wrapper {
  text-align: center;
  font-family: "Libre Baskerville", serif;
}
#wrapper h1 {
  white-space: normal;
  display: inline-block;
  font-size: 3em;
  font-weight: 200;
  color: #11ece5;
  text-shadow: #11ece5 1px 0 10px;
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  margin-top: 2vh;
}

/* -----[Animations des lettres]---------------------- */

h1 span {
  opacity: 0;
}
.letter01 {
  animation: letters 1s ease 0000ms forwards;
}
.letter02 {
  animation: letters 1s ease 0200ms forwards;
}
.letter03 {
  animation: letters 1s ease 0400ms forwards;
}
.letter04 {
  animation: letters 1s ease 0600ms forwards;
}
.letter05 {
  animation: letters 1s ease 0800ms forwards;
}
.letter06 {
  animation: letters 1s ease 1000ms forwards;
}
.letter07 {
  animation: letters 1s ease 1200ms forwards;
}
.letter08 {
  animation: letters 1s ease 1400ms forwards;
}
.letter09 {
  animation: letters 1s ease 1600ms forwards;
}

.letter11 {
  animation: letters 1s ease 2000ms forwards;
}
.letter12 {
  animation: letters 1s ease 2200ms forwards;
}
.letter13 {
  animation: letters 1s ease 2400ms forwards;
}
.letter14 {
  animation: letters 1s ease 2600ms forwards;
}
.letter15 {
  animation: letters 1s ease 2800ms forwards;
}
.letter16 {
  animation: letters 1s ease 3000ms forwards;
}
.letter17 {
  animation: letters 1s ease 3200ms forwards;
}

@keyframes letters {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* -----[souslignage]---------------------------------------- */
h1 {
  font-family: "Libre Baskerville", serif;
  color: rgb(17, 236, 229);
}
h1::after {
  content: "";
  display: block;
  background: linear-gradient(
    45deg,
    #11ece5,
    #11ece5,
    #11ece5,
    #11ece5,
    #11ece5
  );
  height: 2px;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  width: 0%;
  opacity: 0;
  margin-top: 0.2em;
  animation: lineWidth 4s ease-in-out forwards;
}
@keyframes lineWidth {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

</style>
