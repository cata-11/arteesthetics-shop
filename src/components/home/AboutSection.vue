<template>
  <base-section id="about" border="left top" title="start">
    <template v-slot:title>
      <base-title
        title="ABOUT"
        :colors="['v', 'p', 't', 'r', 'r']"
      ></base-title>
    </template>
    <template v-slot:content>
      <p id="about-paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        maxime ratione fugit ut assumenda unde in accusamus eos voluptatum
        aliquid natus minima sequi eum error molestiae,
        <strong>consequatur</strong> obcaecati vitae quas, illum consequuntur,
        asperiores reprehenderit quia id! Harum labore impedit tempore quae
        veritatis, repudiandae, quia quos, aspernatur cumque possimus unde.
        Perferendis. Lorem ipsum, <strong>dolor</strong> sit amet consectetur
        adipisicing elit.
      </p>
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
  }
};
</script>

<style scoped>
strong {
  background-color: var(--violet);
}
#about-paragraph {
  background-color: var(--a-white);
  padding: 3rem;
  margin: 0;
  z-index: 1;
  font-size: 2rem;
  position: relative;
  color: var(--black);
  letter-spacing: 0.2rem;
}

@media only screen and (max-width: 23rem) {
  #about-paragraph {
    padding: 1rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}
</style>
