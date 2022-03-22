<template>
  <div class="total-container">
    <div class="total-price">
      <p>Total</p>
      <p>${{ totalPrice }}</p>
    </div>
    <base-button class="btn">Checkout</base-button>
  </div>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    totalPrice() {
      return this.items.length === 0
        ? 0
        : this.items === null
        ? 0
        : this.items === undefined
        ? 0
        : this.items.reduce((a, b) => a + b.qty * b.price, 0);
    }
  }
};
</script>

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

.btn {
  margin-left: auto;
  margin-right: 0;
  width: fit-content;
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
  .btn {
    margin: 0 auto;
  }
}
</style>
