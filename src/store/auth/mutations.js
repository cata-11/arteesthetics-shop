export default {
  login(state, payload) {
    state.isAuth = true;
    state.isAdmin = payload.isAdmin;
    state.id = payload.id;
  },
  logout(state) {
    state.isAdmin = false;
    state.isAuth = false;
    state.id = null;
  }
};
