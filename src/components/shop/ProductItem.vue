<template>
  <div id="card-wrapper" :class="{ 'out-of-stock': !product.props.inStock }">
    <div id="card">
      <div class="header">
        <h1>{{ product.title }}</h1>
      </div>
      <div class="body">
        <div class="img">
          <img :src="product.coverImage" alt="" />
        </div>
        <div class="info">
          <p>
            <span v-if="!product.props.inStock">
              {{ 'out of stock' }}
            </span>
            <span v-if="product.props.inStock">
              {{ product.props.inStock ? 'in stock' : '' }}
              {{ product.props.promotion ? ' | promotion' : '' }}
              {{ product.props.bestseller ? '| bestseller' : '' }}
            </span>
          </p>
        </div>
      </div>
      <div class="action">
        <div>
          <p>${{ product.price }}</p>
        </div>
        <router-link
          :to="'/shop/' + product.id"
          :class="{ 'out-of-stock-btn': !product.props.inStock }"
        >
          View
        </router-link>
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
  --card-width: 20rem;

  --title-font-size: calc(var(--card-width) / 10);
  --info-font-size: calc(var(--card-width) / 15.5);
  --actions-font-size: calc(var(--card-width) / 10);

  --title-padding: calc(var(--card-width) / 10 - 1.2rem);
  --info-padding: calc(var(--card-width) / 10 - 1.2rem);
  --actions-padding: calc(var(--card-width) / 10 - 1.4rem);

  --img-width: calc(var(--card-width) - 9rem);
  --img-height: calc(var(--card-width) - 4rem);
  --img-padding: 1.5rem;

  --info-width: calc(var(--card-width) / 6);
  --info-height: calc(var(--card-width) + var(--spacing) / 2 + 1.5rem);

  --spacing: 1rem;
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
  font-size: var(--title-font-size);
  padding: var(--title-padding);
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
  padding: var(--img-padding);
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
  font-size: var(--info-font-size);
  padding-left: calc(var(--info-padding) / 3.5);
  padding-top: var(--info-padding);
  padding-bottom: var(--info-padding);
  writing-mode: vertical-lr;
}
.action {
  display: flex;
}
.action > div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  padding: var(--actions-padding);
  transform: translateX(-0.5rem);
}
.action > div > p {
  font-size: var(--actions-font-size);
  padding: 0 var(--actions-padding);
}
.action > a {
  margin-right: 0;
  margin-left: calc(var(--spacing) / 1.5);
  width: 22rem;
  font-size: var(--actions-font-size);
  padding: var(--actions-padding);
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

.out-of-stock {
  filter: brightness(70%);
  cursor: not-allowed;
}
.out-of-stock-btn {
  pointer-events: none;
  text-decoration: line-through;
}

@media only screen and (min-width: 320px) {
  #card-wrapper {
    --card-width: 17rem;

    --title-font-size: calc(var(--card-width) / 10);
    --info-font-size: calc(var(--card-width) / 15.5);
    --actions-font-size: calc(var(--card-width) / 10);

    --title-padding: calc(var(--card-width) / 10 - 1.2rem);
    --info-padding: calc(var(--card-width) / 10 - 1.2rem);
    --actions-padding: calc(var(--card-width) / 10 - 1.4rem);

    --img-width: calc(var(--card-width) - 9rem);
    --img-height: calc(var(--card-width) - 4rem);
    --img-padding: 1.5rem;

    --info-width: calc(var(--card-width) / 6);
    --info-height: calc(var(--card-width) + var(--spacing) / 2 + 1.5rem);

    --spacing: 1rem;
  }
}

@media only screen and (min-width: 360px) {
  #card-wrapper {
    --card-width: 18rem;
    --img-padding: 1.75rem;

    --info-height: calc(var(--card-width) + var(--spacing) / 2 + 2rem);
  }
}
@media only screen and (min-width: 400px) {
  #card-wrapper {
    --card-width: 19rem;
  }
}
@media only screen and (min-width: 440px) {
  #card-wrapper {
    --card-width: 20rem;
  }
}
@media only screen and (min-width: 480px) {
  #card-wrapper {
    --card-width: 21rem;
  }
}
@media only screen and (min-width: 520px) {
  #card-wrapper {
    --card-width: 22rem;
  }
}
@media only screen and (min-width: 560px) {
  #card-wrapper {
    --card-width: 23rem;
  }
}
@media only screen and (min-width: 600px) {
  #card-wrapper {
    --card-width: 24rem;
  }
}
@media only screen and (min-width: 640px) {
  #card-wrapper {
    --card-width: 25rem;
  }
}
@media only screen and (min-width: 680px) {
  #card-wrapper {
    --card-width: 17rem;
  }
}
@media only screen and (min-width: 720px) {
  #card-wrapper {
    --card-width: 18rem;
  }
}
@media only screen and (min-width: 760px) {
  #card-wrapper {
    --card-width: 19rem;
  }
}
@media only screen and (min-width: 800px) {
  #card-wrapper {
    --card-width: 20rem;
  }
}
@media only screen and (min-width: 840px) {
  #card-wrapper {
    --card-width: 21rem;
  }
}
@media only screen and (min-width: 880px) {
  #card-wrapper {
    --card-width: 22rem;
  }
}
@media only screen and (min-width: 920px) {
  #card-wrapper {
    --card-width: 23rem;
  }
}
@media only screen and (min-width: 960px) {
  #card-wrapper {
    --card-width: 24rem;
  }
}
@media only screen and (min-width: 1000px) {
  #card-wrapper {
    --card-width: 25rem;
  }
}
@media only screen and (min-width: 1040px) {
  #card-wrapper {
    --card-width: 26rem;
  }
}
@media only screen and (min-width: 1080px) {
  #card-wrapper {
    --card-width: 27rem;
  }
}
@media only screen and (min-width: 1120px) {
  #card-wrapper {
    --card-width: 28rem;
  }
}
@media only screen and (min-width: 1160px) {
  #card-wrapper {
    --card-width: 21.401rem;
  }
}
</style>
