import { createStore } from 'vuex';

import productsModule from './products/index.js';
import errorModule from './error/index.js';

export default createStore({
  modules: {
    products: productsModule,
    error: errorModule
  }
});
