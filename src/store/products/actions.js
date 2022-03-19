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
          const temp = {
            id: key,
            title: product[key].title,
            coverImage: product[key].coverImage,
            description: product[key].description,
            price: product[key].price,
            sizes: product[key].sizes,
            images: product[key].images,
            props: product[key].props
          };
          let sum = 0;
          temp.sizes.forEach((size) => (sum += +size.stock));
          temp.props.inStock = sum !== 0 ? true : false;
          products.push(temp);
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
