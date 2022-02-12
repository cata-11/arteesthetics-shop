<template>
  <base-section border="left top" title="start">
    <template v-slot:title>
      <base-title
        title="GUIDE"
        :colors="['r', 'r', 't', 'p', 'v']"
      ></base-title>
    </template>
    <template v-slot:content>
      <ul id="faq">
        <faq
          v-for="faq in faqs"
          :key="faq.id"
          :faq="faq"
          @show-answer="showAnswer"
        ></faq>
      </ul>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '../base/BaseSection.vue';
import BaseTitle from '../base/BaseTitle.vue';
import FAQ from './FAQ.vue';

export default {
  data() {
    return {
      faqs: [
        {
          id: 0,
          question: 'Is shipping free ?',
          answer: 'Yes, shipping around country is free',
          show: true
        },
        {
          id: 1,
          question: 'Is shipping free ?',
          answer: 'Yes, shipping around country is free',
          show: false
        },
        {
          id: 2,
          question: 'Is shipping free ?',
          answer: 'Yes, shipping around country is free',
          show: false
        },
        {
          id: 3,
          question: 'Is shipping free ?',
          answer: 'Yes, shipping around country is free',
          show: false
        },
        {
          id: 4,
          question: 'Is shipping free ?',
          answer: 'Yes, shipping around country is free',
          show: false
        }
      ]
    };
  },
  methods: {
    showAnswer(id) {
      this.faqs.forEach((faq) => {
        if (faq.id == id) {
          faq.show = !faq.show;
        } else {
          faq.show = false;
        }
      });
    },
    randomizeColors() {
      const list = document.getElementById('faq');
      const answers = list.querySelectorAll('#answer');
      const colors = ['violet', 'pink'];
      answers.forEach((a) => {
        const n = Math.round(Math.random());
        a.style.backgroundColor = `var(--${colors[n]})`;
      });
    }
  },
  mounted() {
    this.randomizeColors();
  },
  components: {
    BaseSection,
    BaseTitle,
    faq: FAQ
  }
};
</script>

<style scoped></style>
