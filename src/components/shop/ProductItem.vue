<template>
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
          <span>in stock | promotion | best seller</span>
        </p>
      </div>
    </div>
    <div class="action">
      <div>
        <p>${{ product.price }}</p>
      </div>
      <button>View</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style scoped>
#card {
  width: 21rem;
  margin: 1rem;
  border-left: 0.1rem solid var(--a-white);
}
.header {
  background-color: var(--violet);
  width: 100%;
  /* border-top: 1rem solid var(--a-white); */
  border-left: 0.5rem solid var(--violet);
  /* box-sizing: border-box; */
  transform: translateX(-0.5rem);
}
h1 {
  font-size: 2rem;
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.body {
  display: flex;
}
.img {
  width: 14rem;
  height: 17rem;
  border: 1rem solid var(--a-white);
  /* border-left: .5rem solid var(--a-white); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
}
img {
  width: 100%;
  object-fit: cover;
}
.info {
  background-color: var(--red);
  width: 4rem;
  height: 24rem;
  overflow: hidden;
}
.info > p {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.info > p > span {
  font-size: 1.25rem;
  padding: 0.5rem 0.2rem;
  writing-mode: vertical-lr;
}
.action {
  width: 21rem;
  display: flex;
}
.action > div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  width: 5rem;
  transform: translateX(-0.5rem);
  /* border-left: 0.5rem solid var(--a-white); */
}
.action > div > p {
  font-size: 2rem;
}
.action > button {
  width: 16rem;
  font-size: 2rem;
  padding: 0.75rem;
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

button:hover {
  color: var(--violet);
  background-color: var(--a-white);
  border-color: var(--violet);
}
</style>
