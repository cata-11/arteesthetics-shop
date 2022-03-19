export default {
  login(context, payload) {
    context.commit('login', payload);
  },
  logout(context) {
    context.commit('logout');
  }
};
