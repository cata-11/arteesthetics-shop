<template>
  <base-product-form mode="add" @productAdded="addToDb"></base-product-form>
</template>

<script>
import BaseProductForm from '../../base/BaseProductForm.vue';
import firebase from 'firebase/compat/app';
export default {
  data() {
    return {};
  },
  components: {
    BaseProductForm
  },
  methods: {
    async addProduct(product) {
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
      firebase.database().ref('products').child(key).update({
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

      this.addImagesUrl(key, images);
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
      firebase.database().ref('products').child(key).update({
        images: images
      });
    },

    // root
    async addToDb(product) {
      try {
        const key = await this.addProduct(product);
        const coverImgRef = await this.addCoverImage(key, product.coverImage);
        const coverImgUrl = await this.getCoverImageUrl(coverImgRef);
        await this.addCoverImageUrl(key, coverImgUrl);
        await this.addImages(key, product.images);
      } catch (err) {
        console.log('Something went wrong !\n', err);
      }
      console.log(product);
    }
  }
};
</script>
