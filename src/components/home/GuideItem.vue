<template>
  <li>
    <div @click="showAnswer">
      <p>
        {{ faq.question }}
      </p>
      <span :class="{ rotate: faq.show }">&#9661;</span>
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
  font-size: 2rem;
  padding: 1rem;
  margin: 0;
}
div {
  transition: max-height 0.3s linear;
}
div:nth-of-type(1) {
  background-color: var(--a-white);
  color: var(--black);
  cursor: pointer;
  margin-bottom: 5px;
  position: relative;
}
div:nth-of-type(2) {
  color: var(--white);
  overflow-y: hidden;
  transform: translateY(-15%) translateX(2%);
  width: 95%;
}
.hide {
  max-height: 0;
}
.show {
  max-height: 5rem;
}
span {
  position: absolute;
  top: 15%;
  right: 1%;
  font-size: 3rem;
  transition: 0.3s linear;
}
.rotate {
  transform: rotateZ(180deg) translateY(15%);
}

@media only screen and (max-width: 23rem) {
  p {
    padding: 0.5rem;
    font-size: 1rem;
  }
  div:nth-of-type(2) {
    transform: translateY(-20%);
    margin: auto;
  }
  span {
    top: 30%;
    right: 2%;
    font-size: 1rem;
  }
}
</style>
