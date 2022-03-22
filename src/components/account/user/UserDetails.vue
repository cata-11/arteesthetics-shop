<template>
  <section id="user-details">
    <form id="user-contact-info">
      <div class="header">
        <h2>Contact information</h2>
      </div>
      <div class="body">
        <div>
          <label for="first-name">First name</label>
          <div class="input-container">
            <input
              :readonly="input.firstName"
              type="text"
              placeholder="First name"
              id="first-name"
              v-model="user.firstName"
              :class="{ 'edit-mode': !input.firstName }"
            />
            <img
              :src="input.firstName ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'firstName')"
            />
          </div>
        </div>
        <div>
          <label for="last-name">Last name</label>
          <div class="input-container">
            <input
              :readonly="input.lastName"
              type="text"
              placeholder="Last name"
              id="last-name"
              v-model="user.lastName"
              :class="{ 'edit-mode': !input.lastName }"
            />
            <img
              :src="input.lastName ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'lastName')"
            />
          </div>
        </div>
        <div>
          <label for="email-address">Email</label>
          <div class="input-container">
            <input
              readonly
              type="email"
              placeholder="Email address"
              id="email-address"
              v-model="user.emailAddress"
            />
          </div>
        </div>
        <div>
          <label for="phone-number">Phone</label>
          <div class="input-container">
            <input
              :readonly="input.phoneNumber"
              type="tel"
              placeholder="Phone number"
              id="phone-number"
              v-model="user.phoneNumber"
              :class="{ 'edit-mode': !input.phoneNumber }"
            />
            <img
              :src="input.phoneNumber ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'phoneNumber')"
            />
          </div>
        </div>
      </div>
    </form>
    <form id="user-shipping-address">
      <div class="header">
        <h2>Shipping Address</h2>
      </div>
      <div class="body">
        <div>
          <label for="shipping-address">Address</label>
          <div class="input-container">
            <input
              :readonly="input.deliveryAddress"
              type="text"
              placeholder="Delivery address"
              id="shipping-address"
              v-model="user.deliveryAddress"
              :class="{ 'edit-mode': !input.deliveryAddress }"
            />
            <img
              :src="input.deliveryAddress ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'deliveryAddress')"
            />
          </div>
        </div>
        <div>
          <label for="shipping-city">City</label>
          <div class="input-container">
            <input
              :readonly="input.city"
              type="text"
              placeholder="City"
              id="shipping-city"
              v-model="user.city"
              :class="{ 'edit-mode': !input.city }"
            />
            <img
              :src="input.city ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'city')"
            />
          </div>
        </div>
        <div>
          <label for="postal-code">Postal code</label>
          <div class="input-container">
            <input
              :readonly="input.postalCode"
              type="text"
              id="postal-code"
              placeholder="Postal code"
              v-model="user.postalCode"
              :class="{ 'edit-mode': !input.postalCode }"
            />
            <img
              :src="input.postalCode ? '/edit.svg' : '/check.svg'"
              @click="toggleEditMode($event, 'postalCode')"
            />
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import firebase from 'firebase/compat/app';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        deliveryAddress: '',
        city: '',
        postalCode: ''
      },
      input: {
        firstName: true,
        lastName: true,
        emailAddress: true,
        phoneNumber: true,
        deliveryAddress: true,
        city: true,
        postalCode: true
      },
      isEditMode: false
    };
  },
  computed: {
    ...mapGetters({
      uid: 'auth/id'
    })
  },
  methods: {
    async toggleEditMode(event, key) {
      const currentInput = event.target.previousSibling;
      currentInput.focus();
      if (this.input[key] === false) {
        this.input[key] = true;
        await this.updateDb(key);
      } else this.input[key] = false;
    },
    async updateDb(key) {
      if (
        this.user[key] === undefined ||
        this.user[key] === null ||
        this.uid === null ||
        this.uid === undefined
      ) {
        return;
      }
      try {
        await firebase
          .database()
          .ref('users/' + this.uid + '/' + key)
          .set(this.user[key]);
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          msg: 'Something went wrong.\nTry again later',
          type: 'error'
        });
      }
    },
    async getUserData() {
      const id = this.$store.getters['auth/id'];
      const data = await firebase
        .database()
        .ref('users/' + id)
        .get();
      const userData = data.val();

      this.user.firstName = userData.firstName;
      this.user.lastName = userData.lastName;
      this.user.emailAddress = userData.emailAddress;
      this.user.phoneNumber = userData.phoneNumber;
      this.user.deliveryAddress = userData.deliveryAddress;
      this.user.city = userData.city;
      this.user.postalCode = userData.postalCode;
    }
  },
  async mounted() {
    this.$store.dispatch('loader/toggleLoader');
    await this.getUserData();
    this.$store.dispatch('loader/toggleLoader');
  }
};
</script>

<style scoped>
#user-details {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
form {
  padding: 2rem;
  border: 2px solid var(--white);
  display: inline-flex;
  flex-direction: column;
}
.header {
  text-align: start;
  margin-bottom: calc(var(--basic-font-size) / 1.5);
}
.header > h2 {
  font-size: calc(var(--basic-font-size) * 1.15);
  border-bottom: 7px solid var(--violet);
  padding-bottom: 0.5rem;
}
.body {
  display: flex;
  flex-direction: column;
}
.body > div {
  display: flex;
  flex-direction: column;
  margin-bottom: calc(var(--basic-font-size) / 2);
}
label,
input {
  font-size: var(--basic-font-size);
}
label {
  margin-bottom: calc(var(--basic-font-size) / 6);
}
input {
  padding: calc(var(--basic-font-size) / 4);
  padding-right: calc(var(--main-width) / 20);
  background-color: var(--a-white);
  cursor: default;
}
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.input-container:hover img {
  opacity: 1;
}
.input-container img {
  opacity: 0.3;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 0.2s ease-in-out;
  padding: calc(var(--basic-font-size) / 5);
}

.edit-mode {
  background-color: var(--white);
  cursor: text;
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  #user-details {
    flex-direction: column;
  }
  #user-shipping-address {
    margin-top: 2rem;
  }
  .body img {
    opacity: 1;
    width: calc(var(--main-width) / 18);
    height: calc(var(--main-width) / 18);
  }
}
</style>
