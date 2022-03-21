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
    const result = state.items.filter(
      (item) =>
        item.size !== payload.size &&
        item.id !== payload.id &&
        item.qty !== payload.qt
    );
    state.items = result;
  },

  setItems(state, payload) {
    if (payload === null || payload === undefined) {
      state.items = [];
    } else {
      state.items = payload;
    }
  }
};
