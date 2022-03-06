<template>
  <section id="user">
    <div class="header">
      <h1>Admin account</h1>
      <button>Log out</button>
      <div>
        <img src="/exit.svg" alt="" />
      </div>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{ active: updateActive }"
          @click="changeComponent('UpdateProducts')"
        >
          Update
        </li>
        <li
          class="nav-item"
          :class="{ active: addActive }"
          @click="changeComponent('AddProduct')"
        >
          Add New
        </li>
      </ul>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="title" v-if="updateActive">
        <h2>Update</h2>
      </div>
      <div class="title" v-else>
        <h2>Add New</h2>
      </div>
    </Transition>

    <Transition name="translate" mode="out-in">
      <component :is="activeComponent" />
    </Transition>
  </section>
</template>

<script>
import UpdateProducts from '../components/account/admin/UpdateProducts.vue';
import AddProduct from '../components/account/admin/AddProduct.vue';
export default {
  data() {
    return {
      activeComponent: 'UpdateProducts'
    };
  },
  components: {
    UpdateProducts,
    AddProduct
  },
  computed: {
    updateActive() {
      return this.activeComponent === 'UpdateProducts' ? true : false;
    },
    addActive() {
      return this.activeComponent === 'AddProduct' ? true : false;
    }
  },

  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    }
  }
};
</script>

<style scoped>
section {
  margin-bottom: 1rem;
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
}

.nav-item:hover,
.nav-item.active {
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
  margin-top: 4rem;
  margin-bottom: 2rem;
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
  #user {
    width: 95%;
    margin: 0 auto;
  }
  .header {
    border: none;
  }
  .title {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
}
</style>
