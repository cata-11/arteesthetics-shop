export default {
  auth(state, payload) {
    state.isAuth = true;
    state.isAdmin = payload;
  },
  logout(state) {
    state.isAdmin = false;
    state.isAuth = false;
  }
};
