<template>
  <div class="wrapper">
    <div class="box">
      <div class="inner-box">
        <div class="circle" :style="styles" />
      </div>
    </div>
  </div>
</template>

<script>
document.onmousemove = animatedCircles;

        const colors = ['#11ece5'];
        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';

            let color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = 'all 1s linear 0s';

            circle.style.left = circle.offsetLeft - 100 + 'px';
            circle.style.top = circle.offsetTop - 100 + 'px';

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '5px';
            circle.style.opacity = 0;
        }
  export default {
      name: "mousemove",
  }
  
</script>

<style >
.circle {
            width: 15px;
            height: 15px;
            border: 1px solid #11ece5;
            position: absolute;
            border-radius: 15px;
        }
  
</style>