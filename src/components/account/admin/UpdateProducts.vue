<template>
  <ul class="products-list">
    <li
      class="item-container"
      v-for="(product, idx) in products"
      :key="product.id"
    >
      <div class="product-item">
        <div class="img-container">
          <img :src="product.coverImage" alt="" />
        </div>
        <div class="info-container">
          <div class="title-container">
            <h3>{{ product.title }}</h3>
          </div>
          <div class="actions">
            <base-button class="edit-btn" @click="enterEditMode(idx)"
              >edit</base-button
            >
            <base-button class="remove-btn">remove</base-button>
            <!-- <button class="edit-btn" @click="enterEditMode(idx)">edit</button> -->
            <!-- <button class="remove-btn">remove</button> -->
          </div>
        </div>
      </div>
      <Transition name="roll" mode="out-in">
        <base-product-form
          v-if="editModeList[idx]"
          :productData="product"
          :idx="idx"
          mode="update"
          @productUpdated="updateDb"
        ></base-product-form>
      </Transition>
    </li>
  </ul>
</template>

<script>
import BaseProductForm from '../base/BaseProductForm.vue';
export default {
  data() {
    return {
      editModeList: [],
      products: [
        {
          id: 0,
          title: 'Nobody knows how long this text is',
          coverImage: '/shirt0.png',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
          coverImage: '/shirt0.png',
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
        }
      ]
    };
  },
  methods: {
    setEditModeList() {
      this.products.forEach(() => {
        this.editModeList.push(false);
      });
    },
    enterEditMode(idx) {
      this.editModeList[idx] = true;
    },
    saveChanges(idx) {
      this.editModeList[idx] = false;
    },
    updateDb(idx) {
      this.saveChanges(idx);
      console.log(idx);
    }
  },
  mounted() {
    this.setEditModeList();
  },
  components: {
    BaseProductForm
  }
};
</script>

<style scoped>
.products-list {
  margin-top: 2rem;
}
.item-container {
  margin-bottom: 1rem;
}
.product-item {
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--a-white);
  padding: 1rem;
}
.img-container {
  width: 7.5rem;
  height: 7.5rem;
  padding: 0.75rem;
  border: 5px solid var(--a-white);
}

img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.info-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  flex: 1;
}

.title-container {
  width: 30rem;
  margin-right: 1rem;
}

h3 {
  font-size: calc(var(--basic-font-size) + 0.5rem);
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.actions {
  width: 44%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.edit-btn,
.remove-btn {
  width: 100%;
}

.remove-btn {
  margin-left: 1rem;
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  .products-list {
    margin-top: 2rem;
  }

  .info-container {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    width: 50%;
  }

  .img-container {
    padding: calc(var(--main-width) / 64);
    border: calc(var(--main-width) / 128) solid var(--a-white);
  }

  .title-container {
    width: 100%;
    margin-right: 0;
  }

  .actions {
    width: 100%;
  }

  .edit-btn,
  .remove-btn {
    border: calc(var(--main-width) / 128) solid var(--violet);
    padding: calc(var(--main-width) / 140) calc(var(--main-width) / 70);
  }
}

.roll-enter-active,
.roll-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 40rem;
}

.roll-enter-from,
.roll-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
