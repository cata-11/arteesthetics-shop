<template>
  <div id="signup">
    <h2>Welcome !</h2>
    <form action="">
      <div>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
          <p class="email-check">Invalid name</p>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" />
          <p class="email-check">Invalid email</p>
        </div>
      </div>
      <div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <p class="pass-check">Wrong password</p>
        </div>
        <div>
          <label for="confirm-password">Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm password"
          />
          <p class="pass-check">Wrong password</p>
        </div>
      </div>
      <div>
        <base-button class="btn">SIGN UP</base-button>
      </div>
    </form>
    <div>
      <p>
        Already have an account ?
        <span @click="changeComponent">LOG IN</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['change-component'],
  methods: {
    changeComponent() {
      this.$emit('change-component', 'LogIn');
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
form > div > div {
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
.email-check,
.pass-check {
  font-size: calc(var(--basic-font-size) / 1.5);
  color: var(--red);
  opacity: 0;
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
</style>
