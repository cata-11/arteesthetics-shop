<template>
  <section>
    <CartList :items="items" />
    <CartTotal />
  </section>
</template>

<script>
import CartList from '../components/cart/CartList.vue';
import CartTotal from '../components/cart/CartTotal.vue';
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Dead Bunny',
          coverImage: '/shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 25,
          sizes: [
            {
              size: 'XS',
              stock: 10
            },
            {
              size: 'S',
              stock: 10
            },
            {
              size: 'L',
              stock: 10
            },
            {
              size: 'M',
              stock: 10
            }
          ],
          images: [
            {
              id: 1,
              src: '/1.png',
              isActive: true
            },
            {
              id: 2,
              src: '/2.png',
              isActive: false
            },
            {
              id: 3,
              src: '/3.png',
              isActive: false
            },
            {
              id: 4,
              src: '/4.png',
              isActive: false
            },
            {
              id: 5,
              src: '/5.png',
              isActive: false
            },
            {
              id: 6,
              src: '/6.png',
              isActive: false
            },
            {
              id: 7,
              src: '/7.png',
              isActive: false
            }
          ],
          props: {
            stockTotal: 40,
            promotion: true,
            bestseller: false
          }
        },
        {
          id: 1,
          title: 'Aesthetic Skull',
          coverImage: '/shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 25,
          sizes: [
            {
              size: 'XS',
              stock: 10
            },
            {
              size: 'S',
              stock: 10
            },
            {
              size: 'L',
              stock: 10
            },
            {
              size: 'M',
              stock: 10
            }
          ],
          images: [
            {
              id: 1,
              src: '/1.png',
              isActive: true
            },
            {
              id: 2,
              src: '/2.png',
              isActive: false
            },
            {
              id: 3,
              src: '/3.png',
              isActive: false
            },
            {
              id: 4,
              src: '/4.png',
              isActive: false
            },
            {
              id: 5,
              src: '/5.png',
              isActive: false
            },
            {
              id: 6,
              src: '/6.png',
              isActive: false
            },
            {
              id: 7,
              src: '/7.png',
              isActive: false
            }
          ],
          props: {
            stockTotal: 40,
            promotion: true,
            bestseller: false
          }
        }
      ]
    };
  },

  components: {
    CartList,
    CartTotal
  }
};
</script>

<style scoped>
section {
  margin-top: 2rem;
}
</style>
