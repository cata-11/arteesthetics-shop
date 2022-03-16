import firebase from 'firebase/compat/app';
export default {
  async getProducts(context) {
    await firebase
      .database()
      .ref('products')
      .get()
      .then((data) => {
        const products = [];
        const product = data.val();
        for (const key in product) {
          products.push({
            id: key,
            title: product[key].title,
            coverImage: product[key].coverImage,
            description: product[key].description,
            price: product[key].price,
            sizes: product[key].sizes,
            images: product[key].images,
            props: product[key].props
          });
        }
        return products;
      })
      .then((products) => {
        context.commit('getProducts', products);
      })
      .catch((err) => {
        throw err;
      });
  }
};
