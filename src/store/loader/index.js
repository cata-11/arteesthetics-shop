export default {
  namespaced: true,
  state() {
    return {
      isLoading: false
    };
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    toggleLoader(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    toggleLoader(context) {
      context.commit('toggleLoader');
    }
  }
};
