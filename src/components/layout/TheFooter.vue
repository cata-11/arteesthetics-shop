<template>
  <footer>
    <p>
      <span>©</span>
      <span>Copyright 2021</span>
      <span>
        <base-title
          title="ARTEESTHETICS"
          :colors="[
            'p',
            'r',
            'r',
            't',
            'v',
            'v',
            'v',
            'v',
            'v',
            'v',
            'v',
            'v',
            'v'
          ]"
        ></base-title>
      </span>
      <span>|</span>
      <span>Made with 🤍 by <a href="">Cătă</a> 😋</span>
    </p>
  </footer>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue';
export default {
  components: {
    BaseTitle
  }
};
</script>

<style scoped>
footer {
  font-size: 1.2rem;
  border-top: 2px solid var(--a-white);
}
span {
  padding: 0 5px;
}
p {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: var(--white);
  border-bottom: 1px solid var(--white);
  transition: all 0.5s ease;
}
a:hover {
  color: var(--pink);
  border-color: var(--pink);
}
</style>
