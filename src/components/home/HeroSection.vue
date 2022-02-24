<template>
  <section>
    <div class="video-container">
      <video src="the-t-shirt-video.webm" autoplay loop muted></video>
    </div>
    <div class="motto-container">
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
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-container {
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
video {
  width: 100%;
  object-fit: cover;
}

.motto-container {
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

@media only screen and (min-width: 320px) {
  section {
    flex-direction: column;
  }
  .video-container {
    width: var(--main-width);
    height: var(--main-width);
    margin-top: 1rem;
  }
  .motto-container {
    width: var(--main-width);
    height: fit-content;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: calc(var(--main-width) / 10);
    letter-spacing: calc(var(--main-width) / 40);
    line-height: calc(var(--main-width) / 9);
  }
}

@media only screen and (min-width: 480px) {
}

@media only screen and (min-width: 680px) {
  /* section {
    flex-direction: row;
    margin: 1rem 0;
  }
  .video-container {
    width: calc(var(--main-width) / 2);
    height: calc(var(--main-width) / 2);
    margin: 0;
  }
  .motto-container {
    width: calc(var(--main-width) / 2);
    height: calc(var(--main-width) / 2);
    margin: 0;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    font-size: calc(var(--main-width) / 18);
    letter-spacing: calc(var(--main-width) / 80);
    line-height: calc(var(--main-width) / 16);
  } */
}
</style>
