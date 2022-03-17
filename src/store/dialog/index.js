export default {
  namespaced: true,
  state() {
    return {
      type: '',
      message: ''
    };
  },
  getters: {
    type(state) {
      return state.type;
    },
    message(state) {
      return state.message;
    }
  },
  mutations: {
    setType(state, payload) {
      state.type = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    deleteMessage(state) {
      state.message = '';
    }
  },
  actions: {
    showDialog(context, payload) {
      context.commit('setType', payload.type);
      context.commit('setMessage', payload.msg);
    },
    hideDialog(context) {
      context.commit('deleteMessage');
    }
  }
};
