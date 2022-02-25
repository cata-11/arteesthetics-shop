<template>
  <base-section border="left top" title="start" id="about">
    <template v-slot:title>
      <base-title
        title="ABOUT"
        :colors="['v', 'p', 't', 'r', 'r']"
      ></base-title>
    </template>
    <template v-slot:content>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        maxime ratione fugit ut assumenda unde in accusamus eos voluptatum
        aliquid natus minima sequi eum error molestiae, consequatur obcaecati
        vitae quas, illum consequuntur, asperiores reprehenderit quia id! Harum
        labore impedit tempore quae veritatis, repudiandae, quia quos,
        aspernatur cumque possimus unde. Perferendis. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit.
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
p {
  padding: 3rem;
  color: var(--black);
  background-color: var(--a-white);
  font-size: var(--basic-font-size);
  font-family: 'Roboto Slab', serif;
}

/* 320px */
@media only screen and (min-width: 320px) {
  p {
    padding: 1rem;
  }
}
@media only screen and (min-width: 680px) {
  p {
    padding: 1.5rem;
  }
}

@media only screen and (min-width: 1160px) {
  p {
    padding: 3rem;
    font-size: 2rem;
  }
  #about {
    margin-top: 4rem;
  }
}
</style>
