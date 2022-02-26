<template>
  <section>
    <form>
      <input type="text" placeholder="Search..." name="search" />
      <button>
        <img src="/search.svg" alt="" />
      </button>
    </form>
    <button class="toggle-filters" @click="toggleFilters">FILTERS</button>
    <div class="filter-options" :class="[hide ? 'hide' : 'show']">
      <button class="active">all</button>
      <button>in stock</button>
      <button>promotion</button>
      <button>bestseller</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hide: true
    };
  },
  methods: {
    toggleFilters() {
      this.hide = !this.hide;
    }
  }
};
</script>

<style scoped>
section {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 5px solid var(--a-white);
  border-bottom: 5px solid var(--a-white);
  padding-bottom: 1rem;
  padding-top: 1rem;
}
form {
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
}
input {
  width: 85%;
  align-self: stretch;
  font-size: 2rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: var(--a-white);
  color: var(--black);
}
input::placeholder {
  color: var(--black);
  opacity: 0.6;
}
form > button {
  width: 15%;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease-in-out;
  background-color: var(--a-white);
}
button > img {
  width: 3rem;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
}
form > button:hover img {
  filter: brightness(1%);
}

.toggle-filters,
.filter-options > button {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--a-white);
  border: 1px solid var(--a-white);
}
.toggle-filters {
  border: none;
  display: none;
}

.filter-options > button.active {
  background-color: var(--red);
  color: var(--white);
  border-color: var(--white);
}

@media only screen and (min-width: 320px) {
  section {
    margin-top: 1rem;
    padding: 0;
    border: none;
    flex-direction: column;
  }
  form {
    width: 85%;
    margin: 1rem auto;
  }
  .filter-options {
    width: 85%;
    display: flex;
    flex-direction: column;
  }
  .toggle-filters {
    background-color: var(--pink);
    display: block;
    width: 85%;
  }
  .filter-options > button.active {
    background-color: var(--a-white);
    color: var(--black);
    border: 5px solid var(--black);
  }
  form > button {
    width: 20%;
  }
}

@media only screen and (min-width: 600px) {
  input,
  .filter-options > button,
  .toggle-filters {
    font-size: 2.5rem;
  }
}
@media only screen and (min-width: 760px) {
  input,
  .filter-options > button,
  .toggle-filters {
    font-size: 3rem;
  }
  button > img {
    width: 3.5rem;
  }
}
@media only screen and (min-width: 920px) {
  input,
  .filter-options > button,
  .toggle-filters {
    font-size: 4rem;
  }
  button > img {
    width: 4rem;
  }
}
@media only screen and (min-width: 1000px) {
  input,
  .filter-options > button,
  .toggle-filters {
    font-size: 5rem;
  }
  button > img {
    width: 5rem;
  }
}
@media only screen and (min-width: 320px) and (max-width: 1159px) {
  .show {
    max-height: 26rem;
    transition: all 0.3s linear;
  }
  .show > button {
    max-height: 9rem;
    transition: all 0.5s linear;
  }
  .hide {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .hide > button {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.5s linear;
  }
}

@media only screen and (min-width: 1160px) {
  section {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-top: 5px solid var(--a-white);
    border-bottom: 5px solid var(--a-white);
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  input,
  .filter-options > button,
  .toggle-filters {
    font-size: 2rem;
  }

  form {
    width: 37.5%;
    margin: 0;
    justify-content: flex-end;
  }
  form > button {
    width: 12.5%;
  }
  input {
    width: 87.5%;
  }
  button > img {
    width: 3rem;
  }
  .filter-options {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .toggle-filters {
    display: none;
  }
  .filter-options {
    display: flex;
  }
  .filter-options > button {
    transition: all 0.1s ease-in-out;
  }
  .filter-options > button.active,
  .filter-options > button.active:hover {
    background-color: var(--red);
    color: var(--a-white);
    border: 1px solid var(--a-white);
  }

  .filter-options > button:hover {
    background-color: var(--a-white);
    color: var(--black);
    border-color: var(--black);
  }
}
</style>
