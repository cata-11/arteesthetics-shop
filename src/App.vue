<template>
  <main id="main">
    <TheHeader />
    <HomePage />
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    TheHeader
  }
};
</script>

<style>
:root {
  --red: rgb(250, 90, 60);
  --pink: rgb(165, 90, 150);
  --violet: rgb(105, 90, 205);
  --black: rgb(19, 19, 19);
  --white: whitesmoke;
}
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@900&display=swap');
html,
body {
  margin: 0;
  box-sizing: border-box;
  background-color: var(--black);
  user-select: none;
  color: whitesmoke;
}
#main {
  width: 70rem;
  height: fit-content;
  margin: auto;
  box-sizing: border-box;
}
</style>
