<template>
  <section>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  data() {
    return {
      products: [
        {
          id: '0',
          title: 'Nobody knows how long this text is',
          img: 'shirt0.png',
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
          props: {
            stockTotal: 40,
            promotion: true
          }
        },
        {
          id: '1',
          title: 'Aesthetic Skull',
          img: 'shirt0.png',
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
          props: {
            stockTotal: 40,
            promotion: true
          }
        },
        {
          id: '2',
          title: 'Aesthetic Skull',
          img: 'shirt0.png',
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
          props: {
            stockTotal: 40,
            promotion: true
          }
        },
        {
          id: '3',
          title: 'Aesthetic Skull',
          img: 'shirt0.png',
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
          props: {
            stockTotal: 40,
            promotion: true
          }
        },
        {
          id: '4',
          title: 'Aesthetic Skull',
          img: 'shirt0.png',
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
          props: {
            stockTotal: 40,
            promotion: true,
            bestseller: true
          }
        }
      ]
    };
  },
  components: {
    ProductItem
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
}
</style>
