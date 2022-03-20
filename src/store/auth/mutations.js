export default {
  login(state, payload) {
    state.isAuth = true;
    state.isAdmin = payload.isAdmin;
    state.id = payload.id;
    state.favProducts = payload.favProducts;
  },
  logout(state) {
    state.isAdmin = false;
    state.isAuth = false;
    state.id = '';
    state.favProducts = [];
  },
  updateFav(state, payload) {
    state.favProducts = payload;
  }
};
