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
        ></base-product-form>
      </Transition>
    </li>
  </ul>
</template>

<script>
import firebase from 'firebase/compat/app';
import BaseProductForm from '../../base/BaseProductForm.vue';
export default {
  data() {
    return {
      editModeList: [],
      products: [],
      changedProduct: null,
      initialProduct: null
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      await this.$store.dispatch('products/getProducts').then(() => {
        this.products = this.$store.getters['products/products'];
      });
    },
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
    copyProduct(payload) {
      const product = { ...payload };
      product.images = [...payload.images];
      product.props = { ...payload.props };
      product.sizes = [];

      product.sizes = payload.sizes.map((s) => s);

      return product;
    },
    findProduct(id) {
      return this.products.find((product) => product.id === id);
    },
    async changeTitleValue(productId) {
      await firebase
        .database()
        .ref('products/' + productId)
        .child('title')
        .set(this.changedProduct['title']);
    },
    async changeDescriptionValue(productId) {
      await firebase
        .database()
        .ref('products/' + productId)
        .child('description')
        .set(this.changedProduct['description']);
    },
    async changePriceValue(productId) {
      await firebase
        .database()
        .ref('products/' + productId)
        .child('price')
        .set(this.changedProduct['price']);
    },
    async changeSizesValue(productId) {
      await firebase
        .database()
        .ref('products/' + productId)
        .child('sizes')
        .set(this.changedProduct['sizes']);
    },
    async changeCoverImage(productId) {
      await firebase
        .storage()
        .ref('images/' + productId + '/coverImage')
        .put(this.changedProduct['coverImage']);
    },
    async deleteImages(productId) {
      try {
        await firebase
          .storage()
          .ref('images/' + productId + '/images/')
          .listAll()
          .then((images) => {
            images.items.forEach((img) => {
              img.delete();
            });
          });
      } catch (err) {
        console.log(err);
      }
    },
    async changeImages(productId) {
      const urls = [];
      for (let i = 0; i < this.changedProduct['images'].length; ++i) {
        const res = await this.changeImage(
          productId,
          this.changedProduct['images'][i],
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
    async changeImagesUrl(productId, urls) {
      firebase.database().ref('products').child(productId).update({
        images: urls
      });
    },
    async changeImage(productId, img, name) {
      const res = await firebase
        .storage()
        .ref('images/' + productId + `/images/${name}`)
        .put(img);
      return res.ref;
    },
    async changeValues(productId) {
      if (this.initialProduct['title'] !== this.changedProduct['title']) {
        console.log('change title');

        await this.changeTitleValue(productId);
      }
      if (
        this.initialProduct['description'] !==
        this.changedProduct['description']
      ) {
        console.log('change desc');

        await this.changeDescriptionValue(productId);
      }
      if (this.initialProduct['price'] !== this.changedProduct['price']) {
        console.log('change price');

        await this.changePriceValue(productId);
      }

      if (
        this.initialProduct['coverImage'] !== this.changedProduct['coverImage']
      ) {
        console.log('change cover image');

        await this.changeCoverImage(productId);
      }
      if (
        JSON.stringify(this.initialProduct['images']) !==
        JSON.stringify(this.changedProduct['images'])
      ) {
        console.log('change images');
        await this.deleteImages(productId);
        const urls = await this.changeImages(productId);
        await this.changeImagesUrl(productId, urls);
      }
      for (let i in this.initialProduct['sizes']) {
        if (
          this.initialProduct['sizes'][i].stock !==
          this.changedProduct['sizes'][i].stock
        ) {
          console.log('change sizes');

          await this.changeSizesValue(productId);
        }
      }
      console.log(this.initialProduct['sizes']);
      console.log(this.changedProduct['sizes']);
    },
    updateDb(payload, idx) {
      this.saveChanges(idx);

      this.changedProduct = this.copyProduct(payload);
      this.initialProduct = this.findProduct(this.changedProduct.id);

      const productId = this.initialProduct.id;
      try {
        this.changeValues(productId);
      } catch (err) {
        console.log(err);
      }
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
</style>
