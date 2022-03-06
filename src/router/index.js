import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import ShopPage from '../views/ShopPage.vue';
import ProductDetails from '../views/ProductDetails.vue';
import AccountPage from '../views/AccountPage.vue';
import UserPage from '../views/UserPage.vue';
import AdminPage from '../views/AdminPage.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/shop',
    component: ShopPage
  },
  {
    path: '/shop/:id',
    component: ProductDetails,
    props: true
  },
  {
    path: '/account',
    component: AccountPage
  },
  {
    path: '/account/user',
    component: UserPage
  },
  {
    path: '/account/admin',
    component: AdminPage
  },
  {
    path: '/cart',
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
