<template>
  <div class="wrapper">
    <div>
      <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>
    <div id="skills">
      <h1>
        <span class="letter01">S</span>
        <span class="letter02">k</span>
        <span class="letter03">i</span>
        <span class="letter04">l</span>
        <span class="letter05">l</span>
        <span class="letter06">s</span>
      </h1>
    </div>
    <div class="words">
         <kinesis-container>
      <kinesis-element :strength="30">
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler">
      </wordcloud>
</kinesis-element>
    </kinesis-container>

     
    </div>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: "Skill",


 components: {
    wordcloud,
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [{
          "name": "Vue.js",
          "value": 26
        },
        {
          "name": "node.js",
          "value": 19
        },
        {
          "name": "express",
          "value": 18
        },
        {
          "name": "Javascript",
          "value": 16
        },
        {
          "name": "SQL",
          "value": 15
        },
        {
          "name": "Sass",
          "value": 9
        },
        {
          "name": "HTML",
          "value": 9
        },
        {
          "name": "GitHub",
          "value": 9
        },
        {
          "name": "CSS",
          "value": 9
        },
        {
          "name": "NPM",
          "value": 15
        },
        {
          "name": "BEM",
          "value": 9
        },
        // -----[soft skills]-------------------
         {
          "name": "attentive",
          "value": 19
        },
        {
          "name": "confident",
          "value": 18
        },
        {
          "name": "critical",
          "value": 16
        },
        {
          "name": "multi-tasker",
          "value": 15
        },
        {
          "name": "conceptual",
          "value": 9
        },
        {
          "name": "creative",
          "value": 9
        },
        {
          "name": "analytical",
          "value": 9
        },
        {
          "name": "calm",
          "value": 9
        },
        {
          "name": "self-controlled",
          "value": 15
        },
       
      ]
    }
  }


};
</script>








<style scoped>
.words {
    padding-left: 75px;
}
#skills {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
  margin-bottom: 10vh;
  padding-left: 80px;
}
#skills h1 {
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
/* -----[glyph]----------------------------------- */
.tags4 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  display: flex;
  top: 0;
  color: #515152;
  margin-left: 18vw;
}
/* -----[animation letters]----------------------- */
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
  height: 2px;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  width: 0%;
  opacity: 0;
  margin-top: 0.2em;
  animation: lineWidth 2s ease-in-out forwards;
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

/* *********************************************** */
h1 {
  font-family: "Libre Baskerville", serif;
  color: rgb(17, 236, 229);
}
</style>