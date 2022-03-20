<template>
  <section>
    <CartList :items="items" />
    <CartTotal />
  </section>
</template>

<script>
import { onAuthStateInit } from '../main.js';
import firebase from 'firebase/compat/app';
import { mapGetters } from 'vuex';
import CartList from '../components/cart/CartList.vue';
import CartTotal from '../components/cart/CartTotal.vue';
export default {
  data() {
    return {
      items: []
    };
  },

  components: {
    CartList,
    CartTotal
  },

  computed: {
    ...mapGetters({
      cartItems: 'cart/items'
    })
  },

  methods: {
    async loadItems() {
      if (this.cartItems === null || this.cartItems === undefined) {
        throw 'unexpected';
      }
      for (const item of this.cartItems) {
        const prodId = item.id;
        const data = await firebase
          .database()
          .ref('products/' + prodId)
          .get();
        const prodData = data.val();

        const product = {
          id: prodId,
          title: prodData.title,
          coverImage: prodData.coverImage,
          price: prodData.price,
          size: item.size,
          quantity: item.qty
        };

        this.items.push(product);
      }
    }
  },

  async created() {
    this.$store.dispatch('loader/toggleLoader');
    await onAuthStateInit();
    await this.loadItems();
    this.$store.dispatch('loader/toggleLoader');
  }
};
</script>

<style scoped>
section {
  margin-top: 2rem;
}
</style>
