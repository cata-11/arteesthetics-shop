<template>
  <li>
    <div @click="showAnswer" id="question">
      <p>
        {{ faq.question }}
      </p>
      <div id="symbol" :class="{ rotate: faq.show }">
        <span>&#9661;</span>
      </div>
    </div>
    <div :class="[faq.show ? 'show' : 'hide']" id="answer">
      <p>
        {{ faq.answer }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  emits: ['show-answer'],
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  methods: {
    showAnswer() {
      this.$emit('show-answer', this.faq.id);
    }
  }
};
</script>

<style scoped>
p {
  font-size: var(--basic-font-size);
  padding: 1rem;
}
#question {
  margin-bottom: 5px;
  cursor: pointer;
  position: relative;
  color: var(--black);
  background-color: var(--a-white);
  transition: all 0.3s ease-in-out;
}
#question > p {
  margin-right: 3rem;
}
#answer {
  color: var(--white);
  background-color: var(--violet);
  overflow-y: hidden;
  transform: translateY(-0.7rem) translateX(0.7rem);
  width: 95%;
  transition: all 0.3s ease-in-out;
}
#symbol {
  top: 0;
  bottom: 0;
  right: 1%;
  height: fit-content;
  margin-top: auto;
  margin-bottom: auto;

  position: absolute;
  transition: all 0.3s linear;
}
span {
  font-size: calc(var(--basic-font-size) * 1.5);
  height: 2rem;
  margin: auto;
}
.hide {
  max-height: 0;
}
.show {
  max-height: 10rem;
}
.rotate {
  transform: rotateZ(180deg);
}

@media only screen and (max-width: 1280px) {
  p {
    padding: 1.25rem;
  }
}
@media only screen and (max-width: 1120px) {
}
@media only screen and (max-width: 1024px) {
  p {
    padding: 1rem;
  }
}
@media only screen and (max-width: 970px) {
}
@media only screen and (max-width: 870px) {
}

@media only screen and (max-width: 768px) {
  p {
    padding: 0.75rem;
  }
}
@media only screen and (max-width: 680px) {
  #answer {
    transform: translateX(0) translateY(-0.5rem);
    margin: 0 auto;
  }
}

@media only screen and (max-width: 600px) {
}

@media only screen and (max-width: 480px) {
}

@media only screen and (max-width: 420px) {
}

@media only screen and (max-width: 380px) {
  p {
    padding: 0.5rem;
  }
}

@media only screen and (max-width: 360px) {
}

@media only screen and (max-width: 320px) {
}
</style>
