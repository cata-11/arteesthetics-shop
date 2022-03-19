<template>
  <nav>
    <ul>
      <li>
        <router-link to="/home">
          <div>home</div>
          <img src="/home.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <div>shop</div>
          <img src="/shop.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/auth">
          <div>account</div>
          <img src="/user.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <div>cart</div>
          <img src="/cart.svg" alt="" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  z-index: 100;
  margin: 1rem auto;
}
ul {
  display: flex;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
}
li {
  width: 25%;
}
a {
  display: flex;
}
div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  border-bottom: 0.25rem solid transparent;

  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
}
div:hover {
  color: var(--black);
  background-color: var(--a-white);
}
.router-link-active {
  color: var(--black);
  background-color: var(--a-white);
}
.router-link-active img {
  filter: invert(100%);
}
img {
  display: none;
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  nav {
    width: 100%;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    background-color: var(--pink);
    box-shadow: 0 -10px 20px rgba(19, 19, 19, 0.5);
  }
  div {
    display: none;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border: none;
  }
  li {
    width: 25%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }
  img {
    display: block;
    padding: 0.5rem 1rem;
    width: calc(var(--main-width) / 12);
    height: calc(var(--main-width) / 12);
  }
}
</style>
