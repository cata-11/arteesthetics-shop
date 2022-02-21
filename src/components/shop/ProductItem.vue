<template>
  <div id="card-wrapper">
    <div id="card">
      <div class="header">
        <h1>{{ product.title }}</h1>
      </div>
      <div class="body">
        <div class="img">
          <img :src="product.img" alt="" />
        </div>
        <div class="info">
          <p>
            <span>in stock | promotion | bestseller</span>
          </p>
        </div>
      </div>
      <div class="action">
        <div>
          <p>${{ product.price }}</p>
        </div>
        <router-link :to="'/shop/' + product.id"> View </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style scoped>
#card-wrapper {
  margin: 1.1rem;

  --card-width: 20.52rem;

  --card-font-size: 2rem;
  --card-padding: 0.5rem;

  --spacing: 1rem;

  --img-height: calc(var(--card-width) - 5rem);
  --img-width: calc(var(--card-width) - 11rem);

  --info-width: 3rem;
  --info-height: calc(var(--card-width) + var(--spacing) / 2 + 1.5rem);
}
#card {
  margin-left: 0.5rem;
  width: var(--card-width);
  border-left: 0.1rem solid var(--a-white);
}
.header {
  width: var(--card-width);
  transform: translateX(-0.5rem);
  background-color: var(--violet);
  border-left: 0.5rem solid var(--violet);
}
h1 {
  font-size: var(--card-font-size);
  padding: var(--card-padding);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.body {
  display: flex;
}
.img {
  width: var(--img-width);
  height: var(--img-height);
  border: 1rem solid var(--a-white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: var(--spacing);
}
img {
  width: 100%;
  object-fit: cover;
}
.info {
  background-color: var(--red);
  width: var(--info-width);
  height: var(--info-height);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.info > p {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info > p > span {
  font-size: calc(var(--card-font-size) / 1.5);
  padding-left: calc(var(--card-padding) / 3.5);
  padding-top: var(--card-padding);
  padding-bottom: var(--card-padding);
  writing-mode: vertical-lr;
}
.action {
  /* width: 21rem; */
  display: flex;
}
.action > div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  /* width: var(--price-width); */
  padding: var(--card-padding);
  transform: translateX(-0.5rem);
}
.action > div > p {
  font-size: var(--card-font-size);
}
.action > a {
  margin-right: 0;
  margin-left: calc(var(--spacing) / 1.5);
  width: 22rem;
  font-size: var(--card-font-size);
  padding: var(--card-padding);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--black);
  color: var(--a-white);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border: 0.5rem solid var(--violet);
}

a:hover {
  color: var(--violet);
  background-color: var(--a-white);
  border-color: var(--violet);
}

@media only screen and (max-width: 1280px) {
  #card-wrapper {
    margin: 1.2rem;
    --card-width: 19rem;
    --card-font-size: 1.8rem;
    --card-padding: 0.7rem;
    --img-width: calc(var(--card-width) - 8rem);
  }
}

@media only screen and (max-width: 1120px) {
  #card-wrapper {
    margin: 1.7rem;
    --card-width: 23rem;
    --card-font-size: 2rem;
    --card-padding: 1rem;
  }
}
@media only screen and (max-width: 1024px) {
  #card-wrapper {
    --card-width: 21rem;
    --card-font-size: 1.9rem;
    --card-padding: 0.9rem;
  }
}
@media only screen and (max-width: 970px) {
  #card-wrapper {
    --card-width: 20rem;
    --card-font-size: 1.8rem;
    --card-padding: 0.8rem;
  }
}
@media only screen and (max-width: 870px) {
  #card-wrapper {
    margin: 1.2rem;
    --card-width: 19rem;
    --card-font-size: 1.7rem;
    --card-padding: 0.7rem;
  }
}
@media only screen and (max-width: 768px) {
  #card-wrapper {
    --card-width: 17rem;
    --card-font-size: 1.5rem;
    --card-padding: 0.5rem;
    --img-width: calc(var(--card-width) - 6rem);
    --img-height: calc(var(--card-width) - 6rem);
    --info-height: calc(var(--card-width) + var(--spacing) / 2 + 0.5rem);
  }
}
@media only screen and (max-width: 680px) {
  #card-wrapper {
    margin: 1.3rem;
    --card-width: 18rem;
    --card-font-size: 1.6rem;
    --card-padding: 0.6rem;
  }
}
@media only screen and (max-width: 600px) {
  #card-wrapper {
    margin: 1.07rem;
    --card-width: 16rem;
    --card-font-size: 1.4rem;
    --card-padding: 0.4rem;

    --img-width: calc(var(--card-width) - 6rem);
    --img-height: calc(var(--card-width) - 6rem);
    --info-height: calc(var(--card-width) + var(--spacing) / 2 + 0.5rem);
  }
}
@media only screen and (max-width: 480px) {
  #card-wrapper {
    margin: 2rem auto;
    --card-width: 22rem;
    --card-font-size: 2rem;
    --card-padding: 1rem;
    --img-width: calc(var(--card-width) - 11rem);
  }
}
@media only screen and (max-width: 420px) {
  #card-wrapper {
    --card-width: 21rem;
    --card-font-size: 1.9rem;
    --card-padding: 0.9rem;
  }
}
@media only screen and (max-width: 380px) {
  #card-wrapper {
    margin: 1.5rem auto;
    --card-width: 20rem;
    --card-font-size: 1.8rem;
    --card-padding: 0.8rem;
  }
}
@media only screen and (max-width: 360px) {
  #card-wrapper {
    margin: 1rem auto;
    --card-width: 19rem;
    --card-font-size: 1.7rem;
    --card-padding: 0.7rem;
  }
}
@media only screen and (max-width: 320px) {
  #card-wrapper {
    margin: 1rem auto;
    --card-width: 17rem;
    --card-font-size: 1.5rem;
    --card-padding: 0.5rem;
    --img-width: calc(var(--card-width) - 8rem);
  }
}
</style>
