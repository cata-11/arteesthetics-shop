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
            <button class="edit-btn" @click="enterEditMode(idx)">edit</button>
            <button class="remove-btn">remove</button>
          </div>
        </div>
      </div>
      <Transition name="roll" mode="out-in">
        <form v-if="editModeList[idx]" class="edit-form-container">
          <div class="product-edit-container">
            <div class="cover-image-edit">
              <div class="cover-img-container">
                <img src="/shirt0.png" alt="" />
              </div>
              <div class="file-input-container">
                <input type="file" class="cover-img-input" />
              </div>
              <div class="props-edit-container">
                <label class="promotion"
                  >Promotion
                  <input type="checkbox" id="promotion" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

            <div class="main-info-edit">
              <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="product.title" />
                <p>Wrong</p>
              </div>

              <div>
                <label for="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  v-model="product.description"
                  wrap="soft"
                ></textarea>
                <p>Wrong</p>
              </div>

              <div>
                <label for="price">Price</label>
                <input type="text" id="price" v-model="product.price" />
                <p>Wrong</p>
              </div>
            </div>

            <div class="size-stock-edit">
              <div>
                <label for="size-xs">XS</label>
                <input
                  type="number"
                  id="size-xs"
                  v-model="product.sizes[0].stock"
                />
                <p>wrong</p>
              </div>

              <div>
                <label for="size-s">S</label>
                <input
                  type="number"
                  id="size-s"
                  v-model="product.sizes[1].stock"
                />
                <p>wrong</p>
              </div>
              <div>
                <label for="size-m">M</label>
                <input
                  type="number"
                  id="size-m"
                  v-model="product.sizes[2].stock"
                />
                <p>wrong</p>
              </div>
              <div>
                <label for="size-l">L</label>
                <input
                  type="number"
                  id="size-l"
                  v-model="product.sizes[3].stock"
                />
                <p>wrong</p>
              </div>
            </div>

            <div class="images-gallery-edit">
              <input type="file" multiple class="multiple-images-input" />
              <div class="images-gallery">
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
                <div>
                  <img src="/shirt0.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="save-button-container">
            <button class="save-button" @click.prevent="saveChanges(idx)">
              Save changes
            </button>
          </div>
        </form>
      </Transition>
    </li>
  </ul>
</template>

<script>
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
    }
  },
  mounted() {
    this.setEditModeList();
  }
};
</script>

<style scoped>
.edit-form-container {
  box-sizing: border-box;
  margin: 0 0.5rem;
  border: 1rem solid var(--a-white);
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
  height: 28rem;
  box-sizing: border-box;
  /* border-left: 5px solid var(--violet); */
  /* padding-left: 1rem; */
  border-left: 1px solid var(--violet);
  padding-left: 1rem;
}

.size-stock-edit {
  /* border: 1px solid red; */
  width: 11%;
  height: 28rem;
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
  height: 22rem;
  border: 4px solid var(--violet);
  box-sizing: border-box;
}
.images-gallery > div {
  width: 5.17rem;
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
  height: 9.65rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1.5rem;
  padding: 0.25rem;
  resize: none;
  background-color: var(--a-white);
  font-family: 'Roboto Slab', serif;
}

.save-button-container {
  border-top: 0.5rem solid var(--a-white);
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
