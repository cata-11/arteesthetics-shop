<template>
  <section id="account">
    <div class="header">
      <h1>{{ data.type }} account (id: {{ id.slice(0, 10) }})</h1>
      <button @click="logOut">Log out</button>
      <div>
        <img src="/exit.svg" alt="" />
      </div>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{ active: component1 }"
          @click="changeComponent(data.components[0].name)"
        >
          {{ data.components[0].link }}
        </li>
        <li
          class="nav-item"
          :class="{ active: component2 }"
          @click="changeComponent(data.components[1].name)"
        >
          {{ data.components[1].link }}
        </li>
      </ul>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="title" v-if="component1">
        <h2>{{ data.components[0].link }}</h2>
      </div>
      <div class="title" v-else>
        <h2>{{ data.components[1].link }}</h2>
      </div>
    </Transition>
    <Transition name="translate" mode="out-in">
      <component :is="activeComponent" />
    </Transition>
  </section>
</template>

<script>
import UserDetails from '../account/user/UserDetails.vue';
import UserWishlist from '../account/user/UserWishlist.vue';
import AddProduct from '../account/admin/AddProduct.vue';
import UpdateProducts from '../account/admin/UpdateProducts.vue';

import firebase from 'firebase/compat/app';
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: this.$store.getters['auth/id'],
      activeComponent: this.data.components[0].name
    };
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    },
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$router.go(0);
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'error',
          msg: 'Something went wrong\nPlease try again later'
        });
      }
    }
  },
  components: {
    UserDetails,
    UserWishlist,
    AddProduct,
    UpdateProducts
  },
  computed: {
    component1() {
      return this.activeComponent === this.data.components[0].name
        ? true
        : false;
    },
    component2() {
      return this.activeComponent === this.data.components[1].name
        ? true
        : false;
    }
  }
};
</script>

<style scoped>
#account {
  margin-bottom: 4rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--a-white);
  color: var(--black);
  text-transform: uppercase;
  border-left: 1rem solid var(--pink);
}
h1 {
  font-size: var(--basic-font-size);
}
.header > button {
  font-size: var(--basic-font-size);
  background-color: var(--black);
  color: var(--white);
  padding: 0.5rem 1rem;
  border: 4px solid var(--black);
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}
.header > button:hover {
  background-color: var(--a-white);
  color: var(--black);
}

.header > div {
  display: none;
  cursor: pointer;
  width: calc(var(--main-width) / 12);
  height: calc(var(--main-width) / 12);
}
.header > div > img {
  width: 100%;
  object-fit: contain;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* border-bottom: 2px solid var(--white); */
  /* border-top: 2px solid var(--white); */
  /* margin-top: 1rem; */
}
.nav-list {
  display: inline-block;
  width: var(--main-width);
}
.nav-item {
  display: inline-block;
  text-align: center;
  font-size: var(--basic-font-size);

  color: var(--white);
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: var(--violet);
  border: 5px solid var(--black);

  text-transform: capitalize;
}

li:hover,
li.active {
  border-color: var(--a-white);
  background-color: transparent;
}

.logout {
  width: fit-content;
  margin-right: 0;
  text-align: end;
  border: 5px solid var(--violet);
  box-sizing: border-box;
}

.title {
  background-color: var(--pink);
  margin: 4rem 0;
  line-height: 0.5rem;
}
.title > h2 {
  font-size: calc(var(--basic-font-size) + 1rem);
  padding: 0 1rem 0.25rem 1rem;
  width: fit-content;
  text-transform: uppercase;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 0.3rem;
  margin: 0 auto;
  background-color: var(--black);
}

.translate-enter-active,
.translate-leave-active {
  transition: all 0.2s ease-in-out;
}
.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: translateY(5%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  .header > div {
    display: block;
  }
  .header > button {
    display: none;
  }
  #account {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }
  .header {
    border: none;
  }
  .title {
    margin: calc(var(--basic-font-size) + 1rem) 0;
  }
}
</style>
