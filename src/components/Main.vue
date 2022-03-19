<template>
  <main>
    <TheHeader />
    <NavigationMenu />
    <router-view></router-view>
    <TheFooter />
  </main>
  <DialogWindow v-if="!!message" />
  <LoadingSpinner v-if="isLoading && !message" />
</template>

<script>
import NavigationMenu from './layout/NavigationMenu.vue';

import TheHeader from './layout/TheHeader.vue';
import TheFooter from './layout/TheFooter.vue';

import LoadingSpinner from './layout/LoadingSpinner.vue';
import DialogWindow from './layout/DialogWindow.vue';

import { mapGetters } from 'vuex';

import firebase from 'firebase/compat/app';

export default {
  components: {
    TheHeader,
    TheFooter,
    NavigationMenu,
    LoadingSpinner,
    DialogWindow
  },
  computed: {
    ...mapGetters({
      type: 'dialog/type',
      message: 'dialog/message'
    }),
    ...mapGetters({
      isLoading: 'loader/isLoading'
    })
  },
  methods: {
    checkAuthState() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (user.email === 'admin@test.com') {
            this.$store.dispatch('auth/authUser', { isAdmin: true });
          } else {
            this.$store.dispatch('auth/authUser', { isAdmin: false });
          }
        } else {
          this.$store.dispatch('auth/logoutUser');
        }
      });
    }
  },
  created() {
    this.checkAuthState();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
:root {
  --red: rgb(250, 90, 60);
  --pink: rgb(209, 102, 188);
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
  scroll-behavior: smooth;
}
main {
  margin: 0 auto;
  height: fit-content;
  box-sizing: border-box;
  width: var(--main-width);
}
input,
textarea {
  border: none;
  outline: none;
  font-family: 'Roboto Slab', serif;
}
button {
  border: none;
  outline: none;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
}
img,
video {
  -webkit-user-drag: none;
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
  -webkit-tap-highlight-color: transparent;
}
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

@media only screen and (min-width: 320px) {
  :root {
    --main-width: 20rem;
    --basic-font-size: 1rem;
  }
}
@media only screen and (min-width: 360px) {
  :root {
    --main-width: 22.5rem;
    --basic-font-size: 1.1rem;
  }
}
@media only screen and (min-width: 400px) {
  :root {
    --main-width: 25rem;
    --basic-font-size: 1.2rem;
  }
}
@media only screen and (min-width: 440px) {
  :root {
    --main-width: 27.5rem;
    --basic-font-size: 1.3rem;
  }
}
@media only screen and (min-width: 480px) {
  :root {
    --main-width: 30rem;
    --basic-font-size: 1.4rem;
  }
}
@media only screen and (min-width: 520px) {
  :root {
    --main-width: 32.5rem;
    --basic-font-size: 1.5rem;
  }
}
@media only screen and (min-width: 560px) {
  :root {
    --main-width: 35rem;
    --basic-font-size: 1.6rem;
  }
}
@media only screen and (min-width: 600px) {
  :root {
    --main-width: 37.5rem;
    --basic-font-size: 1.7rem;
  }
}
@media only screen and (min-width: 640px) {
  :root {
    --main-width: 40rem;
    --basic-font-size: 1.8rem;
  }
}
@media only screen and (min-width: 680px) {
  /*   */
}
@media only screen and (min-width: 720px) {
  :root {
    --main-width: 42.5rem;
    --basic-font-size: 1.9rem;
  }
}

@media only screen and (min-width: 760px) {
  :root {
    --main-width: 45rem;
    --basic-font-size: 2rem;
  }
}
@media only screen and (min-width: 800px) {
  :root {
    --main-width: 47.5rem;
    --basic-font-size: 2.1rem;
  }
}
@media only screen and (min-width: 840px) {
  :root {
    --main-width: 50rem;
    --basic-font-size: 2.2rem;
  }
}
@media only screen and (min-width: 880px) {
  :root {
    --main-width: 52.5rem;
    --basic-font-size: 2.3rem;
  }
}
@media only screen and (min-width: 920px) {
  :root {
    --main-width: 55rem;
    --basic-font-size: 2.4rem;
  }
}
@media only screen and (min-width: 960px) {
  :root {
    --main-width: 57.5rem;
    --basic-font-size: 2.5rem;
  }
}
@media only screen and (min-width: 1000px) {
  :root {
    --main-width: 60rem;
    --basic-font-size: 2.6rem;
  }
}
@media only screen and (min-width: 1040px) {
  :root {
    --main-width: 62.5rem;
    --basic-font-size: 2.7rem;
  }
}
@media only screen and (min-width: 1080px) {
  :root {
    --main-width: 65rem;
    --basic-font-size: 2.8rem;
  }
}
@media only screen and (min-width: 1120px) {
  :root {
    --main-width: 67.5rem;
    --basic-font-size: 2.9rem;
  }
}
@media only screen and (min-width: 1160px) {
  :root {
    --main-width: 70rem;
    --basic-font-size: 2rem;
  }
}
</style>
