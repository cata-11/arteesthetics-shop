<template>
  <section @click="closeDialog" :class="type.toLowerCase()">
    <div class="container">
      <h1>{{ type }}</h1>
      <p>{{ message }}</p>
      <base-button class="btn" @click="closeDialog">ok</base-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    closeDialog(e) {
      if (e.path[0].tagName !== 'BUTTON' && e.path[0].tagName !== 'SECTION') {
        return;
      }
      this.$store.dispatch('dialog/hideDialog');
    }
  },

  computed: {
    ...mapGetters({
      type: 'dialog/type',
      message: 'dialog/message'
    })
  }
};
</script>

<style scoped>
.error {
  --color: var(--red);
}
.confirmation {
  --color: var(--violet);
}
.alert {
  --color: var(--pink);
}

section {
  width: 100%;
  height: 100%;
  background-color: rgba(19, 19, 19, 0.9);
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background-color: var(--a-white);
  padding: 1rem;
  border-top: 0.25rem solid var(--color);
  max-width: 60%;
  display: flex;
  flex-direction: column;
}
h1 {
  color: var(--color);
  font-size: calc(var(--basic-font-size) + 0.5rem);
  text-align: center;
  text-transform: uppercase;
}
p {
  color: var(--black);
  font-size: var(--basic-font-size);
  border-left: 0.25rem solid var(--color);
  padding-left: 0.5rem;
  margin: 2rem 0;
  white-space: pre-line;
  text-transform: uppercase;
}
.btn {
  margin: 0 auto;
  padding: 0.5rem 2rem;
  color: var(--black);
  border-width: 0.25rem;
  text-transform: uppercase;
  border-color: var(--color);
}
.btn:hover {
  color: var(--a-white);
  background-color: var(--color);
}
</style>
