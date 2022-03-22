import firebase from 'firebase/compat/app';
export default {
  async addToCart(context, payload) {
    const cartItem = {
      id: payload.prodId,
      size: payload.size,
      qty: 1
    };
    context.commit('addToCart', cartItem);
    context.dispatch('updateLocalStorage');
    context.dispatch('updateDataBase');
  },
  removeFromCart(context, payload) {
    const itemToRemove = context.getters.items.find(
      (i) => i.id === payload.id && i.size === payload.size
    );
    const idx = context.getters.items.indexOf(itemToRemove);

    context.commit('removeFromCart', idx);
    context.dispatch('updateLocalStorage');
    context.dispatch('updateDataBase');
  },
  updateQuantity(context, payload) {
    const itemToUpdate = context.getters.items.find(
      (i) => i.id === payload.item.id && i.size === payload.item.size
    );
    const idx = context.getters.items.indexOf(itemToUpdate);

    context.commit('updateQuantity', { idx: idx, qty: payload.qty });
    context.dispatch('updateLocalStorage');
    context.dispatch('updateDataBase');
  },
  async updateDataBase(context) {
    if (context.rootGetters['auth/isAuth']) {
      const items = context.getters.items;
      try {
        await firebase
          .database()
          .ref('users/' + context.rootGetters['auth/id'] + '/cart')
          .set(items);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async updateLocalStorage(context) {
    const items = context.getters.items;
    localStorage.setItem('cart', JSON.stringify(items));
  },
  async getItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('cart'));
    if (items !== null && items.length === 0) return null;
    return items;
  },
  async getItemsFromDatabase(context) {
    if (!context.rootGetters['auth/isAuth']) {
      return null;
    }
    try {
      var data = await firebase
        .database()
        .ref('users/' + context.rootGetters['auth/id'] + '/cart')
        .get();
    } catch (err) {
      console.log(err);
    }
    return data.val();
  },
  async getItems(context) {
    //helpers
    const objectsEqual = (o1, o2) =>
      Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => o1[p] === o2[p]);
    const arraysEqual = (a1, a2) =>
      a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));

    const localItems = await context.dispatch('getItemsFromLocalStorage');
    const databaseItems = await context.dispatch('getItemsFromDatabase');

    let items = [];

    if (localItems === null && databaseItems === null) {
      items = [];
    }
    if (localItems !== null && databaseItems === null) {
      items = [...localItems];
      context.commit('setItems', items);
      context.dispatch('updateLocalStorage');
      context.dispatch('updateDataBase');
    } else if (localItems === null && databaseItems !== null) {
      items = [...databaseItems];
      context.commit('setItems', items);
      context.dispatch('updateLocalStorage');
      context.dispatch('updateDataBase');
    } else if (localItems !== null && databaseItems !== null) {
      if (arraysEqual(databaseItems, localItems)) {
        items = [...localItems];
        context.commit('setItems', items);
      } else {
        items = await context.dispatch('mergeItems', {
          localItems,
          databaseItems
        });
        context.commit('setItems', items);
        context.dispatch('updateLocalStorage');
        context.dispatch('updateDataBase');
      }
    }
  },
  async mergeItems(context, payload) {
    const localItems = payload.localItems;
    const databaseItems = payload.databaseItems;

    const mergedItems = [...localItems, ...databaseItems];

    for (let i = 0; i < mergedItems.length; ++i) {
      for (let j = i + 1; j < mergedItems.length; ++j) {
        if (
          mergedItems[i].id === mergedItems[j].id &&
          mergedItems[i].size === mergedItems[j].size
        ) {
          const totalQty = mergedItems[i].qty + mergedItems[j].qty;
          mergedItems[i].qty = totalQty;
          mergedItems[j].qty = totalQty;
        }
      }
    }

    const uniqueItems = mergedItems.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.id === value.id && t.qty === value.qty && t.size === value.size
        )
    );

    return uniqueItems;
  }
};
