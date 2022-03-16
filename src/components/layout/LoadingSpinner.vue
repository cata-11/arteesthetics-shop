<template>
  <section>
    <div>
      <h1>Loading...</h1>
    </div>
  </section>
</template>

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
  color: var(--black);
}
</style>
