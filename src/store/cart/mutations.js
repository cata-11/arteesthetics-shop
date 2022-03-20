export default {
  addToCart(state, payload) {
    let updated = false;

    if (state.items === null) {
      state.items = [];
      state.items.push(payload);
      return;
    }
    for (const item of state.items) {
      if (item.size === payload.size) {
        item.qty++;
        updated = true;
      }
    }
    if (!updated) {
      state.items.push(payload);
    }
  },

  // loadItems(state, items) {
  //   state.items = items;
  // },
  // changeQty(state) {
  //   localStorage.setItem("cart", JSON.stringify(state.items));
  // },
  // removeFromCart(state) {
  //   localStorage.setItem("cart", JSON.stringify(state.items));
  // },

  setCart(state, payload) {
    state.items = payload;
  },
  getCartFromLocalStorage(state) {
    state.items = JSON.parse(localStorage.getItem('cart'));
  }
};
