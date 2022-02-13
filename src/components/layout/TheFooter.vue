<template>
  <footer>
    <p>
      <span>
        <span>© Copyright 2022</span>
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
      </span>
      <span>
        <span class="separator">|</span>
        <span>Made with 🤍 by <a href="">Cătă</a> 😋</span>
      </span>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  padding: 0 5px;
}
.separator {
  padding-left: 0;
  padding-right: 10px;
}
p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
a {
  color: var(--white);
  border-bottom: 1px solid var(--white);
  transition: all 0.3s ease;
}
a:hover {
  color: var(--pink);
  border-color: var(--pink);
}

@media only screen and (max-width: 23rem) {
  footer {
    font-size: 0.8rem;
    margin-bottom: 4rem;
  }
  p {
    padding: 0.5rem;
    flex-direction: column;
  }
  span {
    padding: 3px 3px;
  }
  .separator {
    opacity: 0;
  }
}
</style>
