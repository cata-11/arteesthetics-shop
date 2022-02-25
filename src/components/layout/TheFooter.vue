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
  font-size: calc(var(--basic-font-size) / 1.25);
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

/* 320px */
@media only screen and (min-width: 320px) {
  footer {
    margin-bottom: calc(var(--main-width) / 12 + 2.5rem);
  }
  p {
    padding: 0.75rem;
    flex-direction: column;
  }
  span {
    padding: 5px;
  }
  .separator {
    opacity: 0;
  }
}

@media only screen and (min-width: 1160px) {
  footer {
    margin-bottom: 0;
  }
  p {
    padding: 1rem;
    flex-direction: row;
  }
  span {
    padding: 3px;
  }
  .separator {
    opacity: 1;
  }
}
</style>
