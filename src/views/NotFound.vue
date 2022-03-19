<template>
  <section><h1>Page not found</h1></section>
</template>

<style scoped>
section {
  background-color: var(--a-white);
}
h1 {
  font-size: calc(var(--basic-font-size) + 1rem);
  margin: 2rem 0;
  width: fit-content;
  padding: 1rem;
  border-left: 1rem solid var(--a-white);
  background-color: var(--violet);
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  h1 {
    margin: 2rem auto;
    font-size: var(--basic-font-size);
  }
}
</style>
