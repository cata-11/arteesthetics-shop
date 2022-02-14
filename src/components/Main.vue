<template>
  <main>
    <TheHeader />
    <NavigationMenu />
    <HomePage />
    <TheFooter />
  </main>
</template>

<script>
import NavigationMenu from './layout/NavigationMenu.vue';
import TheHeader from './layout/TheHeader.vue';
import TheFooter from './layout/TheFooter.vue';
import HomePage from '../views/HomePage.vue';

export default {
  components: {
    HomePage,
    TheHeader,
    TheFooter,
    NavigationMenu
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@900&display=swap');
:root {
  --red: rgb(250, 90, 60);
  --pink: rgb(165, 90, 150);
  --violet: rgb(105, 90, 205);
  --black: rgb(19, 19, 19);
  --white: rgb(245, 245, 245);
  --a-white: rgb(250, 235, 215);
  --main-width: 70rem;
}
html,
body {
  margin: 0;
  box-sizing: border-box;
  background-color: var(--black);
  color: var(--white);
  user-select: none;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 0.1rem;
}
main {
  width: var(--main-width);
  height: fit-content;
  margin: auto;
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--white);
}
h1,
h2,
h3,
p {
  margin: 0;
}

@media only screen and (max-width: 420px) {
  :root {
    --main-width: 26.25rem;
  }
}
@media only screen and (max-width: 380px) {
  :root {
    --main-width: 23.75rem;
  }
}
@media only screen and (max-width: 360px) {
  :root {
    --main-width: 22.5rem;
  }
}
@media only screen and (max-width: 320px) {
  :root {
    --main-width: 20rem;
  }
}
</style>
