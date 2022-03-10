<template>
  <li class="cart-item">
    <div class="static-info">
      <div class="img-container">
        <img src="/shirt0.png" alt="" />
      </div>
      <div class="text">
        <h2>{{ item.title }}</h2>
        <p>XS</p>
      </div>
    </div>
    <div class="dynamic-info">
      <div class="price">
        <p>$50</p>
      </div>
      <span>X</span>
      <div class="quantity">
        <input type="number" placeholder="2" min="1" max="10" />
      </div>
      <span>=</span>
      <div class="subtotal">
        <p>$90</p>
      </div>
    </div>
    <button class="remove"></button>
  </li>
</template>

<script>
export default {
  props: ['item']
};
</script>

<style scoped>
.cart-item {
  display: flex;
  /* border: 1px solid red; */
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid var(--white);
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
  width: 97.5%;
  box-sizing: border-box;
}

.static-info {
  display: flex;
  /* border: 1px solid white; */
  width: 55%;
}

.img-container {
  border: 5px solid var(--a-white);
  min-width: 8rem;
  min-height: 8rem;
  max-width: 8rem;
  max-height: 8rem;
  padding: 1rem;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.text {
  /* border: 1px solid yellow; */
  margin: auto 0;
  margin-left: 1rem;
  overflow: hidden;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}
.text h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text p {
  width: fit-content;
  padding: 0.5rem;
  background-color: var(--red);
}

.dynamic-info {
  width: 40%;
  display: flex;
  /* border: 1px solid salmon; */
  align-items: center;
  justify-content: space-between;
}

.dynamic-info div {
  width: 25%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid salmon; */
}
.price,
.quantity,
.subtotal {
  font-size: 2rem;
  height: 100%;
  /* border: 1px solid grey; */
}
.quantity {
  background-color: var(--a-white);
}
.price {
  background-color: var(--pink);
}
.subtotal {
  background-color: var(--violet);
}
.quantity input {
  font-size: 2rem;
  width: 100%;
  padding: 0.5rem;
  background-color: var(--a-white);
  box-sizing: border-box;
  outline: none;
  border: none;
  height: 100%;
}

.price,
.subtotal {
  text-align: center;
  box-sizing: border-box;
}
.quantity {
  display: flex;
  justify-content: center;
}
.remove {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(50%, -50%, 0);
  width: 2rem;
  height: 2rem;
  border: 0.25rem solid var(--red);
  background: url('/remove.svg') no-repeat center var(--red);
}

@media only screen and (min-width: 680px) and (max-width: 1159px) {
  .cart-item {
    flex-direction: column;
    width: calc(var(--main-width) - 10%);
  }
  .static-info {
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--white);
    padding-bottom: 1rem;
  }
  .img-container {
    border: 5px solid var(--a-white);
    min-width: calc(var(--main-width) / 5);
    min-height: calc(var(--main-width) / 5);
    max-width: calc(var(--main-width) / 5);
    max-height: calc(var(--main-width) / 5);
    padding: 1rem;
  }
  .text h2 {
    margin-bottom: 1rem;
    font-size: calc(var(--basic-font-size) + 1rem);
  }
  .text p {
    font-size: var(--basic-font-size);
  }
  .quantity {
    box-sizing: border-box;
    background-color: var(--a-white);
  }
  .dynamic-info {
    /* border: 2px solid red; */
    width: 60%;
    margin-right: 0;
    margin-left: auto;
  }
  .price,
  .quantity input,
  .subtotal {
    font-size: var(--basic-font-size);
    /* border: 1px solid grey; */
  }
}

@media only screen and (min-width: 320px) and (max-width: 679px) {
  .img-container {
    border: 5px solid var(--a-white);
    width: calc(var(--main-width) / 2);
    height: calc(var(--main-width) / 2);
    min-width: unset;
    min-height: unset;
    max-height: unset;
    max-width: unset;
    padding: 1rem;
    margin: 0 auto;
  }
  .cart-item {
    flex-direction: column;
    width: calc(var(--main-width) - 15%);
  }
  .static-info {
    width: 100%;
    margin-bottom: 1rem;

    flex-direction: column;
    /* border: 1px solid red; */
  }

  .dynamic-info {
    /* border: 2px solid red; */
    width: 100%;
    margin-right: 0;
    margin-left: auto;
    border-top: 2px solid var(--white);
    padding-top: 1rem;
  }
  .text {
    border-left: 2px solid var(--a-white);
    padding-left: 1rem;
    margin-top: 1rem;
    margin-left: 0;
  }
  .text h2 {
    font-size: calc(var(--basic-font-size) + 1rem);
  }
  .text p {
    font-size: var(--basic-font-size);
  }

  .price,
  .quantity input,
  .subtotal {
    font-size: var(--basic-font-size);
    /* border: 1px solid grey; */
  }

  .dynamic-info div {
    height: calc(var(--main-width) / 8);
  }
}
</style>
