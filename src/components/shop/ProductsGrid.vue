<template>
  <section class="grid-container">
    <div class="grid" v-if="products.length !== 0">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else class="empty-result">products not found</div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  props: ['products'],
  components: {
    ProductItem
  }
};
</script>

<style scoped>
section {
  display: flex;
}
.grid {
  margin: 0 auto;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.grid-container {
  margin-bottom: 2rem;
}
.empty-result {
  text-transform: uppercase;
  font-size: var(--basic-font-size);
  border-left: 5px solid var(--violet);
  padding-left: 1rem;
}

@media only screen and (min-width: 320px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media only screen and (min-width: 680px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}
@media only screen and (min-width: 1160px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
}
</style>
