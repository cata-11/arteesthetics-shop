<template>
  <section>
    <div id="temp-canvas">
      <!-- <video src="shirt_video_v8.webm" autoplay loop muted></video> -->
      <img src="tshirt update test.png" alt="" />
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

/* temp canvas */
#temp-canvas {
  width: 35rem;
  height: 35rem;
  /* background-color: var(--pink); */
}

video {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1280px) {
  #temp-canvas {
    width: 33rem;
    height: 33rem;
  }
}
@media only screen and (max-width: 1120px) {
  section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #temp-canvas {
    width: 45rem;
    height: 45rem;
  }
}
@media only screen and (max-width: 1024px) {
  #temp-canvas {
    width: 42rem;
    height: 42rem;
  }
}
@media only screen and (max-width: 970px) {
  #temp-canvas {
    width: 38rem;
    height: 38rem;
  }
}

@media only screen and (max-width: 870px) {
  #temp-canvas {
    width: 35rem;
    height: 35rem;
  }
}
@media only screen and (max-width: 768px) {
  #temp-canvas {
    width: 32rem;
    height: 32rem;
  }
}
@media only screen and (max-width: 680px) {
}
@media only screen and (max-width: 600px) {
  #temp-canvas {
    width: 29rem;
    height: 29rem;
  }
}

@media only screen and (max-width: 480px) {
  #temp-canvas {
    width: 23rem;
    height: 23rem;
  }
}

@media only screen and (max-width: 420px) {
  #temp-canvas {
    width: 20rem;
    height: 20rem;
  }
}

@media only screen and (max-width: 380px) {
  #temp-canvas {
    width: 18rem;
    height: 18rem;
  }
}

@media only screen and (max-width: 360px) {
  #temp-canvas {
    width: 17rem;
    height: 17rem;
  }
}

@media only screen and (max-width: 320px) {
  #temp-canvas {
    width: 15rem;
    height: 15rem;
  }
}
</style>
