<template>
  <base-product-form mode="add" @productAdded="addToDb"></base-product-form>
</template>

<script>
import BaseProductForm from '../base/BaseProductForm.vue';
export default {
  data() {
    return {};
  },
  components: {
    BaseProductForm
  },
  methods: {
    addToDb() {
      console.log('add to db');
    }
  }
};
</script>
