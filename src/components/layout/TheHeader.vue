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

@media only screen and (max-width: 1280px) {
  h1 {
    font-size: 4.1rem;
    letter-spacing: 2.7rem;
  }
}
@media only screen and (max-width: 1120px) {
  h1 {
    font-size: 4rem;
    letter-spacing: 1.85rem;
  }
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 4rem;
    letter-spacing: 1.525rem;
  }
}

@media only screen and (max-width: 970px) {
  h1 {
    font-size: 3.9rem;
    letter-spacing: 1.3rem;
  }
}

@media only screen and (max-width: 870px) {
  h1 {
    font-size: 3.7rem;
    letter-spacing: 1.1rem;
  }
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
    letter-spacing: 1rem;
  }
}
@media only screen and (max-width: 680px) {
  h1 {
    font-size: 3.5rem;
    letter-spacing: 1rem;
  }
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
    letter-spacing: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
    letter-spacing: 0.7rem;
  }
}

@media only screen and (max-width: 420px) {
  h1 {
    font-size: 2.3rem;
    letter-spacing: 0.6rem;
  }
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
