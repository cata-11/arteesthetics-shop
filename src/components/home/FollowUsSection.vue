<template>
  <base-section id="follow-us" border="right top" title="end">
    <template v-slot:title>
      <base-title
        title="FOLLOW US"
        :colors="['v', 'p', 'r', 'v', 'r', 'r', 't', 'p', 'v']"
      ></base-title>
    </template>

    <template v-slot:content>
      <div class="follow-us-container">
        <form action="">
          <input type="text" placeholder="Enter your email" />
          <button>subscribe</button>
        </form>
        <div id="icons">
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
.follow-us-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--a-white);
}
input {
  border: none;
  outline: none;
  padding: 1rem;
  color: var(--black);
  box-sizing: border-box;
  font-size: var(--basic-font-size);
  background-color: var(--a-white);
}
button {
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: var(--a-white);
  text-transform: uppercase;
  background-color: var(--pink);
  font-size: var(--basic-font-size);
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: var(--violet);
  color: var(--white);
}
#icons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transform: translateX(2.5rem);
}
a {
  width: 4.5rem;
  height: 4.5rem;
}
img {
  filter: invert(100%);
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1280px) {
  #follow-us {
    margin-bottom: 5.25rem;
  }
}
@media only screen and (max-width: 1120px) {
  #follow-us {
    margin-bottom: 5rem;
  }
  form {
    width: 100%;
    flex-direction: column;
  }
  button {
    width: 100%;
  }
  input {
    width: 100%;
  }
  #icons {
    width: 25%;
    justify-content: space-between;
    flex-direction: column;
    transform: translateX(0);
  }
  a {
    width: 5.25rem;
    height: 5.25rem;
  }
}

@media only screen and (max-width: 1024px) {
  a {
    width: 5rem;
    height: 5rem;
  }
}

@media only screen and (max-width: 970px) {
  #follow-us {
    margin-bottom: 4.5rem;
  }
  a {
    width: 4.75rem;
    height: 4.75rem;
  }
}

@media only screen and (max-width: 870px) {
  a {
    width: 4.5rem;
    height: 4.5rem;
  }
}

@media only screen and (max-width: 768px) {
  #follow-us {
    margin-bottom: 4rem;
  }
  a {
    width: 4rem;
    height: 4rem;
  }
}
@media only screen and (max-width: 680px) {
  #follow-us {
    margin-bottom: 2rem;
  }
  .follow-us-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
  }
  form {
    width: 100%;
    flex-direction: column;
  }
  #icons {
    width: 70%;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 2rem;
  }
}
@media only screen and (max-width: 600px) {
  a {
    width: 4rem;
    height: 4rem;
  }
}
@media only screen and (max-width: 480px) {
  input {
    padding: 0.75rem;
  }
  button {
    padding: 0.75rem;
  }
  a {
    width: 3.5rem;
    height: 3.5rem;
  }
}
@media only screen and (max-width: 420px) {
  .follow-us-container {
    width: 80%;
  }
}
@media only screen and (max-width: 380px) {
  #follow-us {
    margin-bottom: 1rem;
  }
  .follow-us-container {
    width: 85%;
  }
  input {
    padding: 0.5rem;
  }
  button {
    padding: 0.5rem;
  }
  #icons {
    margin-top: 1rem;
  }
  a {
    width: 3rem;
    height: 3rem;
  }
}
@media only screen and (max-width: 360px) {
}
@media only screen and (max-width: 320px) {
  a {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
