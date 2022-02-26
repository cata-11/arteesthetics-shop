<template>
  <TheFilters />
  <ProductsGrid />
</template>

<script>
import ProductsGrid from '../components/shop/ProductsGrid.vue';
import TheFilters from '../components/shop/TheFilters.vue';

export default {
  components: {
    ProductsGrid,
    TheFilters
  }
};
</script>
