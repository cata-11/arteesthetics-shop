import { createStore } from 'vuex';

import productsModule from './products/index.js';
import dialogModule from './dialog/index.js';
import loaderModule from './loader/index.js';

export default createStore({
  modules: {
    products: productsModule,
    dialog: dialogModule,
    loader: loaderModule
  }
});
