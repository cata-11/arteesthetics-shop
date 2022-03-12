<template>
  <section>
    <div class="search-box">
      <input type="text" placeholder="Search..." name="search" />
      <img src="/search.svg" alt="" />
    </div>
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
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 5px solid var(--a-white);
  border-bottom: 5px solid var(--a-white);
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.search-box {
  display: flex;
  align-self: stretch;
  position: relative;
  margin-left: 1rem;
}
input {
  padding: calc(var(--basic-font-size) / 4);
  padding-right: calc(var(--main-width) / 22);
  background-color: var(--a-white);
}
.search-box > img {
  opacity: 0.3;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 0.2s ease-in-out;
  padding: calc(var(--basic-font-size) / 5);
}

.search-box > img :hover img {
  opacity: 1;
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

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  section {
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    padding: calc(var(--main-width) / 140) 0;
  }
  .filter-options > button.active {
    background-color: var(--a-white);
    color: var(--black);
    border: 5px solid var(--black);
    padding: calc(var(--main-width) / 140) 0;
  }
  form > button {
    width: fit-content;
  }
  input,
  .filter-options > button,
  .toggle-filters {
    font-size: calc(var(--basic-font-size) + 0.5rem);
  }
  .show {
    max-height: 35rem;
    transition: all 0.1s linear;
  }
  .show > button {
    max-height: 9rem;
    transition: all 0.2s linear;
  }
  .hide {
    max-height: 0;
    overflow: hidden;
    transition: all 0.1s linear;
  }
  .hide > button {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.2s linear;
  }
  .search-box {
    margin: 0 auto;
    width: 85%;
    margin-bottom: 1rem;
  }
  .search-box input {
    width: 100%;

    padding-right: calc(var(--main-width) / 10);
  }
  .search-box > img {
    width: calc(var(--main-width) / 12);
    height: calc(var(--main-width) / 12);
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
