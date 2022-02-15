<template>
  <base-section border="left top" title="start">
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

@media only screen and (max-width: 768px) {
  p {
    padding: 2rem;
  }
}
@media only screen and (max-width: 680px) {
}
@media only screen and (max-width: 600px) {
}
@media only screen and (max-width: 480px) {
}
@media only screen and (max-width: 420px) {
  p {
    padding: 1rem;
  }
}
@media only screen and (max-width: 380px) {
}
@media only screen and (max-width: 360px) {
}
@media only screen and (max-width: 320px) {
}
</style>
