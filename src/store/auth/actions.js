import firebase from 'firebase/compat/app';
export default {
  login(context, payload) {
    context.commit('login', payload);
  },
  logout(context) {
    context.commit('logout');
  },
  async updateFav(context, payload) {
    try {
      await firebase
        .database()
        .ref('users/' + payload.uid)
        .update({
          favProducts: payload.favProducts
        });
      context.commit('updateFav', payload.favProducts);
    } catch (err) {
      console.log(err);
    }
  }
};
