<template>
  <ProductsGrid :products="products" />
</template>

<script>
import ProductsGrid from '../../shop/ProductsGrid.vue';

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductsGrid
  }
};
</script>

<style scoped></style>
