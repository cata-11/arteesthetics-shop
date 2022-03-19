export default {
  authUser(context, payload) {
    context.commit('auth', payload.isAdmin);
  },
  logoutUser(context) {
    context.commit('logout');
  }
};
