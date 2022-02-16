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

@media only screen and (max-width: 1280px) {
  span {
    padding: 5px;
  }
}
@media only screen and (max-width: 1120px) {
  footer {
    margin-bottom: 7.5rem;
  }
  p {
    padding: 1rem;
    flex-direction: column;
  }
  span {
    padding: 5px;
  }
  .separator {
    opacity: 0;
  }
}
@media only screen and (max-width: 1024px) {
  footer {
    margin-bottom: 7rem;
  }
}
@media only screen and (max-width: 970px) {
  footer {
    margin-bottom: 6.5rem;
  }
}
@media only screen and (max-width: 870px) {
  footer {
    margin-bottom: 5.5rem;
  }
}

@media only screen and (max-width: 768px) {
  footer {
    margin-bottom: 5.5rem;
  }
}
@media only screen and (max-width: 680px) {
}
@media only screen and (max-width: 600px) {
  footer {
    margin-bottom: 4.5rem;
  }
}
@media only screen and (max-width: 480px) {
  footer {
    margin-bottom: 4rem;
  }
}
@media only screen and (max-width: 420px) {
}
@media only screen and (max-width: 380px) {
}
@media only screen and (max-width: 360px) {
  footer {
    margin-bottom: 3.75rem;
  }
}
@media only screen and (max-width: 320px) {
  footer {
    margin-bottom: 3.5rem;
  }
}
</style>
