<template>
  <section>
    <product-form mode="add" @productAdded="addToDb" :key="key"></product-form>
  </section>
</template>

<script>
import ProductForm from './ProductForm.vue';
import firebase from 'firebase/compat/app';
export default {
  data() {
    return {
      key: 0
    };
  },

  components: {
    ProductForm
  },
  methods: {
    //add basic data
    async addProductData(product) {
      const res = await firebase.database().ref('products').push(product);
      return res.key;
    },

    //add cover image
    async addCoverImage(key, img) {
      const res = await firebase
        .storage()
        .ref('images/' + key + '/coverImage')
        .put(img);
      return res.ref;
    },
    async getCoverImageUrl(ref) {
      const res = await ref.getDownloadURL();
      return res;
    },
    async addCoverImageUrl(key, url) {
      await firebase.database().ref('products').child(key).update({
        coverImage: url
      });
    },

    // add images
    async addImages(key, prodImages) {
      const images = [];

      for (let i = 0; i < prodImages.length; ++i) {
        const res = await this.addImage(key, prodImages[i], i + 1);
        const url = await this.getImageUrl(res);
        images.push(url);
      }

      await this.addImagesUrl(key, images);
    },
    async addImage(key, img, name) {
      const res = await firebase
        .storage()
        .ref('images/' + key + `/images/${name}`)
        .put(img);
      return res.ref;
    },
    async getImageUrl(ref) {
      const res = await ref.getDownloadURL();
      return res;
    },
    async addImagesUrl(key, images) {
      await firebase.database().ref('products').child(key).update({
        images: images
      });
    },

    // root
    async addToDb(product) {
      try {
        this.$store.dispatch('loader/toggleLoader');
        const key = await this.addProductData(product);
        const coverImgRef = await this.addCoverImage(key, product.coverImage);
        const coverImgUrl = await this.getCoverImageUrl(coverImgRef);
        await this.addCoverImageUrl(key, coverImgUrl);
        await this.addImages(key, product.images);
        this.$store.dispatch('loader/toggleLoader');
        this.$store.dispatch('dialog/showDialog', {
          type: 'confirmation',
          msg: 'New product succesfully added !'
        });
        this.clearForm();
      } catch (err) {
        this.$store.dispatch('dialog/showDialog', {
          type: 'error',
          msg: 'Seems like database is offline. Try again later...'
        });
      }
    },

    clearForm() {
      this.key++;
    }
  }
};
</script>
