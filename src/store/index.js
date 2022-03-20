import { createStore } from 'vuex';

import productsModule from './products/index.js';
import dialogModule from './dialog/index.js';
import loaderModule from './loader/index.js';
import authModule from './auth/index.js';
import cartModule from './cart/index.js';

export default createStore({
  modules: {
    products: productsModule,
    dialog: dialogModule,
    loader: loaderModule,
    auth: authModule,
    cart: cartModule
  }
});
