<template>
  <ProductsGrid :products="products" v-if="products.length" />
  <div v-else>your wishlist is empty</div>
</template>

<script>
import ProductsGrid from '../../shop/ProductsGrid.vue';
import firebase from 'firebase/compat/app';
export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductsGrid
  },
  methods: {
    async getProducts() {
      const favProds = this.$store.getters['auth/favProducts'];
      for (const prodId of favProds) {
        const data = await firebase
          .database()
          .ref('products/' + prodId)
          .get();

        const prodData = data.val();

        const product = {
          id: prodId,
          title: prodData.title,
          coverImage: prodData.coverImage,
          description: prodData.description,
          price: prodData.price,
          sizes: prodData.sizes,
          images: prodData.images,
          props: prodData.props
        };
        let sum = 0;
        product.sizes.forEach((size) => (sum += +size.stock));
        product.props.inStock = sum !== 0 ? true : false;
        this.products.push(product);
      }
    }
  },
  async mounted() {
    this.$store.dispatch('loader/toggleLoader');
    await this.getProducts();
    this.$store.dispatch('loader/toggleLoader');
  }
};
</script>
