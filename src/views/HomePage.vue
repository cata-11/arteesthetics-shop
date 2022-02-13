<template>
  <HeroSection />
  <AboutSection />
  <SneakPeeksSection />
  <GuideSection />
  <FollowUsSection />
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import AboutSection from '../components/home/AboutSection.vue';
import SneakPeeksSection from '../components/home/SneakPeeksSection.vue';
import GuideSection from '../components/home/GuideSection.vue';
import FollowUsSection from '../components/home/FollowUsSection.vue';

export default {
  components: {
    HeroSection,
    AboutSection,
    SneakPeeksSection,
    GuideSection,
    FollowUsSection
  }
};
</script>
