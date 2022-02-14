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
  padding: 0;
  margin: 0;
  width: fit-content;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 2.2rem;
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

@media only screen and (max-width: 320px) {
  section {
    padding: 0 1rem;
    margin-top: 3.5rem;
  }
  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.8rem;
  }
  .start {
    transform: translateY(-1.3rem) translateX(0);
    margin: auto;
  }
  .end {
    transform: translateY(-1.3rem) translateX(0);
    margin: auto;
  }
  .left {
    border-left: none;
  }
  .right {
    border-right: none;
  }
}
</style>
