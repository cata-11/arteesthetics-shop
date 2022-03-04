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

/* 320px */
@media only screen and (min-width: 320px) {
  #answer {
    transform: translateX(0) translateY(-0.5rem);
    margin: 0 auto;
  }
  p {
    padding: 0.5rem;
  }
}
@media only screen and (min-width: 480px) {
  p {
    padding: 0.75rem;
  }
}
@media only screen and (min-width: 680px) {
  p {
    padding: 1rem;
  }
}

@media only screen and (min-width: 1160px) {
  p {
    font-size: 2rem;
  }
  #answer {
    transform: translateX(-0.75rem) translateY(-0.5rem);
    margin: 0 auto;
  }
  span {
    font-size: 3rem;
    transition: all 0.2s ease-in-out;
  }
  span:hover {
    color: var(--violet);
  }
}
</style>
