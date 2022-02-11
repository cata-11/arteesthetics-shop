<template>
  <div>
    <span
      v-for="(lettter, idx) in title"
      :key="idx"
      :class="colors[idx]"
      class="element"
      >{{ title[idx] }}</span
    ><!-- -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    assignColors() {}
  },
  mounted() {
    this.assignColors();
  }
};
</script>

<style scoped>
span {
  margin-left: -1px;
}
.r {
  background-color: var(--red);
}
.v {
  background-color: var(--violet);
}
.p{
  background-color: var(--pink);
}
.t {
  background-color: transparent;
}
</style>
