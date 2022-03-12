<template>
  <BaseAccount :data="data" />
</template>

<script>
import BaseAccount from '../components/account/base/BaseAccount.vue';
export default {
  data() {
    return {
      data: {
        type: 'personal',
        components: [
          {
            name: 'UserDetails',
            link: 'Details'
          },
          {
            name: 'UserWishlist',
            link: 'Whishlist'
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
