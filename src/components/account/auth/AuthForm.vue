<template>
  <Transition name="fade" mode="out-in">
    <div id="signup" :key="key">
      <h2>Welcome !</h2>
      <form action="">
        <div class="input-container">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            v-model.trim="email"
            @input="validateEmail"
          />
          <p class="error-msg" :class="{ 'show-error': !!error.email }">
            {{ error.email }}
          </p>
        </div>

        <div class="input-container">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
            @input="validatePassword"
          />
          <p class="error-msg" :class="{ 'show-error': !!error.password }">
            {{ error.password }}
          </p>
        </div>

        <div class="input-container" v-if="mode === 'signup'">
          <label for="confirm-password">Repeat password</label>
          <input
            type="password"
            id="repeat-password"
            placeholder="Repeat password"
            v-model="repeatPassword"
            @input="validateRepeatedPassword"
          />
          <p
            class="error-msg"
            :class="{ 'show-error': !!error.repeatPassword }"
          >
            {{ error.repeatPassword }}
          </p>
        </div>

        <div v-if="mode === 'signup'">
          <base-button class="btn" @click.prevent="signUp">SIGN UP</base-button>
        </div>
        <div v-else>
          <base-button class="btn" @click.prevent="logIn">LOG IN</base-button>
        </div>
      </form>
      <div>
        <p v-if="mode === 'signup'">
          Already have an account ?
          <span @click="changeMode('login')">LOG IN</span>
        </p>
        <p v-else>
          Don't have an account ?
          <span @click="changeMode('signup')">SIGN UP</span>
        </p>
      </div>
    </div>
  </Transition>
</template>

<script>
import firebase from 'firebase/compat/app';
export default {
  emits: ['change-component'],
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      error: {
        email: '',
        password: '',
        repeatPassword: ''
      },
      mode: 'login',
      key: 0
    };
  },
  methods: {
    validateEmail() {
      if (this.email === '') {
        return false;
      }
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(this.email) && this.mode === 'signup') {
        this.error.email = 'Invalid email';
        return false;
      }
      this.error.email = '';
      return true;
    },
    validatePassword() {
      if (this.password === '') {
        return false;
      }
      if (this.password.length <= 5 && this.mode === 'signup') {
        this.error.password = 'Password too short';
        return false;
      }
      this.error.password = '';
      return true;
    },
    validateRepeatedPassword() {
      if (this.repeatPassword === '') {
        return false;
      }
      if (this.password !== this.repeatPassword) {
        this.error.repeatPassword = "Passwords don't match";
        return false;
      }
      this.error.repeatPassword = '';
      return true;
    },
    isFormValid() {
      if (
        !this.validateEmail() ||
        !this.validatePassword() ||
        !this.validateRepeatedPassword()
      ) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'error',
          msg: 'Please fill the form properly'
        });
        return false;
      }
      return true;
    },
    clearData() {
      this.email = '';
      this.password = '';
      this.repeatPassword = '';
      this.error.email = '';
      this.error.password = '';
      this.error.repeatPassword = '';
    },
    async addUserToDb(id) {
      await firebase
        .database()
        .ref('users/' + id)
        .set({
          emailAddress: this.email,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          deliveryAddress: '',
          city: '',
          postalCode: ''
        });
    },
    async signUp() {
      if (!this.isFormValid()) {
        return;
      }
      try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        await this.addUserToDb(res.user.uid);
        await firebase.auth().signOut();
        this.$store.dispatch('dialog/showDialog', {
          type: 'confirmation',
          msg: 'You were succsesfully registered and can login now'
        });
        this.changeMode('login');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.error.email = 'Email already registered';
        } else {
          this.$store.dispatch('dialog/showDialog', {
            type: 'error',
            msg: 'Something went wrong...\nTry again later'
          });
        }
      }
    },
    async logIn() {
      let err = false;
      if (this.email === '') {
        this.error.email = "Email can't be empty";
        err = true;
      }
      if (this.password === '') {
        this.error.password = "Password can't be empty";
        err = true;
      }
      if (err) return;

      try {
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        if (res.user.email === 'admin@test.com') {
          this.$store.dispatch('auth/login', {
            isAdmin: true,
            id: res.user.uid
          });
          this.$router.push('admin');
        } else {
          this.$store.dispatch('auth/login', {
            isAdmin: false,
            id: res.user.uid
          });
          this.$router.push('/user');
        }
      } catch (error) {
        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/user-not-found'
        ) {
          this.error.email = 'Email not registered';
        } else if (error.code === 'auth/wrong-password') {
          this.error.password = 'Wrong password';
        } else if (error.code === 'auth/too-many-requests') {
          this.$store.dispatch('dialog/showDialog', {
            type: 'error',
            msg: 'Too many attempts...\n Try again later'
          });
        } else {
          this.$store.dispatch('dialog/showDialog', {
            type: 'error',
            msg: 'Something went wrong...\n Try again later'
          });
        }
      }
    },
    changeMode(mode) {
      this.clearData();
      this.mode = mode;
      this.key++;
    }
  }
};
</script>

<style scoped>
#signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  --margin: var(--basic-font-size);
}
h2 {
  font-size: calc(var(--basic-font-size) * 1.5);
  border-bottom: 7px solid var(--violet);
  margin-bottom: var(--margin);
}
form {
  margin-top: calc(var(--margin) / 2);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* margin-bottom: calc(var(--margin) / 2); */
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: calc(var(--margin) / 2);
}
label {
  font-size: var(--basic-font-size);
  margin-bottom: calc(var(--margin) / 6);
}
input {
  width: 90%;
  padding: 0.5rem;
  font-size: var(--basic-font-size);
  border: none;
  outline: none;
  background-color: var(--a-white);
  font-family: 'Roboto Slab', serif;
  margin-bottom: calc(var(--margin) / 6);
}
.error-msg {
  font-size: calc(var(--basic-font-size) / 1.5);
  height: var(--basic-font-size);
  color: var(--red);
  opacity: 0;
}
.show-error {
  opacity: 1;
}
.btn {
  font-weight: bold;
  text-transform: uppercase;

  margin-top: calc(var(--margin) / 2);
  margin-bottom: calc(var(--margin) + (var(--margin) / 2));
}

span {
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
span:hover {
  color: var(--pink);
  border-color: var(--pink);
}
p {
  font-size: calc(var(--basic-font-size) / 1.25);
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  form > div {
    flex-direction: column;
  }
  input {
    width: unset;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
