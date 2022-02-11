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
header {
  width: 100%;
  box-sizing: border-box;
}
h1 {
  margin: 0 auto;
  width: fit-content;
  font-size: 4rem;
  padding: 0;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 2.2rem;
  text-indent: 2.2rem;
  padding: 1rem;
}
</style>
