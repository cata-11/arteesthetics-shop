<template>
  <header>
    <h1>
      <base-title
        title="ARTEESTHETICS"
        :colors="[
          'p',
          'r',
          'r',
          't',
          'v',
          'v',
          'v',
          'v',
          'v',
          'v',
          'v',
          'v',
          'v'
        ]"
      ></base-title>
    </h1>
  </header>
</template>
<script>
import BaseTitle from '../base/BaseTitle.vue';
export default {
  components: {
    BaseTitle
  }
};
</script>

<style scoped>
h1 {
  margin: 0.5rem auto;
  padding: 0;
  font-size: calc(var(--main-width) / 11);
  letter-spacing: calc(var(--main-width) / 45);
  width: fit-content;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
}

@media only screen and (min-width: 680px) {
  h1 {
    font-size: calc(var(--main-width) / 10);
    letter-spacing: calc(var(--main-width) / 53);
  }
}

@media only screen and (min-width: 1160px) {
  h1 {
    font-size: 4.1rem;
    letter-spacing: 3rem;
    margin: 1rem auto;
  }
}
</style>
