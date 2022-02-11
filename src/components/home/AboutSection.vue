<template>
  <base-section id="about" border="left top" title="start">
    <template v-slot:title>
      <base-title
        title="ABOUT"
        :colors="['v', 'p', 't', 'r', 'r']"
      ></base-title>
    </template>
    <template v-slot:content>
      <p
        id="about-paragraph"
        @mouseenter="animateBackground(true)"
        @mouseleave="animateBackground(false)"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        maxime ratione fugit ut assumenda unde in accusamus eos voluptatum
        aliquid natus minima sequi eum error molestiae,
        <strong>consequatur</strong> obcaecati vitae quas, illum consequuntur,
        asperiores reprehenderit quia id! Harum labore impedit tempore quae
        veritatis, repudiandae, quia quos, aspernatur cumque possimus unde.
        Perferendis. Lorem ipsum, <strong>dolor</strong> sit amet consectetur
        adipisicing elit. Dignissimos maxime ratione fugit ut
        <strong>assumenda</strong> unde in accusamus eos voluptatum aliquid
        natus minima sequi eum error molestiae, consequatur obcaecati vitae
        quas, illum <strong>consequuntur</strong>, asperiores reprehenderit quia
        id!
      </p>
      <div
        class="about-background"
        @mouseenter="animateBackground(true)"
        @mouseleave="animateBackground(false)"
      ></div>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '../base/BaseSection.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
  name: 'Home',
  components: {
    BaseSection,
    BaseTitle
  },
  methods: {
    animateBackground(enter) {
      const aboutBackground = document.querySelector('.about-background');

      const X = Math.floor(Math.random() * 3) + 1;
      const Y = Math.floor(Math.random() * 5) + 10;
      if (enter)
        aboutBackground.style.transform = `translateX(${X}%) translateY(${Y}%)`;
      else {
        aboutBackground.style.transform = 'translateX(2%) translateY(12%)';
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2rem;
  margin: 0;
  position: inherit;
  z-index: 1;
  letter-spacing: 0.2rem;
  color: var(--black);
}
strong {
  background-color: var(--violet);
}
.about-background {
  background-color: var(--a-white);
  position: absolute;
  z-index: 0;
  width: 70rem;
  height: 30rem;
  top: 0;
  left: 0;
  transform: translateX(2%) translateY(12%);
  transition: all 1s ease;
}
</style>
