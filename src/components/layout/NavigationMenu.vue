<template>
  <nav>
    <ul>
      <li class="active">
        <router-link to="/home">
          <div>home</div>
          <img src="house.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <div>shop</div>
          <img src="shop.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/account">
          <div>account</div>
          <img src="account.svg" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <div>cart</div>
          <img src="cart.svg" alt="" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  z-index: 999;
  margin: 1rem auto 2rem auto;
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
img {
  display: none;
}

@media only screen and (max-width: 1280px) {
  nav {
    margin: 1rem auto 1rem auto;
  }
}
@media only screen and (max-width: 1120px) {
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    background-color: var(--pink);
  }
  div {
    display: none;
  }
  ul {
    justify-content: space-evenly;
    border: none;
  }
  li {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }
  img {
    display: block;
    padding: 0.5rem 1rem;
  }
  .active img {
    background-color: antiquewhite;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
}

@media only screen and (max-width: 1024px) {
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
}

@media only screen and (max-width: 970px) {
  img {
    width: 4rem;
    height: 4rem;
  }
}

@media only screen and (max-width: 870px) {
  img {
    width: 3.75rem;
    height: 3.75rem;
  }
}

@media only screen and (max-width: 768px) {
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}
@media only screen and (max-width: 680px) {
  img {
    width: 3rem;
    height: 3rem;
  }
}

@media only screen and (max-width: 600px) {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media only screen and (max-width: 480px) {
  img {
    width: 2rem;
    height: 2rem;
  }
}

@media only screen and (max-width: 420px) {
  img {
    width: 2rem;
    height: 2rem;
  }
}

@media only screen and (max-width: 380px) {
  img {
    width: 1.9rem;
    height: 1.9rem;
  }
}

@media only screen and (max-width: 360px) {
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
}

@media only screen and (max-width: 320px) {
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
