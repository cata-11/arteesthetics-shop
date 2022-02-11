<template>
  <section class="home-container">
    <The3DModel />
    <HomeDescription />
  </section>
  <NavMenu />
  <AboutSection />
  <SneakPeeks />
  <base-section id="start-shopping" border="left top" title="start">
    <template v-slot:title="">
      <base-title
        title="START SHOPPING"
        :colors="[
          'r',
          'v',
          'r',
          'p',
          'v',
          't',
          'p',
          'r',
          'v',
          'v',
          'p',
          'r',
          'r',
          'v'
        ]"
      ></base-title>
    </template>
    <template v-slot:content> start shopping </template>
  </base-section>
  <base-section id="follow-us" border="right top" title="end">
    <template v-slot:title>
      <base-title
        title="FOLLOW US"
        :colors="['v', 'p', 'r', 'v', 'r', 'r', 't', 'p', 'v']"
      ></base-title>
    </template>
    <template v-slot:content>
      <div class="social-container">
        <div class="form-container">
          <form action="">
            <input type="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
        <div class="social-icons">
          <a href="">
            <img src="instagram.svg" alt="instagram.svg" />
          </a>
          <a href="">
            <img src="facebook.svg" alt="facebook.svg" />
          </a>
        </div>
      </div>
    </template>
  </base-section>
  <div style="margin: 10rem"></div>
</template>

<script>
import The3DModel from '../components/home/The3DModel.vue';
import HomeDescription from '../components/home/HomeDescription.vue';
import NavMenu from '../components/home/NavMenu.vue';
import BaseSection from '../components/base/BaseSection.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
import AboutSection from '../components/home/AboutSection.vue';
import SneakPeeks from '../components/home/SneakPeeks.vue';

export default {
  components: {
    The3DModel,
    HomeDescription,
    NavMenu,
    BaseSection,
    BaseTitle,
    AboutSection,
    SneakPeeks
  }
};
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-container {
  display: flex;
  align-items: center;
}
.form-container > form {
  display: flex;
}
form > input[type='text'] {
  background-color: antiquewhite;
  color: var(--black);
  font-size: 2rem;

  border: none;
  outline: none;
  padding: 1rem;
}
form > button {
  border: none;
  background-color: var(--pink);
  color: var(--white);
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  padding: 1rem;
  cursor: pointer;
}

.social-icons {
  color: var(--white);
  width: 100%;
  transform: translateX(12%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.social-icons > a > img {
  filter: invert(100%);
  width: 5rem;
  height: 5rem;
}
a {
  text-decoration: none;
  color: var(--white);
}
</style>
