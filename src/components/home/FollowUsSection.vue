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
        <form @submit.prevent="subscribe">
          <input
            type="text"
            placeholder="Enter your email"
            :class="{ error: emailError }"
            v-model="email"
          />
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
import firebase from 'firebase/compat/app';

export default {
  data() {
    return {
      email: '',
      emailError: false
    };
  },
  methods: {
    validateEmail() {
      if (this.email === '') {
        this.emailError = true;
        return false;
      }
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(this.email)) {
        this.emailError = true;
        return false;
      }
      this.emailError = false;
      return true;
    },
    async subscribe() {
      if (!this.validateEmail()) {
        return;
      }
      try {
        this.$store.dispatch('loader/toggleLoader');
        await firebase.database().ref('subscribers').push(this.email);
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          msg: 'Something went wrong',
          type: 'error'
        });
      }
      this.$store.dispatch('loader/toggleLoader');
      this.$store.dispatch('dialog/showDialog', {
        msg: 'You are succesfully subscribed to our newsletter',
        type: 'confirmation'
      });
      this.email = '';
    }
  },

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
.error {
  border: 2px solid var(--red) !important;
  color: var(--red) !important;
}
input {
  border: none;
  outline: none;
  padding: 1rem;
  color: var(--black);
  box-sizing: border-box;
  font-size: var(--basic-font-size);
  background-color: var(--a-white);
  font-family: 'Roboto Slab', serif;
  border: 2px solid transparent;
}
button {
  cursor: pointer;
  padding: 1rem;
  color: var(--a-white);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2rem;
  background-color: var(--pink);
  font-size: var(--basic-font-size);
  transition: all 0.2s ease-in-out;
  font-family: 'Roboto Slab', serif;
  border: 2px solid transparent;
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
img:hover {
  filter: invert(100%) brightness(80%);
}

/* 320px */
@media only screen and (min-width: 320px) {
  #follow-us {
    margin-bottom: 1rem;
  }
  .follow-us-container {
    flex-direction: column;
  }
  form {
    width: 90%;
    flex-direction: column;
  }
  button {
    width: 100%;
    padding: 0.75rem;
  }
  input {
    width: 100%;
    padding: 0.75rem;
  }
  #icons {
    width: 50%;
    justify-content: space-evenly;
    flex-direction: row;
    transform: translateX(0);
    margin-top: 1rem;
  }
  a {
    width: calc(var(--main-width) / 8);
    height: calc(var(--main-width) / 8);
  }
}

@media only screen and (min-width: 400px) {
}
@media only screen and (min-width: 680px) {
  #follow-us {
    margin-bottom: 4rem;
  }
  .follow-us-container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 70%;
    flex-direction: column;
    margin: 0;
  }
  #icons {
    width: 30%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }

  a {
    width: calc(var(--main-width) / 10);
    height: calc(var(--main-width) / 10);
  }
}

@media only screen and (min-width: 1160px) {
  #follow-us {
    margin-bottom: 4rem;
  }
  a {
    width: 4.5rem;
    height: 4.5rem;
  }
  form {
    flex-direction: row;
  }
  input {
    width: 60%;
    font-size: 2rem;
    padding: 1rem;
  }
  button {
    width: 40%;
    font-size: 2rem;
    padding: 1rem;
  }
  #icons {
    flex-direction: row;
    transform: translateX(2.5rem);
    justify-content: space-evenly;
  }
}
</style>
