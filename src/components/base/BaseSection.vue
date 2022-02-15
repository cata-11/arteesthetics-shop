<template>
  <section :class="[border]">
    <h2 :class="[title]">
      <slot name="title"></slot>
    </h2>
    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  props: ['border', 'title']
};
</script>

<style scoped>
section {
  margin-top: 7rem;
  box-sizing: border-box;
  padding: 0 5rem;
  position: relative;
}
.left {
  border-left: 2px solid whitesmoke;
}
.right {
  border-right: 2px solid whitesmoke;
}
.top {
  border-top: 2px solid whitesmoke;
}
.bottom {
  border-bottom: 2px solid whitesmoke;
}
h2 {
  font-size: 3rem;
  letter-spacing: 2rem;
  width: fit-content;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
}
.start {
  margin-left: 0;
  margin-right: auto;
  transform: translateY(-55%) translateX(-2rem);
}
.end {
  margin-right: 0;
  margin-left: auto;
  transform: translateY(-55%) translateX(2rem);
}

@media only screen and (max-width: 768px) {
  section {
    padding: 0 2rem;
    margin-top: 6rem;
  }
  h2 {
    font-size: 3rem;
    letter-spacing: 1.2rem;
  }
  .start {
    transform: translateY(-57%) translateX(0);
  }
  .end {
    transform: translateY(-53%) translateX(0);
  }
}
@media only screen and (max-width: 680px) {
  section {
    margin-top: 5rem;
  }
  .start {
    transform: translateY(-57%) translateX(0);
    margin: auto;
  }
  .end {
    transform: translateY(-53%) translateX(0);
    margin: auto;
  }
  .left {
    border-left: none;
  }
  .right {
    border-right: none;
  }
}
@media only screen and (max-width: 600px) {
  section {
    margin-top: 4rem;
  }
  h2 {
    font-size: 2.5rem;
    letter-spacing: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  h2 {
    font-size: 2.4rem;
    letter-spacing: 0.9rem;
  }
}

@media only screen and (max-width: 420px) {
  section {
    padding: 0 1rem;
    margin-top: 3.5rem;
  }
  h2 {
    font-size: 2.1rem;
  }
}

@media only screen and (max-width: 380px) {
  h2 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 360px) {
  h2 {
    font-size: 1.9rem;
    letter-spacing: 0.7rem;
  }
}

@media only screen and (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>
