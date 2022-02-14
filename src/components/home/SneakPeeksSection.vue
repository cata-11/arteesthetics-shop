<template>
  <base-section id="sneak-peeks" border="right top" title="end">
    <template v-slot:title>
      <base-title
        title="SNEAK PEEKS"
        :colors="['v', 'v', 'r', 'v', 'r', 't', 'p', 'r', 'v', 'v', 'p']"
      ></base-title>
    </template>
    <template v-slot:content>
      <div class="sneak-peeks-container">
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" />
        <img src="image1.png" alt="" @load="onLoadImages" />
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
  data() {
    return {
      width: +getComputedStyle(document.body)
        .getPropertyValue('--main-width')
        .slice(0, 3)
    };
  },
  created() {
    window.addEventListener('resize', () => {
      const relativeWidth = +getComputedStyle(document.body)
        .getPropertyValue('--main-width')
        .slice(0, 3);
      if (relativeWidth != this.width) {
        this.width = relativeWidth;
        this.animateImages();
      }
    });
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    onLoadImages() {
      this.animateImages();
    },

    animateImages() {
      const container = document.querySelector('.sneak-peeks-container');
      const images = container.querySelectorAll('img');
      const style = document.createElement('style');
      const head = document.getElementsByTagName('head')[0];

      const relativeWidth = container.getBoundingClientRect().width / 16;
      const relativeHeight = container.getBoundingClientRect().height / 16;

      const imgWidth = relativeWidth / images.length;

      const minWidth = imgWidth,
        maxWidth = imgWidth + 2;

      images.forEach((img, i) => {
        const width = this.getRandomNumber(minWidth, maxWidth);
        const speed = this.getRandomNumber(7, 12);
        const direction = this.getRandomNumber(0, 1) == 0 ? 'reverse' : '';

        img.style.opacity = '0';
        img.style.width = `${width}rem`;

        const imgHeight = img.height / 16;

        const posX = i == 9 ? imgWidth * i - maxWidth : imgWidth * i;
        const posY = (relativeHeight / imgHeight) * 100 - 100;

        // if (i == 9) posX -= maxWidth;

        const keyframes = `@keyframes float_${i} {                            
                              0% {
                                transform: translateX(${posX}rem) translateY(${-5}%);
                                opacity: 0;
                              }
                              25% {
                                opacity: 1;
                              }
                              75% {
                                opacity: 1;
                              }
                              100% {
                                opacity: 0;
                                transform: translateX(${posX}rem) translateY(${posY}%);
                              }
                          }`;

        style.innerHTML += keyframes;
        head.appendChild(style);

        let delay;
        if (i > images.length / 2) {
          delay = this.getRandomNumber(0, 7);
        } else {
          delay = 0;
        }

        img.style.animation = `float_${i} ${speed}s ${delay}s linear infinite ${direction}`;
      });
    }
  },
  mounted() {
    // this.animateImages();
  }
};
</script>

<style scoped>
.sneak-peeks-container {
  width: 100%;
  height: 35rem;
  position: relative;
  box-sizing: border-box;
}
img {
  position: absolute;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 320px) {
  .sneak-peeks-container {
    height: 17rem;
  }
}
</style>
