<template>
  <base-section id="sneak-peeks" border="right top" title="end">
    <template v-slot:title>
      <base-title
        title="SNEAK PEEKS"
        :colors="['v', 'v', 'r', 'v', 'r', 't', 'p', 'p', 'v', 'p', 'p']"
      ></base-title>
    </template>
    <template v-slot:content>
      <div class="container-border">
        <div class="sneak-peeks-container">
          <img class="test-img" src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
          <img src="image1.png" alt="" />
        </div>
      </div>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '../base/BaseSection.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
  components: {
    BaseSection,
    BaseTitle
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    animateImages() {
      const container = document.querySelector('.sneak-peeks-container');
      const images = container.querySelectorAll('img');
      const style = document.createElement('style');
      const head = document.getElementsByTagName('head')[0];

      const minW = 9,
        maxW = 11;

      const minSpeed = 7,
        maxSpeed = 15;

      const minDelay = 0,
        maxDelay = 7;

      const posX = [110, 342, 332, 175, 15, 445, 196, 373, 0, 450];

      images.forEach((img, i) => {
        const width = this.getRandomNumber(minW, maxW);
        const speed = this.getRandomNumber(minSpeed, maxSpeed);
        const direction = this.getRandomNumber(0, 1) == 0 ? 'reverse' : '';

        let delay;

        if (i > images.length / 2) {
          delay = this.getRandomNumber(minDelay, maxDelay);
        } else {
          delay = 0;
        }
        img.style.opacity = '0';
        img.style.width = `${width}rem`;
        img.style.transform = `translateX(${posX[i]}%) translateY(-200%)`;

        const keyframes = `@keyframes float_${i} {
                              0% {
                                transform: translateX(${
                                  posX[i]
                                }%) translateY(${-10}%);
        opacity: 0;
                              }
                               25%{
                                  opacity: 1;
                              }
                              75%{
                                  opacity: 1;
                              }
                              100% {
                                opacity: 0;
                                transform: translateX(${
                                  posX[i]
                                }%) translateY(${150}%);
                              }
                            }
                            `;

        style.innerHTML += keyframes;
        head.appendChild(style);

        img.style.animation = `float_${i} ${speed}s ${delay}s linear infinite ${direction}`;
      });
    }
  },
  mounted() {
    this.animateImages();
  }
};
</script>

<style scoped>
.sneak-peeks-container {
  width: 100%;
  height: 35rem;
  box-sizing: border-box;
  position: relative;
}
.container-border {
  width: 100%;
  height: 35rem;
}
img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
