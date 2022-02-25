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
  transform: translateY(-58%) translateX(1.5rem);
}
.end {
  margin-right: 0;
  margin-left: auto;
  transform: translateY(-53%) translateX(-1.5rem);
}

/* 320px */
@media only screen and (min-width: 320px) {
  section {
    margin-top: 3rem;
    padding: 0 1rem;
  }
  .start {
    transform: translateY(-56%) translateX(0);
    margin: auto;
  }
  .end {
    transform: translateY(-56%) translateX(0);
    margin: auto;
  }
  .left {
    border-left: none;
  }
  .right {
    border-right: none;
  }
  h2 {
    font-size: calc(var(--main-width) / 12);
    letter-spacing: calc(var(--main-width) / 30);
  }
}
@media only screen and (min-width: 440px) {
  section {
    margin-top: 4rem;
  }
}
@media only screen and (min-width: 520px) {
  section {
    margin-top: 5rem;
  }
}
@media only screen and (min-width: 600px) {
  section {
    margin-top: 6rem;
  }
}
@media only screen and (min-width: 680px) {
  section {
    margin-top: 6rem;
    padding: 0 2rem;
  }
  h2 {
    font-size: calc(var(--main-width) / 14);
  }
  .left {
    border-left: 2px solid whitesmoke;
  }
  .right {
    border-right: 2px solid whitesmoke;
  }
  .start {
    margin-left: 0;
    margin-right: auto;
    transform: translateY(-58%) translateX(1.5rem);
  }
  .end {
    margin-right: 0;
    margin-left: auto;
    transform: translateY(-53%) translateX(-1.5rem);
  }
}

@media only screen and (min-width: 1160px) {
  section {
    margin-top: 7rem;
    padding: 0 5rem;
  }
  h2 {
    font-size: 3rem;
    letter-spacing: 2rem;
  }

  .start {
    transform: translateY(-56%) translateX(1.5rem);
  }
  .end {
    transform: translateY(-54%) translateX(-1.5rem);
  }
}
</style>
