<template>
  <div class="container">
    <span>
      <h1>elite</h1>
    </span>
    <span>
      <h1>aesthetic</h1>
    </span>
    <span>
      <h1>oversized</h1>
    </span>
    <span>
      <h1>t-shirts</h1>
    </span>
  </div>
</template>

<style scoped>
.container {
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 3.5rem;
  padding: 0;
  margin: 0;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 1rem;
  text-transform: uppercase;
  width: fit-content;
  position: relative;
  opacity: 0;
  animation: text-reveal 0.2s ease forwards;
  animation-delay: 1s;
  line-height: 4.5rem;
}
span:nth-of-type(1) h1 {
  animation-delay: 0.5s;
}
span:nth-of-type(2) h1 {
  animation-delay: 1s;
}
span:nth-of-type(3) h1 {
  animation-delay: 1s;
}
span:nth-of-type(4) h1 {
  animation-delay: 1.5s;
}
span {
  position: relative;
  width: fit-content;
  margin: 0.2rem;
}
span::after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--white);
}
span:nth-of-type(1)::after {
  animation: overlay-reveal-left 1s ease forwards;
  animation-delay: 0s;
  background-color: var(--red);
}
span:nth-of-type(1):hover span:nth-of-type(1)::after {
  animation: overlay-reveal-left 1s ease forwards;
}
span:nth-of-type(2)::after {
  animation: overlay-reveal-right 1s ease forwards;
  animation-delay: 0.5s;
  background-color: var(--white);
}
span:nth-of-type(3)::after {
  animation: overlay-reveal-left 1s ease forwards;
  animation-delay: 0.5s;
  background-color: var(--violet);
}
span:nth-of-type(4)::after {
  animation: overlay-reveal-right 1s ease forwards;
  animation-delay: 1s;
  background-color: var(--pink);
}
@keyframes overlay-reveal-left {
  0% {
    left: 0;
    right: 100%;
    width: 0%;
  }
  50% {
    right: 0;
    left: 0;
    width: 100%;
  }
  100% {
    right: 0;
    left: 100%;
    width: 0%;
  }
}
@keyframes overlay-reveal-right {
  0% {
    right: 0;
    left: 100%;
    width: 0%;
  }
  50% {
    right: 0;
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    right: 100%;
    width: 0%;
  }
}
@keyframes text-reveal {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 380px) {
  .container {
    width: 100%;
    margin-top: 2rem;
    height: fit-content;
    align-items: center;
    justify-content: center;
  }
  h1 {
    width: fit-content;
    position: relative;
    font-size: 1.8rem;
    line-height: 1.9rem;
    letter-spacing: 0.6rem;
  }
}

@media only screen and (max-width: 360px) {
  h1 {
    font-size: 1.7rem;
    line-height: 1.8rem;
  }
}

@media only screen and (max-width: 320px) {
  h1 {
    font-size: 1.5rem;
    line-height: 1.6rem;
  }
}
</style>
