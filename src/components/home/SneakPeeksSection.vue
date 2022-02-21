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
        <img src="image1.png" alt="" @load="animateImages" />
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

    animateImages() {
      const container = document.querySelector('.sneak-peeks-container');

      if (container == null) return;

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

        const posX = i == 9 ? imgWidth * i - 2 : imgWidth * i;

        const posY = (relativeHeight / imgHeight) * 100 - 100;

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

@media only screen and (max-width: 1280px) {
  .sneak-peeks-container {
    height: 34rem;
  }
}
@media only screen and (max-width: 1120px) {
  .sneak-peeks-container {
    height: 36rem;
  }
}
@media only screen and (max-width: 1024px) {
  .sneak-peeks-container {
    height: 34rem;
  }
}
@media only screen and (max-width: 970px) {
  .sneak-peeks-container {
    height: 32rem;
  }
}
@media only screen and (max-width: 870px) {
  .sneak-peeks-container {
    height: 30rem;
  }
}

@media only screen and (max-width: 768px) {
  .sneak-peeks-container {
    height: 28rem;
  }
}
@media only screen and (max-width: 680px) {
  .sneak-peeks-container {
    height: 26rem;
  }
}
@media only screen and (max-width: 600px) {
  .sneak-peeks-container {
    height: 25rem;
  }
}

@media only screen and (max-width: 480px) {
  .sneak-peeks-container {
    height: 22rem;
  }
}

@media only screen and (max-width: 420px) {
  .sneak-peeks-container {
    height: 21rem;
  }
}

@media only screen and (max-width: 380px) {
  .sneak-peeks-container {
    height: 20rem;
  }
}

@media only screen and (max-width: 360px) {
  .sneak-peeks-container {
    height: 19rem;
  }
}

@media only screen and (max-width: 320px) {
  .sneak-peeks-container {
    height: 18rem;
  }
}
</style>
