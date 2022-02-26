<template>
  <section>
    <div class="grid">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  data() {
    return {
      products: [
        {
          id: 0,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
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
          id: 2,
          title: 'Aesthetic Skull',
          coverImage: 'shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 30,
          sizes: [
            {
              size: 'XS',
              stock: 0
            },
            {
              size: 'S',
              stock: 0
            },
            {
              size: 'L',
              stock: 0
            },
            {
              size: 'M',
              stock: 0
            }
          ],
          images: [
            {
              id: 3,
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
            stockTotal: 0,
            promotion: true,
            bestseller: true
          }
        },
        {
          id: 4,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
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
          id: 5,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 30,
          sizes: [
            {
              size: 'XS',
              stock: 0
            },
            {
              size: 'S',
              stock: 0
            },
            {
              size: 'L',
              stock: 0
            },
            {
              size: 'M',
              stock: 0
            }
          ],
          images: [
            {
              id: 6,
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
            stockTotal: 0,
            promotion: false,
            bestseller: true
          }
        },
        {
          id: 7,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
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
          id: 8,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 30,
          sizes: [
            {
              size: 'XS',
              stock: 0
            },
            {
              size: 'S',
              stock: 0
            },
            {
              size: 'L',
              stock: 0
            },
            {
              size: 'M',
              stock: 2
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
            stockTotal: 2,
            promotion: false,
            bestseller: false
          }
        },
        {
          id: 9,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
          description: `Lorem ipsum dolor 
          sit amet consectetur adipisicing 
          elit.`,
          price: 30,
          sizes: [
            {
              size: 'XS',
              stock: 0
            },
            {
              size: 'S',
              stock: 10
            },
            {
              size: 'L',
              stock: 5
            },
            {
              size: 'M',
              stock: 5
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
            stockTotal: 20,
            promotion: true,
            bestseller: true
          }
        },
        {
          id: 9,
          title: 'Nobody knows how long this text is',
          coverImage: 'shirt0.png',
          description: `Lorem ipsum dolor
          sit amet consectetur adipisicing
          elit.`,
          price: 30,
          sizes: [
            {
              size: 'XS',
              stock: 0
            },
            {
              size: 'S',
              stock: 10
            },
            {
              size: 'L',
              stock: 5
            },
            {
              size: 'M',
              stock: 5
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
            stockTotal: 20,
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
}
.grid {
  margin: 2rem auto;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media only screen and (min-width: 320px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media only screen and (min-width: 680px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}
@media only screen and (min-width: 1160px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
}
</style>
