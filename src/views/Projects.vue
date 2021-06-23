<template>
  <div class="wrapper">
    <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>

    <div id="projects">
      <h1>
        <span class="letter01">P</span><span class="letter02">r</span
        ><span class="letter03">o</span><span class="letter04">j</span
        ><span class="letter05">e</span><span class="letter06">c</span
        ><span class="letter07">t</span><span class="letter08">s</span>
      </h1>
    </div>

    <div class="tags">
      <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>

    <div class="grid-container">
      <div class="project-listing">
        <article>
          <h2 class="project-title">Rextense</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/Rextense"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a href="https://rextense.com/" target="_blank"
              ><img src="../assets/image/rextense.png" alt="image rextense " />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">Groupomania</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/groupomania"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a href="https://krissdel.github.io/groupomania/" target="_blank">
              <img
                src="../assets/image/groupomania_projet2.png"
                alt="image groupomania"
              />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">So Pekocko</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/projet-6"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a
              href="https://github.com/krissdel/projet-6/edit/main/README.md"
              target="_blank"
            >
              <img
                src="../assets/image/so_pekocko2.png"
                alt="image so_pekocko"
              />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">Orinoco</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/orinoco-website"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a
              href="https://github.com/krissdel/orinoco-website/new/master?readme=1"
              target="_blank"
            >
              <img src="../assets/image/orinoco2.png" alt="image orinoco" />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">La Chouette</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/chouetteafter"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a href="https://krissdel.github.io/chouetteafter/" target="_blank">
              <img
                src="../assets/image/chouette_agence2.png"
                alt="image la chouette agence"
              />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">Ohmyfood</h2>
          <a
            class="project-link"
            href="https://github.com/krissdel/ohmyfood"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a href="https://krissdel.github.io/ohmyfood/" target="_blank">
              <img src="../assets/image/ohmyfood2.png" alt="image ohmyfood" />
            </a>
          </div>
        </article>
      </div>

      <div class="project-listing">
        <article>
          <h2 class="project-title">CV</h2>

          <a
            class="project-link"
            href="https://github.com/krissdel/CV4"
            target="_blank"
            >Lien Github</a
          >
          <div class="project-image">
            <a href="https://krissdel.github.io/CV4/" target="_blank">
              <img src="../assets/image/cv2.png" alt="image projet CV" />
            </a>
          </div>
        </article>
      </div>
    </div>
    <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  </div>
</template>

<script>
export default {
  name: "projects",
  components: {},
};
</script>


<style scoped>
.wrapper {
  max-width: 900px;
  margin: auto auto;
  padding-left: 80px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 1.5fr 1fr;
  gap: 2rem;
  padding: 10px;
}
h1 {
  color: rgb(17, 236, 229);
  margin-top: 10%;
  margin-bottom: 10%;
}
.project-listing {
  display: grid;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  border-radius: 70px 10px 10px 10px;
  text-align: center;
  padding: 1em;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-row-gap: 0em;
  background: linear-gradient(90deg, white 0%, #11ece5 100%);
  transition: all 500ms ease-in-out;
  animation: fade-in-up 2s backwards;
}

.project-listing:hover {
  transform: translate(0, -2.5rem) rotate(-3deg) scale(1.3);
}
.project-title {
  font-size: 2rem;
}
img {
  width: 100%;
  height: auto;
}
/* =====[Animations]=============================== */

@keyframes fade-in-up {
  0% {
    transform: translatey(100%);
    opacity: 0%;
  }

  100% {
    transform: translatey(0);
    opacity: 100%;
  }
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
.tags2 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  color: #515152;
}
.tags4 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  display: flex;
  top: 0;
  color: #515152;
  margin-left: 18vw;
  margin-top: 21vh;
}
.tags5 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  color: #515152;
  margin-left: 66vw;
  margin-top: 21vh;
}

/* *************************************************** */
#projects {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
#projects h1 {
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
/* -----[Animations des lettres]---------------------------------------- */
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

@keyframes letters {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* -----[souslignage]---------------------------------------- */
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
  height: 1px;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  width: 0%;
  opacity: 0;
  margin-top: 0.2em;
  animation: lineWidth 3s ease-in-out forwards;
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