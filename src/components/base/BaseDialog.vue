<template>
  <section @click="closeDialog">
    <div>
      <h1>Error</h1>
      <p>{{ msg }}</p>
      <base-button class="btn" @click="closeDialog">ok</base-button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['msg'],
  emits: ['close-dialog'],
  methods: {
    closeDialog(e) {
      if (e.path[0].tagName !== 'BUTTON' && e.path[0].tagName !== 'SECTION') {
        return;
      }
      this.$emit('close-dialog');
    }
  }
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
  background-color: rgba(19, 19, 19, 0.9);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  background-color: var(--a-white);
  padding: 1rem;
  border-top: 0.25rem solid var(--red);
  max-width: 60%;
  display: flex;
  flex-direction: column;
}
h1 {
  color: var(--red);
  font-size: calc(var(--basic-font-size) + 0.5rem);
  text-align: center;
  text-transform: uppercase;
}
p {
  color: var(--black);
  font-size: var(--basic-font-size);
  border-left: 0.25rem solid var(--pink);
  padding-left: 0.5rem;
  margin: 2rem 0;
  white-space: pre-line;
}
.btn {
  margin: 0 auto;
  padding: 0.5rem 2rem;
  color: var(--black);
  border-width: 0.25rem;
  text-transform: uppercase;
}
.btn:hover {
  color: var(--a-white);
  background-color: var(--violet);
}
</style>
