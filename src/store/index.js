import { createStore } from 'vuex';

import productsModule from './products/index.js';

export default createStore({
  modules: {
    products: productsModule
  }
});
