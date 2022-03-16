export default {
  setMessage(state, payload) {
    state.message = payload;
  },
  deleteMessage(state) {
    state.message = '';
  }
};
