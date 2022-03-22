<template>
  <base-section border="left top" title="start">
    <template v-slot:title>
      <base-title
        title="GUIDE"
        :colors="['r', 'r', 't', 'p', 'v']"
      ></base-title>
    </template>
    <template v-slot:content>
      <ul id="guide-list">
        <guide-item
          v-for="faq in faqs"
          :key="faq.id"
          :faq="faq"
          @show-answer="showAnswer"
        ></guide-item>
      </ul>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '../base/BaseSection.vue';
import BaseTitle from '../base/BaseTitle.vue';
import GuideItem from './GuideItem.vue';

export default {
  data() {
    return {
      faqs: [
        {
          id: 0,
          question:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
          answer:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
          show: true
        },
        {
          id: 1,
          question: 'Lorem ipsum, dolor sit amet adipisicing elit. ',
          answer:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
          show: false
        },
        {
          id: 2,
          question: 'Lorem ipsum, dolor sit amet consectetur elit.',
          answer:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
          show: false
        },
        {
          id: 3,
          question:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
          answer: 'Lorem ipsum, dolor sit amet.',
          show: false
        },
        {
          id: 4,
          question: 'Lorem ipsum, dolor sit amet. ',
          answer:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
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
    }
  },
  components: {
    BaseSection,
    BaseTitle,
    GuideItem
  }
};
</script>
