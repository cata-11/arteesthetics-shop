<template>
  <nav>
    <ul>
      <li class="active">
        <a href="#">
          <span>home</span>
          <img src="house.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <span>shop</span>
          <img src="shop.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <span>account</span>
          <img src="account.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <span>cart</span>
          <img src="cart.svg" alt="" />
        </a>
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
  margin: 1rem auto 2.7rem auto;
  box-sizing: border-box;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
span {
  font-size: 2.5rem;
  padding: 1rem 4.78rem;
  text-transform: uppercase;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  transition: all 0.3s ease-in-out;
  border-bottom: 10px solid var(--black);
}
span:hover {
  color: var(--black);
  background-color: var(--a-white);
  border-color: var(--pink);
}
.active > a > span {
  border-color: var(--violet);
}
img {
  width: 1.5rem;
  height: 1.5rem;
  /* filter: invert(100%); */
  display: none;
}
@media only screen and (max-width: 320px) {
  nav {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    margin: 0;
    background-color: var(--pink);
  }
  span {
    display: none;
  }
  ul {
    justify-content: space-evenly;
  }
  li {
    padding: 0.5rem;
  }
  img {
    display: block;
    padding: 0.5rem 1rem;
  }
  .active img {
    background-color: antiquewhite;
  }
}
</style>
