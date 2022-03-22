<template>
  <section v-if="!isEmpty">
    <TransitionGroup tag="ul" name="list">
      <CartItem
        v-for="(item, idx) in items"
        :key="item"
        :item="item"
        :idx="idx"
        @itemRemoved="removeItem"
        @quantityChanged="updateQuantity"
      />
    </TransitionGroup>
    <CartTotal :items="items" />
  </section>
  <section v-else>
    <div class="empty-result">your cart is empty</div>
  </section>
</template>

<script>
import { onAuthStateInit } from '../main.js';
import firebase from 'firebase/compat/app';
import { mapGetters } from 'vuex';
import CartItem from '../components/cart/CartItem.vue';
import CartTotal from '../components/cart/CartTotal.vue';

export default {
  data() {
    return {
      items: [],
      isEmpty: false
    };
  },

  components: {
    CartItem,
    CartTotal
  },

  computed: {
    ...mapGetters({
      cartItems: 'cart/items'
    })
  },

  methods: {
    updateQuantity(qty, item) {
      const itemToUpdate = this.items.find(
        (i) => i.id === item.id && i.size === item.size
      );
      const idx = this.items.indexOf(itemToUpdate);
      this.items[idx].qty = qty;
      this.$store.dispatch('cart/updateQuantity', { item: itemToUpdate, qty });
    },
    removeItem(item) {
      const itemToRemove = this.items.find(
        (i) => i.id === item.id && i.size === item.size
      );
      const idx = this.items.indexOf(itemToRemove);

      this.items.splice(idx, 1);

      this.isEmpty = false;
      if (this.items.length === 0) {
        setTimeout(() => {
          this.isEmpty = true;
        }, 300);
      }

      this.$store.dispatch('cart/removeFromCart', itemToRemove);
    },
    async loadItems() {
      this.isEmpty = false;
      if (this.cartItems === null || this.cartItems === undefined) {
        this.isEmpty = true;
        return;
      }
      if (this.cartItems.length === 0) {
        this.isEmpty = true;
        return;
      }
      for (const item of this.cartItems) {
        const prodId = item.id;

        var data = await firebase
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
          qty: item.qty
        };

        this.items.push(product);
      }
    }
  },

  async created() {
    this.$store.dispatch('loader/toggleLoader');
    try {
      await onAuthStateInit();
      await this.loadItems();
    } catch (err) {
      this.$store.dispatch('dialog/showDialog', {
        type: 'Error',
        msg: 'Something went wrong...\nRefresh or try again later...'
      });
    }

    this.$store.dispatch('loader/toggleLoader');
  }
};
</script>

<style scoped>
section {
  margin-top: 2rem;
}
.empty-result {
  text-transform: uppercase;
  font-size: var(--basic-font-size);

  margin-bottom: 2rem;
  border-left: 5px solid var(--violet);
  padding-left: 1rem;
}
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}
</style>
