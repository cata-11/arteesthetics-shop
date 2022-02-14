<template>
  <section>
    <div id="temp-canvas"></div>
    <!-- <TheShirt /> -->
    <TheMotto />
  </section>
</template>

<script>
// import TheShirt from './TheShirt.vue';
import TheMotto from './TheMotto.vue';
export default {
  components: {
    // TheShirt,
    TheMotto
  }
};
</script>

<style scoped>
section {
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* temp canvas */
#temp-canvas {
  width: 35rem;
  height: 35rem;
  background-color: var(--pink);
}

@media only screen and (max-width: 320px) {
  section {
    flex-direction: column;
  }
  #temp-canvas {
    width: 17rem;
    height: 17rem;
  }
}
</style>
