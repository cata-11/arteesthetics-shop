import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import BaseButton from './components/base/BaseButton.vue';
import ErrorDialog from './components/layout/ErrorDialog.vue';

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

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-button', BaseButton);
app.component('error-dialog', ErrorDialog);

app.mount('#app');
