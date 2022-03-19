<template>
  <section id="auth">
    <AuthForm />
  </section>
</template>

<script>
import AuthForm from '../components/account/auth/AuthForm.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    AuthForm
  },
  computed: {
    ...mapGetters({
      isAuth: 'auth/isAuth'
    })
  }
};
</script>

<style scoped>
#auth {
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
</style>
