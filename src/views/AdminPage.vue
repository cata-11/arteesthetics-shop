<template>
  <BaseAccount :data="data" />
</template>

<script>
import BaseAccount from '../components/base/BaseAccount.vue';
export default {
  data() {
    return {
      data: {
        type: 'admin',
        components: [
          {
            name: 'UpdateProducts',
            link: 'Update'
          },
          {
            name: 'AddProduct',
            link: 'Add'
          }
        ]
      }
    };
  },
  components: {
    BaseAccount
  }
};
</script>
