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
    const cartItem = {
      id: payload.prodId,
      size: payload.size,
      qty: 1
    };
    context.commit('removeFromCart', cartItem);
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
  updateLocalStorage(context) {
    const items = context.getters.items;
    localStorage.setItem('cart', JSON.stringify(items));
  },
  getItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('cart'));
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
    const localItems = await context.dispatch('getItemsFromLocalStorage');
    const databaseItems = await context.dispatch('getItemsFromDatabase');

    let items = [];

    if (localItems === null && databaseItems === null) {
      items = [];
    }
    if (localItems !== null && databaseItems === null) {
      items = [...localItems];
    } else if (localItems === null && databaseItems !== null) {
      items = [...databaseItems];
    } else if (localItems !== null && databaseItems !== null) {
      items = await context.dispatch('mergeItems', {
        localItems,
        databaseItems
      });
    }

    context.commit('setItems', items);

    context.dispatch('updateLocalStorage');
    context.dispatch('updateDataBase');
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

  // async getCartFromDb(context, payload) {
  //   const objectsEqual = (o1, o2) =>
  //     Object.keys(o1).length === Object.keys(o2).length &&
  //     Object.keys(o1).every((p) => o1[p] === o2[p]);

  //   const arraysEqual = (a1, a2) =>
  //     a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));

  //   const items = context.getters.items;
  //   const localItems = JSON.parse(localStorage.getItem('cart'));
  //   if (arraysEqual(items, localItems)) {
  //     console.log('yep');
  //     return;
  //   }

  //   try {
  //     var data = await firebase
  //       .database()
  //       .ref('users/' + payload.id + '/cart')
  //       .get();
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   const databaseItems = data.val();

  //   let uniqueItems = [];

  //   if (localItems === null && databaseItems === null) {
  //     return;
  //   }
  //   if (localItems !== null && databaseItems === null) {
  //     uniqueItems = [...localItems];
  //   } else if (localItems === null && databaseItems !== null) {
  //     uniqueItems = [...databaseItems];
  //   } else if (localItems !== null && databaseItems !== null) {
  //     console.log('first here');

  //     for (let i = 0; i < localItems.length; ++i) {
  //       for (let j = 0; j < databaseItems.length; ++j) {
  //         if (
  //           localItems[i].id === databaseItems[j].id &&
  //           localItems[i].size === databaseItems[j].size
  //         ) {
  //           localItems[i].qty += databaseItems[j].qty;
  //           databaseItems[j].qty = localItems[i].qty;
  //         }
  //       }
  //     }
  //     const mergedItems = [];

  //     localItems.forEach((i) => mergedItems.push(i));
  //     databaseItems.forEach((i) => mergedItems.push(i));

  //     uniqueItems = mergedItems.filter(
  //       (value, index, self) =>
  //         index ===
  //         self.findIndex(
  //           (t) =>
  //             t.id === value.id && t.size === value.size && t.qty === value.qty
  //         )
  //     );
  //   }

  //   context.commit('setCart', uniqueItems);

  //   console.log(items);
  //   console.log(uniqueItems);

  //   if (arraysEqual(items, uniqueItems)) {
  //     context.commit('setCartToLocalStorage', items);
  //     return;
  //   }

  //   const userId = context.rootGetters['auth/id'];
  //   try {
  //     await firebase
  //       .database()
  //       .ref('users/' + userId + '/cart')
  //       .set(uniqueItems);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // getCartFromLocalStorage(context) {
  //   const items = JSON.parse(localStorage.getItem('cart'));
  //   context.commit('setCart', items);
  // },
  // setCartToLocalStorage(context) {
  //   const items = context.getters.items;
  //   context.commit('setCartToLocalStorage', items);
  // },
  // async removeItem(context, payload) {
  //   const items = context.getters.items;
  //   const itemToRemove = { ...payload };

  //   const objectsEqual = (o1, o2) =>
  //     Object.keys(o1).length === Object.keys(o2).length &&
  //     Object.keys(o1).every((p) => o1[p] === o2[p]);

  //   const updatedItems = items.filter(
  //     (item) => !objectsEqual(item, itemToRemove)
  //   );

  //   context.commit('setCart', updatedItems);
  //   context.commit('setCartToLocalStorage', updatedItems);

  //   const userId = context.rootGetters['auth/id'];

  //   try {
  //     await firebase
  //       .database()
  //       .ref('users/' + userId + '/cart')
  //       .set(updatedItems);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
};
