<template>
  <span
    v-for="(lettter, idx) in title"
    :key="idx"
    :class="colors[idx]"
    class="element"
    >{{ title[idx] }}</span
  >
</template>

<script>
export default {
  props: ['title', 'colors']
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
.p {
  background-color: var(--pink);
}
.t {
  background-color: transparent;
}
</style>
