<template>
  <section>
    <div id="gallery">
      <div class="main-image">
        <img :src="images[currentImageIdx].src" alt="" />
      </div>
      <div class="images-carousel">
        <div class="images-container">
          <div
            v-for="(img, idx) in images"
            :key="img.id"
            class="image-item"
            :class="{ active: img.isActive }"
            @click="scrollToImage(idx)"
          >
            <img :src="img.src" :alt="img.id" />
          </div>
        </div>
      </div>
    </div>
    <div id="details">
      <div class="info">
        <div class="details-header">
          <h1 class="title">{{ product.title }}</h1>
          <p class="description">{{ product.description }}</p>
        </div>
        <p class="price">
          <span class="new"> ${{ product.price }}</span
          ><span class="old"> ${{ product.price * 1.5 }}</span>
        </p>
        <div class="sizes">
          <p class="choose-size-p">Choose your size:</p>
          <div class="size-select-container">
            <div
              class="size"
              :class="{ selected: selectedSize === size.size }"
              v-for="size in product.sizes"
              :key="size.size"
              @click="selectSize"
            >
              {{ size.size }}
            </div>
          </div>
          <p class="see-size">
            Not sure about the size ? Check our <a href="">size chart</a>.
          </p>
        </div>
      </div>
      <div class="actions">
        <button class="add-to-cart-btn">Add to cart</button>
        <div class="add-to-favourites-btn" @click="addToFavourites">
          <img
            :src="isFavourite ? '/heart_full.svg' : '/heart_empty.svg'"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 0,
          title: 'Aesthetic Skull',
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
          id: 1,
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
            stockTotal: 0,
            promotion: true,
            bestseller: true
          }
        }
      ],
      product: null,
      images: [],
      currentImageIdx: 0,
      selectedSize: null,
      isFavourite: false
    };
  },
  methods: {
    scrollToImage(idx) {
      const scroller = document.querySelector('.images-container');
      const image = scroller.querySelector('.image-item');
      const imageStyle = window.getComputedStyle(image);
      const imageWidth = parseFloat(imageStyle.width);

      if (idx > this.currentImageIdx) {
        if (idx == 1) scroller.scrollBy(0, 0);
        else scroller.scrollBy(imageWidth, 0);
      } else if (idx < this.currentImageIdx) {
        if (idx == this.images.length - 2) scroller.scrollBy(0, 0);
        else scroller.scrollBy(-imageWidth, 0);
      }

      for (let i = 0; i < this.images.length; ++i) {
        if (idx == i) {
          this.images[i].isActive = true;
        } else {
          this.images[i].isActive = false;
        }
      }
      this.currentImageIdx = idx;
    },
    selectSize(e) {
      this.selectedSize = e.target.textContent;
    },
    addToFavourites() {
      this.isFavourite = !this.isFavourite;
    }
  },
  created() {
    this.product = this.products[+this.$route.params.id];
    this.images = this.product.images;
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 70rem;
}
#gallery {
  width: 35rem;
}
.main-image {
  width: 35rem;
  height: 35rem;
  border: 1rem solid var(--a-white);
  box-sizing: border-box;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.images-carousel {
  margin-top: 1rem;
  width: 35rem;
  height: 11rem;
  display: flex;
  position: relative;
}
.carousel-btn {
  position: absolute;
  z-index: 3;
  width: 3rem;
  height: 10rem;
  font-size: 5rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--a-white);
  background-color: var(--violet);
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
}
.carousel-btn.prev {
  top: 0;
  left: 0;
}
.carousel-btn.next {
  top: 0;
  right: 0;
}
.carousel-btn:hover {
  opacity: 0.9;
}
.hide {
  display: none;
}
.images-container {
  width: 100%;
  scroll-behavior: smooth;
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
}
.images-container::-webkit-scrollbar {
  display: none;
}
.image-item {
  scroll-snap-align: end;
  margin: 0 1rem 0 0;
  border: 0.5rem solid var(--a-white);
  box-sizing: border-box;
  display: inline;
  width: 11rem;
  height: 11rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  filter: brightness(50%);
}
.image-item:hover {
  filter: brightness(60%);
}
.image-item:last-of-type {
  margin: 0;
}
.image-item > img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}
.active {
  filter: brightness(100%);
}
.active:hover {
  filter: brightness(100%);
}

#details {
  width: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#details > .info {
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#details > .actions {
  width: 100%;
  height: 11rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-right: 10px solid var(--a-white);
  border-bottom: 10px solid var(--a-white);
  /* border-top: 10px solid var(--a-white); */
  /* border-left: 10px solid var(--a-white); */
}
.details-header > .title {
  font-size: 2.5rem;
  padding: 1rem;
  text-transform: uppercase;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 0.2rem;
  border-left: 1rem solid var(--black);
  background-color: var(--violet);
}

.details-header > .description {
  font-size: 1.5rem;
  padding: 0.75rem;
  border-left: 1rem solid var(--violet);
}

.price {
  font-size: 2rem;
  text-transform: uppercase;
  border-left: 1rem solid var(--a-white);
  color: var(--white);
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
}
.price > .new {
  width: 50%;
  text-align: center;
  background-color: var(--pink);
  padding: 1rem;
}
.price > .old {
  width: 50%;
  text-decoration: line-through;
  text-align: center;
  color: var(--black);
  padding: 1rem;
  background-color: var(--a-white);
}

.choose-size-p {
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 10px solid var(--a-white);
  margin-bottom: 1rem;
}

.size-select-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.size {
  cursor: pointer;
  width: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: var(--red);
  color: var(--a-white);
  border: 7px solid transparent;
  transition: all 0.2s ease-in-out;
}
.size:hover {
  filter: brightness(80%);
}
.size.selected {
  border-color: var(--a-white);
}
.size.selected:hover {
  filter: brightness(100%);
}
.see-size {
  width: fit-content;
  margin-top: 1rem;
}
.see-size > a {
  border-bottom: 1px solid var(--a-white);
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}
.see-size > a:hover {
  color: var(--pink);
  border-color: var(--pink);
}

.add-to-cart-btn {
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.9rem;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  width: 50%;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 1rem 0;
  text-align: center;
  color: var(--black);
  background-color: var(--a-white);
  transition: all 0.2s ease-in-out;
  border-left: 1rem solid var(--pink);
}
.add-to-cart-btn:hover {
  filter: brightness(80%);
}
.add-to-favourites-btn {
  width: 50%;

  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.add-to-favourites-btn > img {
  width: 4rem;
}
.add-to-favourites-btn:hover {
  filter: brightness(80%);
}
</style>
