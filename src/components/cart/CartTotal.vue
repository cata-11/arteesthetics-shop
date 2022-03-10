<template>
  <div class="total-container">
    <div class="total-price">
      <p>Total</p>
      <p>$300</p>
    </div>
    <button>Checkout</button>
  </div>
</template>

<style scoped>
.total-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  box-sizing: border-box;
}

.total-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--a-white);
  border-left: 1rem solid var(--pink);
  color: var(--black);
  padding: 1rem;
  font-size: var(--basic-font-size);
  margin-bottom: 1rem;
  font-weight: bold;
  box-sizing: border-box;
}

.total-container button {
  margin-left: auto;
  margin-right: 0;
  width: fit-content;
  box-sizing: border-box;
  font-size: calc(var(--basic-font-size));
  border: 7px solid var(--violet);
  background-color: transparent;
  color: var(--white);
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}
.total-container button:hover {
  color: var(--black);
  background-color: var(--a-white);
}

@media only screen and (min-width: 680px) and (max-width: 1159px) {
  .total-container {
    width: calc(var(--main-width) - 10%);
  }
}

@media only screen and (min-width: 320px) and (max-width: 679px) {
  .total-container {
    width: calc(var(--main-width) - 15%);
  }
  .total-container button {
    margin: 0 auto;
  }
}
</style>
