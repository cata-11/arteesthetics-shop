<template>
  <section class="grid-container">
    <div class="grid">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async loadProducts() {
      this.$store.dispatch('loader/toggleLoader');

      await this.$store
        .dispatch('products/getProducts')
        .then(() => {
          this.products = this.$store.getters['products/products'];
        })
        .catch(() => {
          this.$store.dispatch('dialog/showDialog', {
            type: 'Error',
            msg: 'Seems like database is offline. Try again later...'
          });
        });
      this.$store.dispatch('loader/toggleLoader');
    }
  },
  components: {
    ProductItem
  },
  created() {
    this.loadProducts();
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
