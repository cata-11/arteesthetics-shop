import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import ShopPage from '../views/ShopPage.vue';
import ProductDetails from '../views/ProductDetails.vue';
import AuthPage from '../views/AuthPage.vue';
import UserPage from '../views/UserPage.vue';
import AdminPage from '../views/AdminPage.vue';
import CartPage from '../views/CartPage.vue';
import NotFound from '../views/NotFound.vue';

import store from '../store/index.js';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: HomePage
  },
  {
    name: 'Shop',
    path: '/shop',
    component: ShopPage
  },
  {
    name: 'Product',
    path: '/shop/:id',
    component: ProductDetails,
    props: true
  },
  {
    name: 'Auth',
    path: '/auth',
    component: AuthPage,
    meta: {
      auth: true
    }
  },
  {
    name: 'User',
    path: '/user',
    component: UserPage,
    meta: {
      requiresUserAuth: true
    }
  },
  {
    name: 'Admin',
    path: '/admin',
    component: AdminPage,
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    name: 'Cart',
    path: '/cart',
    component: CartPage
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdminAuth && !store.getters['auth/isAdmin']) {
    next('/auth');
  } else if (to.meta.requiresUserAuth && !store.getters['auth/isAuth']) {
    next('/auth');
  } else if (to.meta.auth && store.getters['auth/isAdmin']) {
    next('/admin');
  } else if (to.meta.auth && store.getters['auth/isAuth']) {
    next('/user');
  } else next();
});

export default router;
