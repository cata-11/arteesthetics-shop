<template>
  <TheFilters
    :products="allProducts"
    v-if="allProducts"
    @searchProducts="showFiltered"
    @searchAborted="showAll"
    @searchEmpty="showDialog"
  />
  <ProductsGrid :products="filteredProducts" v-if="allProducts" />
</template>

<script>
import ProductsGrid from '../components/shop/ProductsGrid.vue';
import TheFilters from '../components/shop/TheFilters.vue';
export default {
  data() {
    return {
      allProducts: null,
      filteredProducts: null
    };
  },
  methods: {
    showFiltered(filteredProducts) {
      this.filteredProducts = filteredProducts;
    },
    showAll() {
      this.filteredProducts = this.allProducts;
    },
    showDialog() {
      this.$store.dispatch('dialog/showDialog', {
        type: 'alert',
        msg: 'No products with this filter'
      });
      this.showAll();
    },
    async loadProducts() {
      this.$store.dispatch('loader/toggleLoader');

      await this.$store
        .dispatch('products/getProducts')
        .then(() => {
          this.allProducts = this.$store.getters['products/products'];
          this.filteredProducts = this.$store.getters['products/products'];
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
  created() {
    this.loadProducts();
  },
  components: {
    ProductsGrid,
    TheFilters
  }
};
</script>
