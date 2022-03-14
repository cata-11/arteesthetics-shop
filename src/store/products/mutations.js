export default {
  getProducts(state, payload) {
    state.products = [...payload];
  },
};
