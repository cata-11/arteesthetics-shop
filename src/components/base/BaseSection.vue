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
  font-size: 2.75rem;
  letter-spacing: 2.2rem;
  width: fit-content;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
}
.start {
  margin-right: auto;
  margin-left: 0;
  transform: translateY(-2rem) translateX(-2rem);
}
.end {
  transform: translateY(-2rem) translateX(2rem);
  margin-right: 0;
  margin-left: auto;
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
    transform: translateY(-2.5rem) translateX(1rem);
  }
  .end {
    transform: translateY(-2.5rem) translateX(-1rem);
  }
}
@media only screen and (max-width: 680px) {
  section {
    margin-top: 5rem;
  }
  .start {
    transform: translateY(-2.5rem) translateX(0);
    margin: auto;
  }
  .end {
    transform: translateY(-2.5rem) translateX(0);
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
  .start {
    transform: translateY(-2.1rem);
  }
  .end {
    transform: translateY(-2.1rem);
  }
}

@media only screen and (max-width: 480px) {
  h2 {
    font-size: 2.4rem;
    letter-spacing: 0.8rem;
  }
  .start {
    transform: translateY(-2rem);
  }
  .end {
    transform: translateY(-2rem);
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
  .start {
    transform: translateY(-1.75rem);
  }
  .end {
    transform: translateY(-1.75rem);
  }
}

@media only screen and (max-width: 380px) {
  h2 {
    font-size: 2rem;
  }
  .start {
    transform: translateY(-1.6rem);
  }
  .end {
    transform: translateY(-1.6rem);
  }
}

@media only screen and (max-width: 360px) {
  h2 {
    font-size: 1.9rem;
    letter-spacing: 0.7rem;
  }
  .start {
    transform: translateY(-1.55rem);
  }
  .end {
    transform: translateY(-1.55rem);
  }
}

@media only screen and (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
  }
  .start {
    transform: translateY(-1.3rem);
  }
  .end {
    transform: translateY(-1.3rem);
  }
}
</style>
