<template>
  <div class="container_about">
    <Name />   
    <div class="container_about_text">
      <div class="container_text">
        <p class="text-md-start">
          Développeur web ayant la capacité et les compétences nécessaires à la
          mise en oeuvre de nouveaux projets, je serais fier de mettre mon
          savoir faire à votre service
          <br />
          <br />
          Avançons ensemble . . .
        </p>
        <p class="text-md-start">
          Web developer with the ability and the skills needed to implementation
          of new projects, I would be proud to put my knowledge at your service
         <br />
          <br />
          Let's move forward together . . .
        </p>
      </div>
    </div>
    <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  </div>
</template>


<script>
import Name from "@/components/Name.vue";

export default {
  name: "about",
  components: {
    Name,
  },
};
</script>

<style scoped>
.container_about_text {
  display: flex;
  justify-content: center;
  padding-left: 80px;
}
.container_text {
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 70%;
  align-items: center;
}
.text-md-start {
  font-size: 1rem;
  font-family: "Libre Baskerville", serif;
  color: #a9f3f1;
  padding-bottom: 50px;
  max-width: 40pc;
}
.card {
  margin-bottom: 6pc;
  border-color: #060b0e;
}
.card-body {
  padding: 0rem 0rem;
}

/* --------[gliph]-------------------------- */
.tags2 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  color: #515152;
}
</style>
