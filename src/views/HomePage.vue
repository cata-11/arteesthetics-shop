<template>
  <section class="home-container">
    <The3DModel />
    <HomeDescription />
  </section>
  <NavMenu />
  <AboutSection />
  <SneakPeeks />
  <FAQSection />
  <FollowUs />
</template>

<script>
import The3DModel from '../components/home/The3DModel.vue';
import HomeDescription from '../components/home/HomeDescription.vue';
import NavMenu from '../components/home/NavMenu.vue';
import AboutSection from '../components/home/AboutSection.vue';
import SneakPeeks from '../components/home/SneakPeeks.vue';
import FAQSection from '../components/home/FAQSection.vue';
import FollowUs from '../components/home/FollowUs.vue';

export default {
  components: {
    The3DModel,
    HomeDescription,
    NavMenu,
    AboutSection,
    SneakPeeks,
    FAQSection,
    FollowUs
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
</style>
