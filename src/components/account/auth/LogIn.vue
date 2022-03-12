<template>
  <div id="login">
    <h2>Welcome !</h2>
    <form action="">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" />
        <p class="email-check">Invalid email</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <p class="pass-check">Wrong password</p>
      </div>
      <div>
        <base-button class="btn">LOG IN</base-button>
      </div>
    </form>
    <div>
      <p>
        Don't have an account ?
        <span @click="changeComponent">SIGN UP</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['change-component'],
  methods: {
    changeComponent() {
      this.$emit('change-component', 'SignUp');
    }
  }
};
</script>

<style scoped>
#login {
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
  margin-bottom: var(--margin);
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
</style>
