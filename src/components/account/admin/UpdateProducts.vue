<template>
  <TransitionGroup tag="ul" class="products-list" name="list">
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
            <base-button
              class="remove-btn"
              @click="removeFromDb(product.id, idx)"
              >remove</base-button
            >
          </div>
        </div>
      </div>

      <Transition name="roll" mode="out-in">
        <base-product-form
          v-if="editModeList[idx]"
          :productData="product"
          :idx="idx"
          mode="update"
          @productUpdated="updateDb($event, idx)"
          class="pop-on-top"
        ></base-product-form>
      </Transition>
    </li>
  </TransitionGroup>
</template>

<script>
import firebase from 'firebase/compat/app';
import BaseProductForm from './ProductForm.vue';
export default {
  data() {
    return {
      editModeList: [],
      products: [],
      changedProduct: null,
      initialProduct: null,
      isLoading: false
    };
  },

  methods: {
    // load from database
    async loadProducts() {
      this.$store.dispatch('loader/toggleLoader');

      await this.$store
        .dispatch('products/getProducts')
        .then(() => {
          this.products = this.$store.getters['products/products'];
        })
        .catch(() => {
          this.$store.dispatch('dialog/showDialog', {
            type: 'Error',
            msg: 'Seems like database is offline. Try again later...'
          });
        });
      this.$store.dispatch('loader/toggleLoader');
    },

    // edit mode
    setEditModeList() {
      this.products.forEach(() => {
        this.editModeList.push(false);
      });
    },
    enterEditMode(idx) {
      if (this.editModeList[idx] === true) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'Alert',
          msg: 'You are already in edit mode !'
        });
        return;
      }

      if (this.isEditMode()) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'Alert',
          msg: 'There may be unsaved changes !'
        });
        return;
      }

      this.editModeList[idx] = true;
      this.initialProduct = this.getProduct(this.products[idx].id);
    },
    isEditMode(idx = null) {
      for (let i = 0; i < this.editModeList.length; ++i) {
        if (this.editModeList[i] === true) {
          if (idx != null && i === idx) {
            return false;
          }
          return true;
        }
      }
      return false;
    },
    exitEditMode(idx) {
      this.editModeList[idx] = false;
    },

    // product clone
    getProduct(id) {
      const initProduct = this.products.find((product) => product.id === id);
      let product = {};

      product.id = initProduct.id;
      product.title = initProduct.title;
      product.description = initProduct.description;
      product.price = initProduct.price;
      product.coverImage = initProduct.coverImage;
      product.images = [...initProduct.images];
      product.props = { ...initProduct.props };
      product.sizes = initProduct.sizes.map((s) => ({ ...s }));

      return product;
    },
    copyProduct(payload) {
      let product = {};

      product.id = payload.id;
      product.title = payload.title;
      product.description = payload.description;
      product.price = payload.price;
      product.coverImage = payload.coverImage;
      product.images = [...payload.images];
      product.props = { ...payload.props };
      product.sizes = payload.sizes.map((s) => ({ ...s }));

      return product;
    },

    // update basic values
    async updateValue(id, key) {
      await firebase
        .database()
        .ref('products/' + id)
        .child(key)
        .set(this.changedProduct[key]);
    },

    // update cover image
    async updateCoverImage(id) {
      const res = await firebase
        .storage()
        .ref('images/' + id + '/coverImage')
        .put(this.changedProduct['coverImage']);
      const url = await this.getImageUrl(res.ref);
      this.changedProduct.coverImage = url;

      await this.updateValue(id, 'coverImage');
    },

    // update other images
    async updateImages(id) {
      await this.deleteImages(id);
      const urls = await this.changeImages(id);
      await this.changeImagesUrl(id, urls);
    },

    // update other images related
    async deleteImages(id) {
      const images = await firebase
        .storage()
        .ref('images/' + id + '/images/')
        .listAll();

      for (const img of images.items) {
        await img.delete();
      }
    },
    async changeImages(id) {
      const urls = [];
      for (let i = 0; i < this.changedProduct.images.length; ++i) {
        const res = await this.changeImage(
          id,
          this.changedProduct.images[i],
          i + 1
        );
        const url = await this.getImageUrl(res);
        urls.push(url);
      }

      return urls;
    },
    async getImageUrl(ref) {
      const res = await ref.getDownloadURL();
      return res;
    },
    async changeImagesUrl(id, urls) {
      firebase.database().ref('products').child(id).update({
        images: urls
      });
    },
    async changeImage(id, img, name) {
      const res = await firebase
        .storage()
        .ref('images/' + id + `/images/${name}`)
        .put(img);
      return res.ref;
    },

    // update control
    async updateValues(id) {
      let isUpdated = false;

      if (this.initialProduct.title !== this.changedProduct.title) {
        isUpdated = true;
        await this.updateValue(id, 'title');
      }
      if (this.initialProduct.description !== this.changedProduct.description) {
        isUpdated = true;
        await this.updateValue(id, 'description');
      }
      if (this.initialProduct.price !== this.changedProduct.price) {
        isUpdated = true;
        await this.updateValue(id, 'price');
      }
      if (
        JSON.stringify(this.initialProduct.props) !=
        JSON.stringify(this.changedProduct.props)
      ) {
        isUpdated = true;
        await this.updateValue(id, 'props');
      }
      if (
        JSON.stringify(this.initialProduct.sizes) !=
        JSON.stringify(this.changedProduct.sizes)
      ) {
        isUpdated = true;
        await this.updateValue(id, 'sizes');
      }
      if (this.initialProduct.coverImage !== this.changedProduct.coverImage) {
        isUpdated = true;
        await this.updateCoverImage(id);
      }
      if (
        JSON.stringify(this.initialProduct.images) !==
        JSON.stringify(this.changedProduct.images)
      ) {
        isUpdated = true;
        await this.updateImages(id);
      }
      return isUpdated;
    },

    // reload updated product
    async reloadProduct(idx, id) {
      const data = await firebase
        .database()
        .ref('products/' + id)
        .get();

      const prodData = data.val();

      const product = {
        id: id,
        title: prodData.title,
        coverImage: prodData.coverImage,
        description: prodData.description,
        price: prodData.price,
        sizes: prodData.sizes,
        images: prodData.images,
        props: prodData.props
      };
      this.products[idx] = product;
    },

    // root update
    async updateDb(payload, idx) {
      this.$store.dispatch('loader/toggleLoader');

      this.changedProduct = this.copyProduct(payload);

      try {
        const isUpdated = await this.updateValues(this.changedProduct.id);
        if (isUpdated) {
          await this.reloadProduct(idx, this.changedProduct.id);
        }
        this.exitEditMode(idx);
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'error',
          msg: 'Seems like database is offline. Try again later...'
        });
      }

      this.$store.dispatch('loader/toggleLoader');
    },

    // remove from database
    async removeFromDb(id, idx) {
      if (this.isEditMode(idx)) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'Alert',
          msg: 'There may be unsaved changes !'
        });
        return;
      }

      if (!confirm('You sure ?')) {
        return;
      }

      this.editModeList[idx] = false;

      this.products = this.products.filter((p) => p.id !== id);

      try {
        await firebase
          .database()
          .ref('products/' + id)
          .remove();

        await firebase
          .storage()
          .ref('images/' + id + '/coverImage')
          .delete();

        await this.deleteImages(id);
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'Error',
          msg: 'Seems like database is offline. Try again later...'
        });
      }
    }
  },
  created() {
    this.loadProducts();
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

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .edit-btn,
  .remove-btn {
    font-size: calc(var(--basic-font-size) - 0.25rem);
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

.list-move {
  transition: all 0.3s ease-in-out;
}
</style>
