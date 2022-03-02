<template>
  <section id="account">
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" @changeComponent="changeComponent" />
    </Transition>
  </section>
</template>

<script>
import LogIn from '../components/account/auth/LogIn.vue';
import SignUp from '../components/account/auth/SignUp.vue';
export default {
  data() {
    return {
      activeComponent: 'LogIn',
      changeToComponent: 'SignUp'
    };
  },
  components: {
    LogIn,
    SignUp
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    }
  }
};
</script>

<style scoped>
#account {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  position: relative;
  border: 1px solid var(--white);
  padding: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
