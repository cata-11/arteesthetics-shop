export default {
  addToCart(state, payload) {
    let updated = false;

    if (state.items === null) {
      state.items = [];
      state.items.push(payload);
      return;
    }
    for (const item of state.items) {
      if (item.size === payload.size && item.id === payload.id) {
        item.qty++;
        updated = true;
      }
    }
    if (!updated) {
      state.items.push(payload);
    }
  },

  removeFromCart(state, payload) {
    state.items.splice(payload, 1);
  },

  setItems(state, payload) {
    if (payload === null || payload === undefined) {
      state.items = [];
    } else {
      state.items = payload;
    }
  }
};
