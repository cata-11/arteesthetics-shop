<template>
  <main>
    <TheHeader />
    <NavigationMenu />
    <router-view></router-view>
    <TheFooter />
  </main>
</template>

<script>
import NavigationMenu from './layout/NavigationMenu.vue';
import TheHeader from './layout/TheHeader.vue';
import TheFooter from './layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    NavigationMenu
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
:root {
  --red: rgb(250, 90, 60);
  --pink: rgb(165, 90, 150);
  --violet: rgb(105, 90, 205);
  --black: rgb(19, 19, 19);
  --white: rgb(245, 245, 245);
  --a-white: rgb(250, 235, 215);
  --main-width: 70rem;
  --basic-font-size: 2rem;
}
html,
body {
  margin: 0;
  padding: 0;
  user-select: none;
  color: var(--white);
  box-sizing: border-box;
  letter-spacing: 0.05rem;
  background-color: var(--black);
  font-family: 'Roboto Slab', serif;
}
main {
  margin: 0 auto;
  height: fit-content;
  box-sizing: border-box;
  width: var(--main-width);
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin: 0;
  padding: 0;
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
  padding: 0;
}

@media only screen and (max-width: 1280px) {
  :root {
    --main-width: 66rem;
    --basic-font-size: 2rem;
  }
}

@media only screen and (max-width: 1120px) {
  :root {
    --main-width: 54rem;
    --basic-font-size: 2.4rem;
  }
}
@media only screen and (max-width: 1024px) {
  :root {
    --main-width: 50rem;
    --basic-font-size: 2.2rem;
  }
}
@media only screen and (max-width: 970px) {
  :root {
    --main-width: 48rem;
    --basic-font-size: 2.1rem;
  }
}
@media only screen and (max-width: 870px) {
  :root {
    --main-width: 44rem;
    --basic-font-size: 1.9rem;
  }
}
@media only screen and (max-width: 768px) {
  :root {
    --main-width: 40rem;
    --basic-font-size: 1.7rem;
  }
}
@media only screen and (max-width: 680px) {
  :root {
    --main-width: 42.5rem;
    --basic-font-size: 1.8rem;
  }
}
@media only screen and (max-width: 600px) {
  :root {
    --main-width: 37.5rem;
    --basic-font-size: 1.6rem;
  }
}
@media only screen and (max-width: 480px) {
  :root {
    --main-width: 30rem;
    --basic-font-size: 1.4rem;
  }
}
@media only screen and (max-width: 420px) {
  :root {
    --main-width: 26.25rem;
    --basic-font-size: 1.3rem;
  }
}
@media only screen and (max-width: 380px) {
  :root {
    --main-width: 23.75rem;
    --basic-font-size: 1.2rem;
  }
}
@media only screen and (max-width: 360px) {
  :root {
    --main-width: 22.5rem;
    --basic-font-size: 1.1rem;
  }
}
@media only screen and (max-width: 320px) {
  :root {
    --main-width: 20rem;
    --basic-font-size: 1rem;
  }
}
</style>
