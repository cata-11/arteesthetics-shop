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
  margin: 0 auto;
  padding: 1rem 0;
  font-size: 4.1rem;
  letter-spacing: 3rem;
  width: fit-content;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
}

@media only screen and (max-width: 380px) {
  h1 {
    font-size: 2.1rem;
    letter-spacing: 0.5rem;
  }
}

@media only screen and (max-width: 360px) {
  h1 {
    font-size: 2rem;
    letter-spacing: 0.45rem;
  }
}

@media only screen and (max-width: 320px) {
  h1 {
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
  }
}
</style>
