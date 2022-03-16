export default {
  showError(context, payload) {
    context.commit('setMessage', payload.msg);
  },
  hideError(context) {
    context.commit('deleteMessage');
  }
};
