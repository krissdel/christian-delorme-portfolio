<template>
  <div class="container">
    <div class="container_contact">
      <div id="contact">
        <h1>
          <span class="letter01">C</span><span class="letter02">o</span
          ><span class="letter03">n</span><span class="letter04">t</span
          ><span class="letter05">a</span><span class="letter06">c</span
          ><span class="letter07">t</span>
        </h1>
      </div>

      <div class="tags">
        <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
        <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
      </div>

      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              v-model="First_name"
              name="First_name"
              required
            />
          </div>

          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last_name"
              v-model="Last_name"
              name="Last_name"
              required
            />
          </div>
          <div class="col">
            <label for="inputEmail" class="form-label"></label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              v-model="email"
              name="email"
              required
            />
          </div>
          <div class="col">
            <label for="Textarea"></label>
            <textarea
              class="form-control"
              placeholder="Leave a message here"
              id="Textarea"
              style="height: 100px"
              name="message"
              v-model="message"
              required
            ></textarea>
          </div>
        </div>
        <div class="col-btn">
          <input class="btn btn-primary" type="submit" value="Send" />
        </div>
      </form>
    </div>

    <div class="map">
      <Map />
    </div>
    <span class="tags5"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default {
  name: "Contact",
  components: {
    Map,
  },

  data() {
    return {
      First_name: "",
      Last_name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_s13wx1p",
          "template_o0rw5dk",
          e.target,
          "user_PQSMzr2oEWM5M28Wd2gg2",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );

        Swal.fire({
          title: "thanks!",
          text: "Your email has been sent !",
          icon: "success",
          confirmButtonText: "Cool",
          confirmButtonColor: "#11ece5",
        });
      } catch (error) {
        console.log({ error });
      }
      // -----[Reset form] ------------------------------
      this.First_name = "";
      this.Last_name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.map {
  padding: 10px;
}
h1 {
  color: rgb(17, 236, 229);
}
.container {
  max-width: 800px;
  padding-top: 5pc;
  width: fit-content;
  width: auto;
  padding-left: 80px;
}
.container_contact {
  margin-bottom: 10pc;
}
.col {
  padding-bottom: 5pc;
}

.row {
  flex-direction: column;
  padding: 20px;
}

label {
  display: none;
}
.col-btn {
  padding-top: 4pc;
}

.btn-primary {
  color: #fff;
  background-color: #4aa19e;
  border-color: #11ece5;
  width: 13pc;
}
.btn-primary:hover {
  background-color: #11ece5;
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
  margin-top: 21vh;
}
.tags6 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  color: #515152;
  margin-top: 21vh;
}
#contact {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
#contact h1 {
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
</style>
