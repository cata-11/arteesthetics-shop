import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import BaseButton from './components/base/BaseButton.vue';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAFFiwsgIm0oLcyj7mS2FHLJ8YImMOHBlM',
  authDomain: 'arteesthetics-demo.firebaseapp.com',
  databaseURL:
    'https://arteesthetics-demo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'arteesthetics-demo',
  storageBucket: 'arteesthetics-demo.appspot.com',
  messagingSenderId: '975774542110',
  appId: '1:975774542110:web:55de47495c9749a2c1810f'
};
firebase.initializeApp(firebaseConfig);

const authChangeHandle = new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(
    async (user) => {
      if (user) {
        const data = await firebase
          .database()
          .ref('users/' + user.uid + '/favProducts')
          .get();
        const favProducts = data.val() !== null ? data.val() : [];

        if (user.email === 'admin@test.com') {
          store.dispatch('auth/login', {
            isAdmin: true,
            id: user.uid,
            favProducts: favProducts
          });
        } else {
          store.dispatch('auth/login', {
            isAdmin: false,
            id: user.uid,
            favProducts: favProducts
          });
        }
      } else {
        store.dispatch('auth/logout');
      }
      try {
        await store.dispatch('cart/getItems');
      } catch (err) {
        throw 'error';
      }
      resolve(user);
    },
    (err) => {
      reject(err);
    }
  );
});

export const onAuthStateInit = () => authChangeHandle;

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-button', BaseButton);

app.mount('#app');
