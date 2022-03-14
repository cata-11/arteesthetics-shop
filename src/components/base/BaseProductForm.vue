<template>
  <div class="add-product-container">
    <form class="edit-form-container">
      <div class="product-edit-container">
        <div class="cover-image-edit">
          <div class="cover-img-container">
            <img
              v-if="coverImagePreview"
              :src="coverImagePreview"
              alt="cover-image.png"
            />
          </div>
          <div class="file-input-container">
            <input
              type="file"
              accept="image/png"
              class="cover-img-input"
              @change="getCoverImage"
              :class="{ 'empty-file-input': error.coverImage }"
            />
          </div>
          <div class="props-edit-container">
            <label class="promotion"
              >Promotion
              <input
                type="checkbox"
                id="promotion"
                v-model="product.props.promotion"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div class="main-info-edit">
          <div>
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              :class="{ 'empty-text-input': error.title }"
              v-model.trim="product.title"
              @input="validateTitle"
            />
            <p class="error" :class="{ 'error-show': error.title }">
              invalid title
            </p>
          </div>

          <div>
            <label for="description">Description</label>
            <textarea
              required
              wrap="soft"
              id="description"
              placeholder="Description"
              :class="{ 'empty-text-input': error.description }"
              v-model.trim="product.description"
              @input="validateDescription"
            ></textarea>
            <p class="error" :class="{ 'error-show': error.description }">
              invalid description
            </p>
          </div>

          <div>
            <label for="price">Price</label>
            <input
              type="number"
              id="price"
              min="1"
              placeholder="Price"
              :class="{ 'empty-text-input': error.price }"
              v-model.number="product.price"
              @input="validatePrice"
            />
            <p class="error" :class="{ 'error-show': error.price }">
              invalid price
            </p>
          </div>
        </div>

        <div class="size-stock-edit">
          <div>
            <label for="size-xs">{{ product.sizes[0].size }}</label>
            <input
              type="number"
              id="size-xs"
              placeholder="XS"
              v-model.number="product.sizes[0].stock"
              @input="validateSize(0)"
              :class="{ 'empty-text-input': error.size[0] }"
            />
            <p class="error" :class="{ 'error-show': error.size[0] }">
              invalid size
            </p>
          </div>

          <div>
            <label for="size-s">{{ product.sizes[1].size }}</label>
            <input
              type="number"
              id="size-s"
              placeholder="S"
              v-model.number="product.sizes[1].stock"
              @input="validateSize(1)"
              :class="{ 'empty-text-input': error.size[1] }"
            />
            <p class="error" :class="{ 'error-show': error.size[1] }">
              invalid size
            </p>
          </div>
          <div>
            <label for="size-m">{{ product.sizes[2].size }}</label>
            <input
              type="number"
              id="size-m"
              placeholder="M"
              v-model.number="product.sizes[2].stock"
              @input="validateSize(2)"
              :class="{ 'empty-text-input': error.size[2] }"
            />
            <p class="error" :class="{ 'error-show': error.size[2] }">
              invalid size
            </p>
          </div>
          <div>
            <label for="size-l">{{ product.sizes[3].size }}</label>
            <input
              type="number"
              id="size-l"
              placeholder="L"
              v-model.number="product.sizes[3].stock"
              @input="validateSize(3)"
              :class="{ 'empty-text-input': error.size[3] }"
            />
            <p class="error" :class="{ 'error-show': error.size[3] }">
              invalid size
            </p>
          </div>
        </div>

        <div class="images-gallery-edit">
          <input
            type="file"
            accept="image/*"
            multiple
            class="multiple-images-input"
            @change="getImages"
            :class="{ 'empty-file-input': error.images }"
          />
          <div class="images-gallery">
            <div v-for="(img, idx) in imagesPreview" :key="idx">
              <img :src="img" :alt="idx + 1" />
            </div>
          </div>
        </div>
      </div>
      <div class="save-button-container">
        <button
          v-if="mode === 'update'"
          class="save-button"
          @click.prevent="updateProduct"
        >
          Save changes
        </button>
        <button
          v-if="mode === 'add'"
          class="save-button"
          @click.prevent="addProduct"
        >
          Add
        </button>
      </div>
    </form>
    <Teleport to="body">
      <base-dialog
        v-if="showDialog"
        :msg="dialogMsg"
        @closeDialog="closeDialog"
      ></base-dialog>
    </Teleport>
  </div>
</template>

<script>
export default {
  emits: ['product-updated', 'product-added'],
  props: {
    productData: {
      type: Object,
      required: false,
      default: null
    },
    idx: {
      type: Number,
      required: false,
      default: -1
    },
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: null,
      coverImagePreview: null,
      imagesPreview: [],

      error: {
        coverImage: false,
        title: false,
        description: false,
        price: false,
        size: [false, false, false, false],
        images: false
      },

      showDialog: false,
      dialogMsg: ''
    };
  },
  methods: {
    // validate
    validateCoverImage(e) {
      this.error.coverImage = false;
      this.coverImagePreview = null;
      const path = e.target.value;

      if (e.srcElement.files.length === 0) {
        this.error.coverImage = true;
        return false;
      }
      if (!/.png/.exec(path)) {
        this.error.coverImage = true;
        return false;
      }
      return true;
    },
    validateTitle() {
      this.error.title = false;
      if (this.product.title === null || this.product.title === '') {
        this.error.title = true;
        return false;
      }
      return true;
    },
    validateDescription() {
      this.error.description = false;
      if (
        this.product.description === null ||
        this.product.description === ''
      ) {
        this.error.description = true;
        return false;
      }
      return true;
    },
    validatePrice() {
      this.error.price = false;

      const price = this.product.price;
      if (price != null) {
        const strPrice = this.product.price.toString();
        if (/^0/.test(strPrice)) {
          this.product.price = strPrice.replace(/^0/, '');
        }
      }

      if (price === null || price === '' || price < 1 || isNaN(price)) {
        this.error.price = true;
        return false;
      }
      return true;
    },
    validateSize(idx) {
      this.error.size[idx] = false;
      const stock = this.product.sizes[idx].stock;

      if (stock === null || stock === '' || stock < 0 || isNaN(stock)) {
        this.error.size[idx] = true;
        return false;
      }
      return true;
    },
    validateImages(e) {
      this.error.images = false;
      this.imagesPreview = [];

      const images = [...e.srcElement.files];

      if (images.length === 0) {
        this.error.images = true;
        return false;
      }

      for (const img of images) {
        let name = img.name;
        if (!/.png/.exec(name)) {
          this.error.images = true;
          return false;
        }
      }
      return true;
    },
    getCoverImage(e) {
      if (!this.validateCoverImage(e)) {
        this.product.coverImage = null;
        return;
      }
      this.product.coverImage = e.target.files[0];
      this.coverImagePreview = URL.createObjectURL(e.target.files[0]);
    },
    getImages(e) {
      if (!this.validateImages(e)) {
        this.product.images = [];
        return;
      }
      this.product.images = [];
      for (let i = 0; i < e.target.files.length; ++i) {
        this.product.images.push(e.target.files[i]);
        this.imagesPreview.push(URL.createObjectURL(e.target.files[i]));
      }
    },
    handleImagesValidation() {
      //without events
      this.error.coverImage = false;
      this.error.images = false;

      if (this.product.coverImage === null) {
        this.error.coverImage = true;
      }
      if (this.product.images.length === 0) {
        this.error.images = true;
      }

      if (this.error.coverImage || this.error.images) {
        return false;
      }
      return true;
    },
    isFormValid() {
      let images_err = !this.handleImagesValidation();
      let title_err = !this.validateTitle();
      let desc_err = !this.validateDescription();
      let price_err = !this.validatePrice();
      let sizes_err = false;

      for (const i in this.product.sizes)
        if (!this.validateSize(i)) sizes_err = true;

      if (images_err || title_err || desc_err || price_err || sizes_err) {
        this.showDialog = true;
        this.dialogMsg =
          'Some data is incorrect or incomplete.\n Please enter valid data.';
        return false;
      }

      return true;
    },

    // add
    calculateTotalStock() {
      let total = 0;
      this.product.sizes.forEach((size) => {
        total += size.stock;
      });
      return total;
    },
    addProduct() {
      if (!this.isFormValid()) {
        return;
      }
      this.product.props.totalStock = this.calculateTotalStock();

      this.$emit('product-added', this.product);
    },
    prepareToAdd() {
      this.product = {
        title: null,
        coverImage: null,
        description: null,
        price: null,
        sizes: [
          {
            size: 'XS',
            stock: null
          },
          {
            size: 'S',
            stock: null
          },
          {
            size: 'M',
            stock: null
          },
          {
            size: 'L',
            stock: null
          }
        ],
        images: [],
        props: {
          totalStock: 0,
          promotion: false,
          bestseller: false
        }
      };
    },

    //update
    prepareToUpdate() {
      this.product = { ...this.productData };
      this.coverImagePreview = this.product.coverImage;
      this.imagesPreview = [...this.product.images];
    },

    updateProduct() {
      if (!this.isFormValid()) {
        return;
      }
      this.$emit('product-updated', this.product);
    },

    // others
    closeDialog() {
      this.showDialog = false;
    }
  },
  beforeMount() {
    if (this.mode === 'update') {
      this.prepareToUpdate();
    } else if (this.mode === 'add') {
      this.prepareToAdd();
    }
  }
};
</script>

<style scoped>
.empty-file-input {
  background-color: var(--red) !important;
}
.empty-text-input {
  border: 2px solid var(--red) !important;
  color: var(--red);
}
.error {
  opacity: 0;
}
.error-show {
  opacity: 1 !important;
  color: var(--red);
}
.add-product-container {
  margin-top: 1rem;
}
.edit-form-container {
  box-sizing: border-box;
  margin: 0 0.5rem;
  border: 2px solid var(--white);
  display: flex;
  flex-direction: column;

  --mini-gallery-width: 0;
}
.product-edit-container {
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

p {
  opacity: 0.5;
}

.cover-image-edit {
  /* border: 1px solid red; */
  width: 20%;
  height: 28rem;
  box-sizing: border-box;
}

.main-info-edit {
  /* border: 1px solid red; */
  width: 30%;
  height: 29rem;
  box-sizing: border-box;
  /* border-left: 5px solid var(--violet); */
  /* padding-left: 1rem; */
  border-left: 1px solid var(--violet);
  padding-left: 1rem;
}

.size-stock-edit {
  /* border: 1px solid red; */
  width: 11%;
  height: 29rem;
  box-sizing: border-box;
  border-left: 1px solid var(--violet);
  padding-left: 1rem;
  /* border-right: 1px solid var(--violet);
  padding-right: 1rem; */
  /* border-right: 5px solid var(--violet); */
}

/*   ___  */
.props-edit-container {
  margin-top: 0.5rem;
}

.promotion {
  position: relative;
  padding-left: 2.2rem;
  cursor: pointer;
}

.promotion input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 25px;
  width: 25px;
  background-color: var(--a-white);

  transition: all 0.2s ease-in-out;
}

.promotion:hover input ~ .checkmark {
  filter: brightness(80%);
}

.promotion input:checked ~ .checkmark {
  background-color: var(--violet);
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.promotion input:checked ~ .checkmark:after {
  display: block;
}

.promotion .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/*   ___  */

.images-gallery-edit {
  /* border: 1px solid red; */
  width: 39%;
  box-sizing: border-box;
  justify-content: flex-start;
}

.cover-img-container {
  width: 10rem;
  height: 10rem;
  padding: 0.75rem;
  border: 5px solid var(--a-white);
}
.cover-img-container img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
.cover-img-input {
  /* border: 1px solid yellow; */
  font-size: 1rem;
  width: 12.1rem;
  margin-top: 1rem;
  background-color: var(--violet);
  cursor: pointer;

  padding-bottom: 0.5rem !important;
  padding: 0.25rem;

  transition: all 0.2s ease-in-out;
}
.cover-img-input::-webkit-file-upload-button {
  display: none;
}
.cover-img-input::before {
  padding-left: 0 !important;
  content: 'Upload Image';
  display: block;
  text-align: center;
  background-color: var(--black);
  color: var(--white);
  font-size: 1rem;
  box-sizing: border-box;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  user-select: none;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
}
.cover-img-input:hover::before {
  background-color: var(--a-white);
  color: var(--black);
}

.multiple-images-input {
  font-size: 1rem !important;

  background-color: var(--violet);
  cursor: pointer;
  margin-bottom: 1rem;

  padding-bottom: 0.5rem !important;
  padding: 0.25rem;
  margin-top: 0;
  transition: all 0.2s ease-in-out;
}
.multiple-images-input::-webkit-file-upload-button {
  display: none;
}
.multiple-images-input::before {
  content: 'Upload Images';
  display: block;
  text-align: center;
  background-color: var(--black);
  color: var(--white);
  font-size: 1rem;
  box-sizing: border-box;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  user-select: none;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
}
.multiple-images-input:hover::before {
  background-color: var(--a-white);
  color: var(--black);
}

.images-gallery::-webkit-scrollbar {
  width: 0.5rem;
}
.images-gallery::-webkit-scrollbar-track {
  background-color: transparent;
}

.images-gallery::-webkit-scrollbar-thumb {
  background-color: var(--a-white);
}

.images-gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  overflow-y: overlay;
  height: 22.8rem;
  border: 3px solid var(--violet);
  box-sizing: border-box;
}
.images-gallery > div {
  width: 5.4rem;
  height: 5rem;
  border: 3px solid var(--a-white);
  padding: 0.5rem;
}
.images-gallery > div > img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.main-info-edit > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  /* border: 3px solid blueviolet; */
}
.size-stock-edit > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label,
input {
  font-size: 1.5rem;
}
input {
  margin: 0.25rem 0;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0.25rem;
  background-color: var(--a-white);
}

textarea {
  word-wrap: break-word;
  width: 100%;
  height: 9.8rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1.5rem;
  padding: 0.25rem;
  margin: 0.25rem 0;
  resize: none;
  background-color: var(--a-white);
}

.save-button-container {
  border-top: 2px solid var(--white);
  padding: 1rem;
}
.save-button {
  width: 25%;
}

.products-list {
  margin-top: 4rem;
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
.remove-btn,
.save-button {
  box-sizing: border-box;
  font-size: calc(var(--basic-font-size));
  border: 7px solid var(--violet);
  background-color: transparent;
  color: var(--white);
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}
.edit-btn,
.remove-btn {
  width: 100%;
}
.edit-btn:hover,
.remove-btn:hover,
.save-button:hover {
  color: var(--black);
  background-color: var(--a-white);
}

.remove-btn {
  margin-left: 1rem;
}

@media only screen and (min-width: 320px) and (max-width: 1159px) {
  .products-list {
    margin-top: 3rem;
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

/* edit form */
@media only screen and (min-width: 320px) and (max-width: 1159px) {
  .product-edit-container {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }

  .cover-image-edit,
  .main-info-edit,
  .size-stock-edit,
  .images-gallery-edit {
    width: calc(var(--main-width) / 1.5);

    justify-content: center;
    height: fit-content;
  }
  .cover-img-container {
    margin: 0 auto;
    width: calc(var(--main-width) / 1.5);
    height: calc(var(--main-width) / 1.5);
    box-sizing: border-box;
  }
  .file-input-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: calc(var(--main-width) / 1.5);
  }
  .file-input-container > input {
    width: 100%;
    font-size: calc(var(--basic-font-size) / 1.5);
  }
  .file-input-container > input::before {
    width: 100%;
    font-size: var(--basic-font-size);
    line-height: unset;
  }
  .props-edit-container {
    margin-top: 1rem;
    font-size: var(--basic-font-size);
  }

  input,
  label {
    font-size: var(--basic-font-size);
  }
  .main-info-edit > div {
    margin-bottom: 0.5rem;
  }
  textarea {
    font-size: var(--basic-font-size);
    height: calc(var(--main-width) / 3);
  }
  .size-stock-edit {
    border: none;
    padding: 0;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  }
  .main-info-edit {
    border: none;
    padding: 0;
  }

  .size-stock-edit > div {
    margin-bottom: 0.5rem;
    width: 15%;
  }
  .size-stock-edit > div > p {
    font-size: calc(var(--basic-font-size) / 2);
  }

  .save-button {
    width: 100%;
  }

  input[type='file']::before {
    font-size: var(--basic-font-size);
    line-height: unset;
  }
  input[type='file'] {
    font-size: calc(var(--basic-font-size) / 1.5) !important;
  }

  .images-gallery-edit {
    --mini-gallery-width: calc(var(--main-width) / 1.5);
    width: calc(var(--main-width) / 1.5);
  }
  .images-gallery {
    height: calc(var(--main-width) / 1.5);
    gap: 1rem;
  }
  .images-gallery > div {
    border: 3px solid var(--a-white);
    padding: 0.5rem;
  }

  .roll-enter-active,
  .roll-leave-active {
    max-height: 200rem;
  }
}

@media only screen and (max-width: 1159px) {
  .img-container {
    width: calc(var(--main-width) / 5);
    height: calc(var(--main-width) / 5);
  }
  .product-edit-container {
    margin: 2rem;
    border-left: 5px solid var(--a-white);
    border-right: 5px solid var(--a-white);
  }
  .images-gallery > div {
    width: calc(var(--mini-gallery-width) / 3 - 3rem);
    height: calc(var(--mini-gallery-width) / 3 - 3rem);
  }
}

@media only screen and (max-width: 680px) {
  .img-container {
    width: calc(var(--main-width) / 6);
    height: calc(var(--main-width) / 6);
  }
  .product-edit-container {
    margin: 0;
    border: none;
  }
  .images-gallery::-webkit-scrollbar {
    width: 0.25rem;
  }
  .images-gallery > div {
    width: calc(var(--mini-gallery-width) / 3 - 2.9rem);
    height: calc(var(--mini-gallery-width) / 3 - 2.9rem);
  }
}
</style>
