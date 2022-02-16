<template>
  <SearchBox />
  <TheFilter />
  <ProductsGrid />
</template>

<script>
import SearchBox from '../components/shop/SearchBox.vue';
import ProductsGrid from '../components/shop/ProductsGrid.vue';
import TheFilter from '../components/shop/TheFilter.vue';

export default {
  components: {
    SearchBox,
    ProductsGrid,
    TheFilter
  }
};
</script>
