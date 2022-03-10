<template>
  <ul>
    <CartItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import CartItem from '../cart/CartItem.vue';
export default {
  props: ['items'],
  components: {
    CartItem
  }
};
</script>
