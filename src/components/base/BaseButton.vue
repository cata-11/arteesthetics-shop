<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-size: var(--basic-font-size);
  border: 7px solid var(--violet);
  background-color: transparent;
  color: var(--white);
  font-weight: normal;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}
button:hover {
  color: var(--black);
  background-color: var(--a-white);
}
</style>
