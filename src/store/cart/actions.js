import firebase from 'firebase/compat/app';
export default {
  async addToCart(context, payload) {
    const cartItem = {
      id: payload.prodId,
      size: payload.size,
      qty: 1
    };

    context.commit('addToCart', cartItem);

    const items = context.getters.items;

    const userId = context.rootGetters['auth/id'];
    if (context.rootGetters['auth/isAuth']) {
      try {
        await firebase
          .database()
          .ref('users/' + userId + '/cart')
          .set(items);
      } catch (err) {
        console.log(err);
      }
    }
    localStorage.setItem('cart', JSON.stringify(items));
  },
  async getCartFromDb(context, payload) {
    let data;
    try {
      data = await firebase
        .database()
        .ref('users/' + payload.id + '/cart')
        .get();
    } catch (err) {
      console.log(err);
    }

    const localItems = JSON.parse(localStorage.getItem('cart'));

    const databaseItems = data.val();

    let mergedItems = [];

    if (databaseItems !== null) {
      mergedItems = [...databaseItems];
    }
    if (localItems !== null) {
      mergedItems = [...localItems];
    }

    const uniqueItems = [...mergedItems];

    const userId = context.rootGetters['auth/id'];
    try {
      await firebase
        .database()
        .ref('users/' + userId + '/cart')
        .set(uniqueItems);
    } catch (err) {
      console.log(err);
    }

    context.commit('setCart', uniqueItems);
  },
  getCartFromLocalStorage(context) {
    const items = JSON.parse(localStorage.getItem('cart'));
    context.commit('setCart', items);
  }

  //   const products = context.rootGetters['products/products'];
  //   const product = products.find((prod) => prod.id === id);

  //   const cartItems = context.getters.items;
  //   const cartItem = cartItems.find(
  //     (item) => item.id === id && item.selectedSize === selectedSize
  //   );
  //   if (cartItem) {
  //     cartItem.cartQty += selectedQty;
  //   } else {
  //     const newProduct = { ...product };
  //     newProduct.cartQty = selectedQty;
  //     newProduct.selectedSize = selectedSize;
  //     context.commit('addToCart', newProduct);
  //   }
  // },
  // loadCartFromLocalStorage(context, payload) {
  //   context.commit('loadItems', payload);
  // },

  // changeQuantity(context, payload) {
  //   const id = payload.id;
  //   const selectedSize = payload.size;
  //   const newQty = payload.qty;
  //   const cartItems = context.getters.items;
  //   const cartItem = cartItems.find(
  //     (item) => item.id === id && item.selectedSize === selectedSize
  //   );
  //   cartItem.cartQty = newQty;
  //   context.commit('changeQty');
  // },

  // removeFromCart(context, payload) {
  //   const id = payload.id;
  //   const selectedSize = payload.size;
  //   const cartItems = context.getters.items;
  //   const cartItem = cartItems.find(
  //     (item) => item.id === id && item.selectedSize === selectedSize
  //   );
  //   const index = cartItems.indexOf(cartItem);
  //   cartItems.splice(index, 1);
  //   context.commit('removeFromCart');
  // }
};
