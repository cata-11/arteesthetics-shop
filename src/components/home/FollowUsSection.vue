<template>
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
</template>

<script>
import BaseSection from '../base/BaseSection.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
  components: {
    BaseSection,
    BaseTitle
  }
};
</script>

<style scoped>
#follow-us {
  margin-bottom: 4rem;
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
  color: var(--a-white);
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
form > button:hover {
  background-color: var(--violet);
  color: var(--white);
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

@media only screen and (max-width: 23rem) {
  form > input[type='text'] {
    font-size: 1rem;
    padding: 0.5rem;
  }
  form > button {
    border: none;
    background-color: var(--pink);
    color: var(--white);
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .form-container > form {
    display: flex;
    flex-direction: column;
  }
  .social-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .social-icons > a > img {
    width: 2.5rem;
    height: 2.5rem;
  }
  .social-icons {
    width: 50%;
    transform: translateX(0);
    justify-content: space-evenly;
    margin-top: 1rem;
  }
  #follow-us {
    margin-bottom: 2rem;
  }
}
</style>
